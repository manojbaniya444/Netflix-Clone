const APIkey = "991a45eb353643be9d519427affc937f";

const requests = {
  requestPopular: `
    https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIkey}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${APIkey}`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIkey}&language=en-US&page=1`,
};
export default requests;
