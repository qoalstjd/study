import { useState, useEffect } from "react";
import { authService } from "../fb";
import Router from "./Router"

import "../css/reset.css";
import "../css/common.css";

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (<>{init ? <Router isLoggedIn={isLoggedIn} /> : "잠시만 기다려 주세요!"}</>);
};

export default App;