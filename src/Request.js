const APIkey = "991a45eb353643be9d519427affc937f";

const requests = {
  requestPopular: `
    https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIkey}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${APIkey}`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIkey}&language=en-US&page=1`,
  requestSearch: `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&language=en-US&page=1&include_adult=false&query=`,
  requestById: `https://api.themoviedb.org/3/movie/?api_key=991a45eb353643be9d519427affc937f&language=en-US
  `,
  requestNetflixImage:
    "https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/8ba30f8b-11dc-48d1-a346-c1b9051b9c4f/NP-en-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg",
};
export default requests;

// https://assets.nflxext.com/ffe/siteui/vlv3/efb4855…ignuptwoweeks-perspective_alpha_website_large.jpg

//video request
// https://api.themoviedb.org/3/movie/502356/videos?api_key=991a45eb353643be9d519427affc937f&language=en-US
