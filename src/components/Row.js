import axios from "../axios";
import "../styles/Row.css";
import React, { useEffect, useState } from "react";
const Row = ({ title, fetchUrl, isLarge = false }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchMovie();
  }, [fetchUrl]);

  const baseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div className="row">
      <h2 className="title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              className={`row__poster ${isLarge && "row__Largeposter"}`}
              key={movie.id}
              src={`${baseUrl}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
