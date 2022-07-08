const API_KEY = "a53e8aa37156dfdc466d2a526984671c"
const baseUrl="https://api.themoviedb.org/3"

const requests = {
    fetchNetflixOriginals: `${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `${baseUrl}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopular: `${baseUrl}/movie/popular?api_key=a53e8aa37156dfdc466d2a526984671c&language=en-US`,
    fetchNowPlaying: `${baseUrl}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchComedyMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchUpcoming: `${baseUrl}/movie/upcoming?api_key=a53e8aa37156dfdc466d2a526984671c&language=en-US&page=1`,
    fetchTopTvShows: `${baseUrl}/tv/top_rated?api_key=a53e8aa37156dfdc466d2a526984671c&language=en-US&page=1`
}

export default requests