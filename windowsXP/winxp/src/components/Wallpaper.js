import { useState, useEffect } from "react";

function Wallpaper({ taskList, setTaskList, DB }) {
  // 한번클릭시 focus
  // const [oneClick, setOneClick] = useState(false);
  const focusThis = event => {
    // setOneClick(true);
    event.target.focus();
  };

  // 두번클릭시 open
  // const [doubleClick, setDoubleClick] = useState(false);
  const openDir = event => {
    if (!taskList.includes(event.target.innerText)) {
      setTaskList([...taskList, event.target.innerText]);
    }
  };

  // 우클릭 이벤트
  const [contextOpen, setContextOpen] = useState({ state: false, pageY: 0, pageX: 0 });
  useEffect(() => {
    const onContextMenu = event => {
      event.preventDefault();
      setContextOpen({ state: true, pageY: event.pageY, pageX: event.pageX });
    };
    function onClearContextMenu(event) {
      setContextOpen({ state: false });
    }
    window.addEventListener("contextmenu", onContextMenu, false);
    window.addEventListener("click", onClearContextMenu, false);
  }, []);

  return (
    <section className="wallpaper">
      {contextOpen.state && (
        <div className="context" style={{ top: `${contextOpen.pageY}px`, left: `${contextOpen.pageX}px` }}>
          메뉴
        </div>
      )}
      <ul>
        {DB.map((data, i) => (
          <li key={i}>
            <button onClick={focusThis} onDoubleClick={openDir} className={data.type}>
              <span className={data.type}>
                {data.title}
                {data.type !== "dir" ? "." + data.type : ""}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Wallpaper;
