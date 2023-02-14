import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  gap: 5px;
  a {
    color: gray;
    text-decoration: none;
    border: 2px solid gray;
    padding: 5px 12px;
  }
`;

function Navigation() {
  return (
    <StyledNav>
      <Link to="/">Home</Link>
      <Link to="/use-input">useInput</Link>
      <Link to="/use-tabs">useTabs</Link>
      <Link to="/use-title">useTitle</Link>
      <Link to="/use-click">useClick</Link>
      <Link to="/use-confirm">useConfirm</Link>
      <Link to="/use-preventleave">usePreventLeave</Link>
      <Link to="/use-beforeleave">useBeforeLeave</Link>
      <Link to="/use-fadein">useFadeIn</Link>
      <Link to="/use-network">useNetwork</Link>
      <Link to="/use-scroll">useScroll</Link>
      <Link to="/use-fullscreen">useFullscreen</Link>
      <Link to="/use-notification">useNotification</Link>
    </StyledNav>
  );
}

export default Navigation;
