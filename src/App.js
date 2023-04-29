import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Protected from "./Protected";

const App = () => {
  const theme = {
    responsive: {
      mobile: "768px",
      ipad: "900px",
    },
  };
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="moviedetail/:id" element={<MovieDetails />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
        </Routes>
        {/* <Footer /> */}
      </ThemeProvider>
    </AuthContextProvider>
  );
};

export default App;
