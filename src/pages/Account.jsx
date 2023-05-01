import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useAuthContext } from "../context/AuthContext";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Account = () => {
  const [movies, setMovies] = useState([]);
  const { user } = useAuthContext();

  // Getting the data from the firestore.
  useEffect(() => {
    const movieRef = doc(db, "user", `${user?.email}`);
    onSnapshot(movieRef, (doc) => {
      setMovies(doc.data()?.favouriteList);
    });
  }, [user?.email]);

  const deleteHandler = async (id) => {
    try {
      const updatedShows = movies.filter((curItem) => curItem.id !== id);
      await updateDoc(doc(db, "user", `${user?.email}`), {
        favouriteList: updatedShows,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(movies);
  if (movies.length === 0) {
    return (
      <NoItem>
        <Link className="link" to="/">
          <h1 className="logo">M-FLIX</h1>
        </Link>
        <div className="no-item">No items in the favourite list.</div>
      </NoItem>
    );
  }
  return (
    <AccountPageWrapper>
      <div className="top-nav">
        <Link className="link" to="/">
          <h1 className="logo">M-FLIX</h1>
        </Link>

        <h1 className="fav">Favourite List</h1>
        <h1 className="user">User Email : {user?.email}</h1>
      </div>

      <div className="movie-div">
        {movies?.map((curItem, id) => {
          return (
            <div className="section" key={id}>
              <div className="image-div">
                <img
                  src={`https://image.tmdb.org/t/p/original/${curItem?.img}`}
                  alt={curItem?.title}
                />
              </div>
              <div className="description-div">
                <p className="title">{curItem.title}</p>
                <div className="btn-container">
                  <Link className="link" to={`/moviedetail/${curItem?.id}`}>
                    <button className="details">More Info</button>
                  </Link>
                  <button
                    className="remove-btn"
                    onClick={() => deleteHandler(curItem?.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </AccountPageWrapper>
  );
};
const NoItem = styled.div`
  .logo {
    font-size: 2.5rem;
    color: red;
    text-decoration: none;
    padding: 2rem;
  }
  .no-item {
    color: white;
    font-size: 2.5rem;
    text-align: center;
  }
`;

const AccountPageWrapper = styled.section`
  background-image: url("/netflix-bg.jpg");
  background-size: cover;
  font-family: "Roboto Condensed", sans-serif;

  .top-nav {
    background-image: linear-gradient(
      to right,
      #000000 0%,
      rgba(255, 255, 255, 0) 100%
    );
    padding: 1rem 3rem 0;
  }
  /* padding: 2rem 3rem; */
  .user {
    color: #0bb40b;
    margin-top: 1rem;
    font-style: italic;
  }
  .movie-div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    flex-direction: column;
    /* margin-top: 2rem; */
    /* width: 90vw; */
    padding: 4rem 3rem 1rem;
    background-image: linear-gradient(
      to right,
      #000000 0%,
      rgba(255, 255, 255, 0) 100%
    );

    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
  .section {
    display: flex;
    gap: 1rem;
    .image-div {
      height: 200px;
      width: 200px;
      border-radius: 9px;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 9px;
      }
    }
    .description-div {
      .btn-container {
        display: flex;
        flex-direction: column;
        button {
          padding: 0.6rem 0.9rem;
          font-size: 1rem;
          margin-top: 1rem;
          border: none;
          border-radius: 3px;
          cursor: pointer;
          font-weight: 300;
          width: 130px;
        }
        .remove-btn {
          background-color: red;
          color: white;
        }
      }

      .title {
        color: white;
        font-size: 1.6rem;
      }
    }
  }
  .logo {
    font-size: 2.5rem;
    color: red;
    text-decoration: none;
  }
  .fav {
    color: white;
  }
`;

export default Account;
