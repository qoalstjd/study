const Footer = () => {
  return (
    <footer>
      <div>
        <ul>
          <li>
            <p>
              Pension Bojour
              <br />
              <span>봉쥬르 펜션</span>
            </p>
            <p>&copy; 2022 PENSION BONJOUR. All Right Reserved.</p>
          </li>
          <li>
            <ul>
              <li>전라남도 구례군 토지면 섬진강대로 4310-20</li>
              <li>사업자등록번호 : 776-26-00204</li>
              <li>전화번호 : 010-8746-1409</li>
              <li>이메일 : leylife@naver.com</li>
            </ul>
          </li>
          <li>
            <p>계좌정보</p>
            <table>
              <caption>입금은행, 계좌번호, 예금주에 관한 표</caption>
              <tbody>
                <tr>
                  <th>입금은행</th>
                  <td>신한은행</td>
                </tr>
                <tr>
                  <th>계좌번호</th>
                  <td>110-3544-6630</td>
                </tr>
                <tr>
                  <th>예금주</th>
                  <td>이은영</td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
