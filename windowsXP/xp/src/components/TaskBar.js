import styled from "styled-components";

const StyledTaskBar = styled.section`
  width: 100%;
  height: 36px;
  background-image: url(img/bar.png);
`;

const TaskBar = ({ openedDir }) => {
  return <StyledTaskBar>{openedDir}</StyledTaskBar>;
};

export default TaskBar;
