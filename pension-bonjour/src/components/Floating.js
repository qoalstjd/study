import { Link } from "react-router-dom";

const Floating = ({ scrolled }) => {
  return (
    <>
      {/* <ul className={`floatingBtns ${scrolled ? "scrolled" : ""}`}>
        <li>
          <Link to="tel:010-9334-1409">
            <div></div>
            <p>전화하기</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div></div>
            <p>예약하기</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div></div>
            <p>오시는길</p>
          </Link>
        </li>
        <li className="scrollTopBtn">
          <a href="#top">
            <div></div>
          </a>
        </li>
      </ul> */}
    </>
  );
};

export default Floating;
