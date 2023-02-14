import Wallpaper from "./components/Wallpaper";
import Directory from "./components/Directory";
import Layer from "./components/Layer";
import Taskbar from "./components/Taskbar";
import { useState } from "react";

import "./assets/css/common.scss";

function App() {
  const DB = [
    {
      title: "JavaScript",
      type: "dir",
      fileList: [
        { name: "1. 기본 개념과 동작 원리 이해의 중요성", size: "22KB", type: "txt", createdDate: "2022-05-10" },
        { name: "2. 자바스크립트란?", size: "53KB", type: "txt", createdDate: "2022-05-12" },
        { name: "3. 자바스크립트 개발 환경과 실행 방법", size: "32KB", type: "txt", createdDate: "2022-05-17" },
      ],
    },
    {
      title: "React",
      type: "dir",
      fileList: [
        { name: "1. 기본 개념과 동작 원리 이해의 중요성", size: "22KB", type: "txt", createdDate: "2022-05-10" },
        { name: "2. 리액트란?", size: "53KB", type: "txt", createdDate: "2022-05-12" },
        { name: "3. 리액트 개발 환경과 실행 방법", size: "32KB", type: "txt", createdDate: "2022-05-17" },
      ],
    },
    {
      title: "ABC",
      type: "dir",
      fileList: [
        { name: "1. 기본 개념과 동작 원리 이해의 중요성", size: "22KB", type: "txt", createdDate: "2022-05-10" },
        { name: "2. 자바스크립트란?", size: "53KB", type: "txt", createdDate: "2022-05-12" },
        { name: "3. 자바스크립트 개발 환경과 실행 방법", size: "32KB", type: "txt", createdDate: "2022-05-17" },
      ],
    },
  ];

  const [taskList, setTaskList] = useState([]);
  return (
    <main>
      <Wallpaper setTaskList={setTaskList} taskList={taskList} DB={DB} />
      {DB.filter(db => taskList.includes(db.title)).map((db, i) => (
        <Directory key={i} setTaskList={setTaskList} taskList={taskList} db={db} />
      ))}
      <Layer />
      <Taskbar taskList={taskList} DB={DB} />
    </main>
  );
}

export default App;
