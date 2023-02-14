import { useState, useEffect } from "react";
import Router from "./Router";
import { authService } from "../fbase";
import "../css/reset.css";
import "../css/common.css";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          photoUrl: user.photoURL,
          email: user.email,
          updateProfile: args => user.updateProfile(args),
        });
      } else {
        setIsLoggedIn(false);
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      email: user.email,
      photoUrl: user.photoURL,
      updateProfile: args => user.updateProfile(args),
    });
  };
  return (
    <>
      {init ? (
        <Router
          isLoggedIn={isLoggedIn}
          userObj={userObj}
          refreshUser={refreshUser}
        />
      ) : (
        "로그인 정보 확인중..."
      )}
    </>
  );
}

export default App;
