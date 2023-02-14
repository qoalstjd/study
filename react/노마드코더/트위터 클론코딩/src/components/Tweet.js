import { useState } from "react";
import { dbService, storageService } from "../fbase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";

const Tweet = ({ tweetObj, isOwner }) => {
  const TweetTextRef = doc(dbService, "tweets", `${tweetObj.id}`);
  const [editing, setEditing] = useState(false);
  const [newTweet, setNewTweet] = useState(tweetObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("정말 이 트윗을 삭제하시겠습니까?");
    if (ok) {
      await deleteDoc(TweetTextRef);
      await deleteObject(ref(storageService, tweetObj.attachmentURL));
    }
  };
  const toggleEditing = () => setEditing(prev => !prev);
  const onSubmit = async event => {
    event.preventDefault();
    await updateDoc(TweetTextRef, {
      text: newTweet,
    });
    setEditing(false);
  };
  const onTyping = event => {
    setNewTweet(event.target.value);
  };

  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuOpen = () => {
    setMenuOpen(prev => !prev);
  };
  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input type="text" onChange={onTyping} value={newTweet} required />
            <input type="submit" value="확인" />
          </form>
          <button onClick={toggleEditing}>취소</button>
        </>
      ) : (
        <div className="tweet">
          <img className="tweetImg" src="img/profile.jpg" alt="" />
          <div className="tweetContent">
            <div className="tweetContentInfo">
              <div>
                <span className="creatorName">{tweetObj.creatorName}</span>
                <span>{tweetObj.creatorEmail}</span>
                <span>{tweetObj.createdDate}</span>
              </div>
              <button onClick={menuOpen}>
                {isMenuOpen ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true" width="24px">
                    <g>
                      <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                    </g>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true" width="24px">
                    <g>
                      <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                    </g>
                  </svg>
                )}
              </button>
              {isOwner && isMenuOpen && (
                <div className="menu">
                  <button onClick={onDeleteClick}>
                    <svg viewBox="0 0 24 24" aria-hidden="true" width="20px">
                      <g>
                        <path d="M11.57 11.96l.99-.79c.33-.26.56-.53.7-.8.15-.27.22-.57.22-.91 0-.41-.12-.74-.38-.97s-.62-.35-1.09-.35-.85.12-1.13.37c-.26.25-.4.59-.4 1.03 0 .2.03.42.08.65l-2.07-.15c-.06-.29-.09-.55-.09-.79 0-.84.33-1.51.98-2.01.67-.49 1.55-.74 2.66-.74 1.17 0 2.07.24 2.71.73.63.48.95 1.16.95 2.04 0 .98-.47 1.86-1.4 2.65l-.87.73c-.17.15-.29.28-.36.4-.06.11-.09.26-.09.45v.46h-2.1v-.67c0-.3.06-.55.17-.75.12-.2.29-.39.52-.58zm-.52 5.17c.24.25.56.37.93.37.39 0 .7-.12.94-.37.25-.25.37-.56.37-.94 0-.39-.12-.7-.37-.95-.24-.25-.55-.37-.94-.37-.37 0-.69.12-.93.37s-.36.56-.36.95c0 .38.12.69.36.94zM22.25 12c0 5.66-4.59 10.25-10.25 10.25S1.75 17.66 1.75 12 6.34 1.75 12 1.75 22.25 6.34 22.25 12zM12 20.25c4.56 0 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75 3.75 7.44 3.75 12s3.69 8.25 8.25 8.25z"></path>
                      </g>
                    </svg>
                    트윗 삭제
                  </button>
                  <button onClick={toggleEditing}>
                    <svg viewBox="0 0 24 24" aria-hidden="true" width="20px">
                      <g>
                        <path d="M11.57 11.96l.99-.79c.33-.26.56-.53.7-.8.15-.27.22-.57.22-.91 0-.41-.12-.74-.38-.97s-.62-.35-1.09-.35-.85.12-1.13.37c-.26.25-.4.59-.4 1.03 0 .2.03.42.08.65l-2.07-.15c-.06-.29-.09-.55-.09-.79 0-.84.33-1.51.98-2.01.67-.49 1.55-.74 2.66-.74 1.17 0 2.07.24 2.71.73.63.48.95 1.16.95 2.04 0 .98-.47 1.86-1.4 2.65l-.87.73c-.17.15-.29.28-.36.4-.06.11-.09.26-.09.45v.46h-2.1v-.67c0-.3.06-.55.17-.75.12-.2.29-.39.52-.58zm-.52 5.17c.24.25.56.37.93.37.39 0 .7-.12.94-.37.25-.25.37-.56.37-.94 0-.39-.12-.7-.37-.95-.24-.25-.55-.37-.94-.37-.37 0-.69.12-.93.37s-.36.56-.36.95c0 .38.12.69.36.94zM22.25 12c0 5.66-4.59 10.25-10.25 10.25S1.75 17.66 1.75 12 6.34 1.75 12 1.75 22.25 6.34 22.25 12zM12 20.25c4.56 0 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75 3.75 7.44 3.75 12s3.69 8.25 8.25 8.25z"></path>
                      </g>
                    </svg>
                    트윗 수정
                  </button>
                </div>
              )}
            </div>
            <p>{tweetObj.text}</p>
            {tweetObj.attachmentURL && (
              <img src={tweetObj.attachmentURL} alt="" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tweet;
