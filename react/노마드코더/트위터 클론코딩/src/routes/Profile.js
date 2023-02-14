import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService, dbService } from "../fbase";
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { updateProfile } from "firebase/auth";

const Profile = ({ refreshUser, userObj }) => {
  const navigate = useNavigate();
  const onLogOutClick = () => {
    authService.signOut();
    navigate("/", { replace: true });
    refreshUser();
  };

  const [myTweets, setMyTweets] = useState([]);
  const getMyTweets = async () => {
    const q = query(
      collection(dbService, "tweets"),
      where("creatorId", "==", `${userObj.uid}`),
      orderBy("createdAt", "desc"),
    );
    onSnapshot(q, snapshot => {
      const myTweetArr = snapshot.docs.map((document, i) => ({
        index: i,
        ...document.data(),
      }));
      setMyTweets(myTweetArr);
    });
  };
  useEffect(() => {
    getMyTweets();
  }, []);

  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onTyping = event => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  const onSubmit = async event => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await updateProfile(authService.currentUser, {
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };
  return (
    <section>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onTyping}
          value={newDisplayName}
          placeholder="사용자명"
        />
        <input type="submit" value="프로필 수정" />
      </form>
      <ul>
        {myTweets.map(tweet => (
          <li key={tweet.index}>
            <h4>{tweet.text}</h4>
          </li>
        ))}
      </ul>
      <button onClick={onLogOutClick}>로그아웃</button>
    </section>
  );
};

export default Profile;
