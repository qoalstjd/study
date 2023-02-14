const Home = () => {
  return (
    <>
      <section className="mainVisual">
        <div className="visualExtend"></div>
        <div className="titleBox">
          <div className="subTit">
            <p className="h2_m_ctr fc_wht">눈 뜨면 하늘 푸르름 가득한 곳</p>
            <p className="h2_m_ctr fc_wht">귀 열면 계곡 소리가 즐거운 곳</p>
          </div>
          <div className="tit">
            <h2 className="h1_b_ctr parisienne fc_act">Pension Bonjour</h2>
          </div>
        </div>
        <ul className="pagination">
          <li className="dot curDot">
            <a></a>
          </li>
          <li className="dot">
            <a></a>
          </li>
          <li className="dot">
            <a></a>
          </li>
          <li className="dot">
            <a></a>
          </li>
          <li className="dot">
            <a></a>
          </li>
          <li className="dot">
            <a></a>
          </li>
          <li className="stopBtn">
            <button>슬라이드 멈추기</button>
          </li>
        </ul>
      </section>

      <section className="news mt_30n">
        <div className="titleBox">
          <h2 className="h2_b_lt">펜션소식</h2>
          <p className="h4_m_lt fc_s64 mt_4n">펜션 봉쥬르가 전해드리는 소식</p>
          <a href="room.html" className="viewMore"></a>
        </div>
      </section>

      <section className="room mt_30n">
        <div className="titleBox">
          <h2 className="h2_b_lt">객실안내</h2>
          <p className="h4_m_lt fc_s64 mt_4n">펜션 봉쥬르의 객실을 소개합니다.</p>
          <a href="room.html" className="viewMore"></a>
        </div>
        <div className="contentBox mt_16n">
          <div className="leftBox">
            <ul className="tabsTitle">
              <li className="curTab">
                <button className="p1_m_ctr">Vally</button>
              </li>
              <li>
                <button className="p1_m_ctr">Mountain</button>
              </li>
              <li>
                <button className="p1_m_ctr">Sky</button>
              </li>
              <li>
                <button className="p1_m_ctr">Cloud</button>
              </li>
            </ul>
            <table className="commonTable">
              <caption>인원, 객실구성에 대한 표</caption>
              <tbody>
                <tr>
                  <th className="p1_b_lt">인원</th>
                  <td className="p1_m_lt">기준 4명 / 최대 8명</td>
                </tr>
                <tr>
                  <th className="p1_b_lt">객실구성</th>
                  <td className="p1_m_lt">침실, 거실, 주방, 화장실, 개별바베큐장</td>
                </tr>
              </tbody>
            </table>
            <p className="p1_m_lt">
              넓은 거실과 깨끗한 침구로 꾸며진 트윈더블베드가 준비된 침실이 있으며 펜션 1층에 위치한 객실
            </p>
            <button className="prevBtn controlBtn"></button>
            <button className="nextBtn controlBtn"></button>
          </div>
          <div className="rightBox">
            <ul className="imgList">
              <li className="curImg">
                <img src="img/roomVally0.jpeg" alt="" />
              </li>
              <li>
                <img src="img/roomVally1.jpeg" alt="" />
              </li>
              <li>
                <img src="img/roomVally2.jpeg" alt="" />
              </li>
              <li>
                <img src="img/roomVally3.jpeg" alt="" />
              </li>
              <li>
                <img src="img/roomVally4.jpeg" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 예약
  <section className="reservation">
      <ul className="container">
          <li><a href="삽입예정">실시간 예약달력</a></li>
          <li><a href="삽입예정">야놀자 예약페이지</a></li>
          <li><a href="삽입예정">여기어때 예약페이지</a></li>
          <li><a href="삽입예정">전화 예약하기</a></li>
      </ul>
  </section>
   */}
      <section className="contact mt_30n">
        <div className="titleBox">
          <h2 className="h2_b_lt">펜션소개</h2>
          <p className="h4_m_lt fc_s64 mt_4n">은어마을 펜션단지 입구 첫번째 위치한 지리산 피아골 계곡 펜션입니다.</p>
          <a href="about.html" className="viewMore"></a>
        </div>
        <div className="contentBox">
          <div className="leftBox">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.1746962795232!2d127.59899761554173!3d35.202117263705134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356e38d47e57badb%3A0x693779efc39832f9!2z67SJ7KWs66W07Y6c7IWY!5e0!3m2!1sko!2skr!4v1649390811301!5m2!1sko!2skr"
              height="500"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="rightBox">
            <div className="accordion">
              <ul>
                <li>
                  <a className="accordBtn">주소</a>
                  <div className="content">
                    <p>전라남도 구례군 토지면 섬진강대로 4310-20 봉쥬르펜션</p>
                  </div>
                </li>
                <li>
                  <a className="accordBtn">대표번호</a>
                  <div className="content">
                    <p>010-8746-1409</p>
                  </div>
                </li>
                <li>
                  <a className="accordBtn">체크인 / 아웃</a>
                  <div className="content">
                    <p>15:00 / 11:00</p>
                  </div>
                </li>
                <li>
                  <a className="accordBtn">성수기 정보</a>
                  <div className="content">
                    <p>
                      준성수기 : 7/1 ~ 7/15, 8/16 ~ 8/31
                      <br />
                      성수기 : 7/16 ~ 8/15
                    </p>
                  </div>
                </li>
                <li>
                  <a className="accordBtn on">추가요금 정보</a>
                  <div className="content">
                    <table>
                      <caption>인원 추가요금, 바베큐 숯, 전기그릴에 관한 표</caption>
                      <tbody>
                        <tr>
                          <th>인원 추가요금</th>
                          <th>바베큐 숯</th>
                          <th>전기그릴</th>
                        </tr>
                        <tr>
                          <td>
                            <ul className="bulList">
                              <li>8세 이상 : 20,000원</li>
                              <li>2~7세 : 10,000원</li>
                              <li>
                                반려견 : 10,000원
                                <br />
                                (5kg미만 소형견 1마리)
                              </li>
                            </ul>
                          </td>
                          <td>
                            <ul className="bulList">
                              <li>기본 : 20,000원</li>
                              <li>숯,철망 추가시 : 5,000원</li>
                            </ul>
                          </td>
                          <td>
                            <ul className="bulList">
                              <li>20,000원</li>
                            </ul>
                          </td>
                        </tr>
                        {/*  <tr>
                                          <th>인원 추가요금</th>
                                          <td>
                                              <ul>
                                                  <li>8세 이상 : 20,000원</li>
                                                  <li>2~7세 : 10,000원</li>
                                                  <li>반려견 (5kg미만 소형견 1마리) : 10,000원</li>
                                              </ul>
                                          </td>
                                      </tr>
                                      <tr>
                                          <th>바베큐 숯</th>
                                          <td>
                                              <ul>
                                                  <li>기본 : 20,000원</li>
                                                  <li>숯,철망 추가시 : 5,000원</li>
                                              </ul>
                                          </td>
                                      </tr>
                                      <tr>
                                          <th>전기그릴</th>
                                          <td>
                                              <ul>
                                                  <li>20,000원</li>
                                              </ul>
                                          </td>
                                      </tr> */}
                      </tbody>
                    </table>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="arround mt_30n">
        <div className="titleBox">
          <h2 className="h2_b_lt">주변소개</h2>
          <p className="h4_m_lt fc_s64 mt_4n">봉쥬르 펜션 주변의 유명 관광지입니다.</p>
          <a href="arround.html" className="viewMore"></a>
        </div>
      </section>

      <section className="convenient mt_30n">
        <div className="titleBox">
          <h2 className="h2_b_lt">편의시설</h2>
          <p className="h4_m_lt fc_s64 mt_4n">펜션 내의 편의시설 및 서비스입니다.</p>
          <a href="about.html" className="viewMore"></a>
        </div>
        <ul className="convenientList">
          <li>
            <i className="fa-solid fa-wifi"></i>
            <p>와이파이</p>
          </li>
          <li>
            <i className="fa-solid fa-bowl-food"></i>
            <p>전기밥솥</p>
          </li>
          <li>
            <i className="fa-solid fa-square-parking"></i>
            <p>주차장</p>
          </li>
          <li>
            <i className="fa-solid fa-bacon"></i>
            <p>바베큐</p>
          </li>
          <li>
            <i className="fa-solid fa-pump-soap"></i>
            <p>샴푸, 바디워시</p>
          </li>
          <li>
            <i className="fa-solid fa-air-conditioner"></i>
            <p>에어컨</p>
          </li>
          <li>
            <i className="fa-solid fa-refrigerator"></i>
            <p>냉장고</p>
          </li>
          <li>
            <i className="fa-solid fa-shower"></i>
            <p>객실샤워실</p>
          </li>
          <li>
            <i className="fa-solid fa-scanner-gun"></i>
            <p>드라이기</p>
          </li>
          <li>
            <i className="fa-solid fa-dog"></i>
            <p>반려견동반</p>
          </li>
          <li>
            <i className="fa-solid fa-kitchen-set"></i>
            <p>객실내취사</p>
          </li>
          <li>
            <i className="fa-solid fa-microwave"></i>
            <p>전자레인지</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Home;
