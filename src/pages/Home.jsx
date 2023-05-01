import React from "react";
import HomeTop from "../components/HomeTop";
import Row from "../components/Row";
import requests from "../Request";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
const Home = () => {
  return (
    <>
      <Navbar />
      <HomeTop />
      <Search />
      <Row rowID={3} title={"Trending"} requestURL={requests.requestTrending} />
      <Row rowID={1} title={"Upcoming"} requestURL={requests.requestUpcoming} />
      <Row rowID={2} title={"TopRated"} requestURL={requests.requestTopRated} />
      <Row rowID={4} title={"Popular"} requestURL={requests.requestPopular} />
      <Footer />
    </>
  );
};

export default Home;
