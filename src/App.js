import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  const theme = {
    responsive: {
      mobile: "768px",
      ipad: "900px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="moviedetail/:id" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
