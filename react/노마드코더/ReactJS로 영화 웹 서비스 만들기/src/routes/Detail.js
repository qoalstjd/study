import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import styles from "./Home.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  });
  return (
    <div>
      {loading ? (
        <div>
          <span>Loading...</span>
        </div>
      ) : (
        <div>
          {[details].map(detail => (
            <div key={detail.id}>
              <h1>{detail.title_long}</h1>
              <p>{detail.description_full}</p>
              <ul>
                <li></li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Detail;
