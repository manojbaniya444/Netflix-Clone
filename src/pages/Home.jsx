import React from "react";
import HomeTop from "../components/HomeTop";
import Row from "../components/Row";
import requests from "../Request";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HomeTop />
      <Row title={"Upcoming"} requestURL={requests.requestUpcoming} />
      <Row title={"TopRated"} requestURL={requests.requestTopRated} />
      <Row title={"Trending"} requestURL={requests.requestTrending} />
      <Row title={"Popular"} requestURL={requests.requestPopular} />
    </>
  );
};

export default Home;
