import { useState } from "react";

const contents = [
  {
    tab: "Section1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section2",
    content: "I'm the content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  // if (!allTabs || Array.isArray(allTabs)) {
  //   return;
  // }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

function TabUse() {
  const { currentItem, changeItem } = useTabs(0, contents);
  return (
    <div>
      {contents.map((section, index) => (
        <button onClick={() => changeItem(index)} key={index}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default TabUse;
