const Footer = () => {
  return (
    <footer className="mt_30n">
      <div className="footerInner">
        <ul className="footerContent">
          <li>
            <p className="h1_b_lt parisienne fc_wht tit">
              Pension Bojour
              <br />
              <span className="p2_m_lt fc_wht">봉쥬르 펜션</span>
            </p>
            <p className="p2_m_lt fc_wht copy">&copy; 2022 PENSION BONJOUR. All Right Reserved.</p>
          </li>
          <li>
            <ul>
              <li className="p2_m_lt fc_wht">전라남도 구례군 토지면 섬진강대로 4310-20</li>
              <li className="p2_m_lt fc_wht">사업자등록번호 : 776-26-00204</li>
              <li className="p2_m_lt fc_wht">전화번호 : 010-8746-1409</li>
              <li className="p2_m_lt fc_wht">이메일 : leylife@naver.com</li>
            </ul>
          </li>
          <li>
            <p className="p1_m_lt fc_wht tit">계좌정보</p>
            <table className="commonTable type2 mt_6n">
              <caption>입금은행, 계좌번호, 예금주에 관한 표</caption>
              <tbody>
                <tr>
                  <th className="p2_b_lt fc_wht">입금은행</th>
                  <td className="p2_m_lt fc_wht">신한은행</td>
                </tr>
                <tr>
                  <th className="p2_b_lt fc_wht">계좌번호</th>
                  <td className="p2_m_lt fc_wht">110-3544-6630</td>
                </tr>
                <tr>
                  <th className="p2_b_lt fc_wht">예금주</th>
                  <td className="p2_m_lt fc_wht">이은영</td>
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
