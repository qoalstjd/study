import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieTrailer from "../assets/MovieTrailer";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8a2285228ef2ee1e4651e538c05bb58a&language=ko-KR`)
    ).json();
    setDetails(json);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);

  // 이미지 path 설정
  const getImgUrl = (path, size) => {
    return `https://image.tmdb.org/t/p/${size}${path}`;
  };

  // 런타임 수정
  const runtime = a => {
    if (a < 60 || a >= 240) {
      return `${a}분`;
    } else if (a >= 180) {
      return `3시간 ${a - 180}분`;
    } else if (a >= 120) {
      return `2시간 ${a - 120}분`;
    } else if (a >= 60) {
      return `1시간 ${a - 60}분`;
    }
  };

  return (
    <div>
      {loading ? (
        <div className="load"></div>
      ) : (
        <>
          {[details].map(detail => (
            <div className="detail" key={detail.id}>
              <header>
                <div>
                  <h2>{detail.title}</h2>
                  <h3>원제목 : {detail.original_title}</h3>
                  <p>
                    {detail.release_date} {runtime(detail.runtime)}
                  </p>
                  <button onClick={() => window.close()}>닫기</button>
                </div>
              </header>
              <div
                className="visual"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${getImgUrl(
                    detail.backdrop_path,
                    "original",
                  )})`,
                }}
              >
                <div>
                  <img src={getImgUrl(detail.poster_path, "w342")} />
                  <MovieTrailer id={detail.imdb_id} />
                </div>
              </div>
              <div className="content">
                <ul>
                  {detail.genres.map(g => (
                    <li key={g.id}>{g.name}</li>
                  ))}
                </ul>
                <p>{detail.overview}</p>
                <p>평점 {Math.round(detail.vote_average * 10) / 10} / 10</p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Detail;
