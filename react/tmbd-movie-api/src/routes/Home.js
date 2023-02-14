import { useEffect, useState, useRef } from "react";
import "../assets/css/common.scss";
import { Link } from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async (page, sort, genreId) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=8a2285228ef2ee1e4651e538c05bb58a&language=ko-KR&page=${page}&include_video=true&sort_by=${sort}&with_genres=${genreId}`,
      // &include_adult=true
    );
    const json = await response.json();
    setMovies(json.results);
    setLoading(false);
    // console.log(json.results);
    // console.log(genreId);
    console.log(page);
  };

  const searchMovies = async data => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=8a2285228ef2ee1e4651e538c05bb58a&query=${data}&language=ko-KR`,
    );
    const json = await response.json();
    setMovies(json.results);
    setLoading(false);
    console.log(json.results);
    console.log(genreId);
    console.log(page);
  };

  // 페이지 설정
  const [page, setPage] = useState(1);
  const nextPage = () => {
    if (movies.length < 20) {
      alert("마지막 페이지입니다.");
    } else {
      setPage(curPage => curPage + 1);
    }
  };
  const prevPage = () => {
    if (page === 1) {
      alert("첫 페이지입니다.");
    } else {
      setPage(curPage => curPage - 1);
    }
  };

  // 정렬 방식 설정
  const sortBy = [
    { id: 0, data: "popularity.desc", text: "인기순" },
    { id: 1, data: "revenue.desc", text: "수익순" },
    { id: 2, data: "vote_average.desc", text: "평균 평점" },
    { id: 3, data: "vote_count.desc", text: "투표수" },
    { id: 5, data: "release_date.desc", text: "출시일자(new)" },
    { id: 4, data: "release_date.asc", text: "출시일자(old)" },
  ];
  const [sort, setSort] = useState("popularity.desc");
  const reSort = event => {
    setSort(event.target.value);
    setPage(1);
  };

  // 이미지 path 설정
  const getImgUrl = (path, size) => {
    if (path !== null) {
      return `https://image.tmdb.org/t/p/${size}${path}`;
    } else {
      return `null`;
    }
  };

  // 장르 변경설정
  const [genreId, setGenreId] = useState([]);
  // const [checked, setChecked] = useState(false);
  const reGenreSort = event => {
    if (!event.target.classList.contains("on")) {
      setGenreId(genreId => [event.target.value, ...genreId]);
      event.target.classList.add("on");
    } else {
      setGenreId(genreId => genreId.filter(el => el !== event.target.value));
      event.target.classList.remove("on");
    }
    setPage(1);
  };

  // params 별 다시 API 가져오기
  useEffect(() => {
    getMovies(page, sort, genreId);
  }, [page, sort, genreId]);

  // 검색
  const [searchTitle, setSearchTitle] = useState("");
  const searchValue = event => {
    setSearchTitle(event.target.value);
  };
  const search = event => {
    event.preventDefault();
    if (searchTitle !== "") {
      searchMovies(searchTitle);
      document.getElementById("searchBox").value = "";
    } else {
      window.alert("검색어를 입력해주세요");
    }
  };

  // 장르 설정
  const genreData = [
    { id: 28, name: "액션" },
    { id: 12, name: "모험" },
    { id: 16, name: "애니" },
    { id: 35, name: "코미디" },
    { id: 80, name: "범죄" },
    { id: 99, name: "다큐" },
    { id: 18, name: "드라마" },
    { id: 10751, name: "가족" },
    { id: 14, name: "판타지" },
    { id: 36, name: "역사" },
    { id: 27, name: "공포" },
    { id: 10402, name: "음악" },
    { id: 9648, name: "미스테리" },
    { id: 10749, name: "로맨스" },
    { id: 878, name: "SF" },
    { id: 10770, name: "TV" },
    { id: 53, name: "스릴러" },
    { id: 10752, name: "전쟁" },
    { id: 37, name: "서부극" },
  ];

  const genreName = g => {
    for (let i = 0; i < genreData.length; i++) {
      while (genreData[i].id === g) {
        return genreData[i].name;
      }
    }
  };

  return (
    <div>
      {loading ? (
        <div className="load"></div>
      ) : (
        <div className="home">
          <header>
            <h1>
              <span>T</span>he <span>M</span>ovie <span>D</span>ata<span>B</span>ase API 활용 웹
            </h1>
            <div>
              <select onClick={reSort} value={sort.data}>
                {sortBy.map(order => (
                  <option key={order.id} value={order.data}>
                    {order.text}
                  </option>
                ))}
              </select>
              <form onSubmit={search}>
                <input id="searchBox" type={"search"} placeholder="검색" onChange={searchValue} />
                <button>G</button>
              </form>
            </div>
            <ul>
              {genreData.map(a => (
                <li key={a.id}>
                  <input onChange={reGenreSort} id={a.id} value={a.id} type="checkbox"></input>
                  <label htmlFor={a.id}>{a.name}</label>
                </li>
              ))}
            </ul>
          </header>
          <section>
            <ul>
              {movies.map(movie => (
                <li key={movie.id}>
                  <img src={getImgUrl(movie.poster_path, "w342")} alt="영화 포스터" />
                  <Link to={`/movie/${movie.id}`} target="_blank">
                    <dl>
                      <dt>출시일</dt>
                      <dd>{movie.release_date}</dd>
                      <dt>평점</dt>
                      <dd>{Math.round(movie.vote_average * 10) / 10}</dd>
                      <dt>장르</dt>
                      <dd>
                        <ul>
                          {movie.genre_ids.map(g => (
                            <li key={g}>{genreName(g)}</li>
                          ))}
                        </ul>
                      </dd>
                    </dl>
                  </Link>
                  <h3>{movie.title}</h3>
                </li>
              ))}
            </ul>
            <div className="pagination">
              <button onClick={prevPage}>이전</button>
              <p>{page}</p>
              <button onClick={nextPage}>다음</button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Home;
