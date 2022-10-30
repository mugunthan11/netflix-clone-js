import axios from "../axios";
import requests from "../Requests";
import React, { useEffect, useState } from "react";
import "../styles/Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  const fetchData = async () => {
    const request = await axios.get(requests.fetchNetflixOriginals);
    console.log(request.data.results, "request");
    setMovie(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]
    );
    return request;
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(movie, "helo");
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">play</button>
          <button className="banner__button">My list</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeout"></div>
    </header>
  );
};

export default Banner;
