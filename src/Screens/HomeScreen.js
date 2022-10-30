import React from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import "../styles/HomeScreen.css"
import Row from "../components/Row";
import requests from "../Requests";

const HomeScreen = () => {
  return (
    <div class="home-screen">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      />
      <Row title="Now Playing" fetchUrl={requests.fetchNowPlaying} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Upcoming Movies" fetchUrl={requests.fetchUpcoming} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Popular Movies" fetchUrl={requests.fetchPopular} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Top Tv shows" fetchUrl={requests.fetchTopTvShows} />
      
      
    </div>
  );
};

export default HomeScreen;
