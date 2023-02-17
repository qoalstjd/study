const Footer = () => {
  return (
    <footer>
      <div>
        <div className="content">
          <h2>Pension Bonjour</h2>
          <p>봉쥬르 펜션</p>
          <p>&copy; 2023 PENSION BONJOUR. All Right Reserved.</p>
        </div>
        <div className="content">
          <ul>
            <li>전라남도 구례군 토지면 섬진강대로 4310-20</li>
            <li>사업자등록번호 : 776-26-00204</li>
            <li>전화번호 : 010-8746-1409</li>
            <li>이메일 : leylife@naver.com</li>
          </ul>
        </div>
        <div className="content">
          <p>계좌정보</p>
          <dl>
            <dt>입금은행</dt>
            <dd>신한은행</dd>
            <dt>계좌번호</dt>
            <dd>110-3544-6630</dd>
            <dt>예금주</dt>
            <dd>이은영</dd>
          </dl>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
