import { useState, useEffect, useRef } from "react";

const useFullscreen = callback => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    if (document.fullscreenElement != null) {
      document.exitFullscreen();
      if (callback && typeof callback === "function") {
        callback(false);
      }
    }
  };
  return { element, triggerFull, exitFull };
};

function FullscreenUse() {
  const onFullS = isFull => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://t1.daumcdn.net/cfile/tistory/996333405A8280FC23" alt="" />
        <button onClick={exitFull}>나가기</button>
      </div>
      <button onClick={triggerFull}>전체화면</button>
    </div>
  );
}

export default FullscreenUse;
