import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="headerInner">
        <Link to="/" className="logo">
          <h1 className="h1_b_lt parisienne">
            Pension Bonjour<span className="hidden"> 봉쥬르 펜션</span>
          </h1>
        </Link>
        <ul className="gnb">
          <li></li>
        </ul>
        <a to="javascript:void(0)" className="menuBtn">
          <div></div>
          <div></div>
        </a>
      </div>
    </header>
  );
};

export default Header;
