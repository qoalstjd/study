import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, query, onSnapshot, orderBy, where } from "firebase/firestore";
import { dbService } from "../fb";
import styled from "styled-components";

import Directory from "../components/Directory";
import TaskBar from "../components/TaskBar";

const StyledWallpaper = styled.section`
  background: url(img/wallpaper.jpg) no-repeat center;
  background-size: cover;
  height: calc(100vh - 36px);

  ul {
    position: absolute;
  }

  ul > li > button.on + div {
    display: block;
  }
`;

const StyledContext = styled.ul`
  ${({ contextOpen }) => {
    return contextOpen.state
      ? `display: block; left: ${contextOpen.pageX}px; top: ${contextOpen.pageY}px;`
      : `display: none`;
  }}
`;

const Wallpaper = () => {
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
    document.addEventListener("contextmenu", onContextMenu, false);
    document.addEventListener("click", onClearContextMenu, false);
  }, []);

  const today = new Date();
  // 파일생성 이벤트
  const onFileCreate = async () => {
    try {
      const docRef = await addDoc(collection(dbService, "React"), {
        title: "리액트의 이해",
        content: "lorem lisum apooijet",
        createdAt: Date.now(),
        createdDate: `${today.getFullYear()}-${today.getMonth() >= 10 ? today.getMonth() : "0" + today.getMonth()}-${
          today.getDate() >= 10 ? today.getDate() : "0" + today.getDate()
        }`,
        type: "JavaScript",
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // 파일 가져오기
  const [files, setFiles] = useState([]);
  useEffect(() => {
    const q = query(collection(dbService, "React"));
    onSnapshot(q, snapshot => {
      const fileArr = snapshot.docs.map(document => ({
        id: document.id,
        ...document.data(),
      }));
      setFiles(fileArr);
    });
  }, []);
  const [dirFiles, setDirFiles] = useState([]);
  useEffect(() => {
    const q = query(collection(dbService, "files"), where("type", "==", "JavaScript"), orderBy("createdAt", "desc"));
    onSnapshot(q, snapshot => {
      const dirFileArr = snapshot.docs.map(document => ({
        id: document.id,
        ...document.data(),
      }));
      setDirFiles(dirFileArr);
    });
  }, []);

  // 디렉토리 열기
  const [openedDir, setOpenedDir] = useState([]);
  const dirOpen = event => {
    if (!openedDir.includes(event.target.innerHTML)) setOpenedDir([...openedDir, event.target.innerHTML]);
  };

  return (
    <>
      <StyledWallpaper>
        <StyledContext contextOpen={contextOpen}>
          <li>
            <button onClick={onFileCreate}>파일생성</button>
          </li>
        </StyledContext>
        <ul>
          <li>
            <button onClick={dirOpen}>JavaScript</button>
            {files.map(fileObj => (
              <Directory key={fileObj.id} fileObj={files} />
            ))}
          </li>
          <li>
            <button onClick={dirOpen}>React</button>
          </li>
        </ul>
      </StyledWallpaper>
      <TaskBar openedDir={openedDir} />
    </>
  );
};

export default Wallpaper;
