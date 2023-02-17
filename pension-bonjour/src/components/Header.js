import { Link } from "react-router-dom";

const Header = ({ scrolled }) => {
  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div>
        <div>
          <Link to="/">
            <h1>Pension Bonjour</h1>
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/about">펜션소개</Link>
          </li>
          <li>
            <Link to="/rooms">객실안내</Link>
          </li>
          <li>
            <Link to="/around">주변소개</Link>
          </li>
          <li>
            <Link to="/reservation">예약하기</Link>
          </li>
          <li>
            <Link to="/news">봉쥬르소식</Link>
          </li>
        </ul>
        <button></button>
      </div>
    </header>
  );
};

export default Header;
