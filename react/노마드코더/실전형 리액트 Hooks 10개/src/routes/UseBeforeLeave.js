import { useState, useEffect } from "react";

const useBeforeLeave = onBefore => {
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = event => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
};

function BeforeLeaveUse() {
  const begForLife = () => console.log("Plz don't leave");
  useBeforeLeave(begForLife);
  return (
    <div>
      <h1>마우스가 위쪽으로 벗어날 때 이벤트 실행</h1>
    </div>
  );
}

export default BeforeLeaveUse;
