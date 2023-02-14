import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <Link to="/">
            <h1>Pension Bonjour</h1>
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/">펜션소개</Link>
          </li>
          <li>
            <Link to="/">객실안내</Link>
          </li>
          <li>
            <Link to="/">주변소개</Link>
          </li>
          <li>
            <Link to="/">예약하기</Link>
          </li>
        </ul>
        <button></button>
      </div>
    </header>
  );
};

export default Header;
