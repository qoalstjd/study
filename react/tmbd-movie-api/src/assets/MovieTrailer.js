import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieTrailer({ id }) {
  const [trailer, setTrailer] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=8a2285228ef2ee1e4651e538c05bb58a`)
    ).json();
    setTrailer(json.results[0].key);
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <iframe src={`https://youtube.com/embed/${trailer}`}></iframe>
    </>
  );
}

export default MovieTrailer;
