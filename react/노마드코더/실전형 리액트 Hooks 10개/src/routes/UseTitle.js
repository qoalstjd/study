import { useState, useEffect } from "react";

const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

function TitleUse() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => {
    titleUpdater("useTitle");
  }, 1000);
  return <div></div>;
}

export default TitleUse;
