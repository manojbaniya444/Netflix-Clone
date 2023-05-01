import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Row from "./Row";
import SingleMovie from "./SingleMovie";

const URL =
  "https://api.themoviedb.org/3/search/movie?api_key=991a45eb353643be9d519427affc937f&language=en-US&page=1&include_adult=false&query=";

const Search = () => {
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(URL + search).then((response) => {
      setMovies(response.data.results);
    });
  }, [title]);

  const searchHandler = () => {
    setTitle(search);
  };

  const slideLeftHandler = () => {
    let slide = document.getElementById("slider");
    slide.scrollLeft -= 300;
  };

  const slideRightHandler = () => {
    let slide = document.getElementById("slider");
    slide.scrollLeft += 300;
  };
  //

  return (
    <>
      <Searchd className="search">
        <input
          type="search"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search movie"
        />
        <button className="submit" onClick={searchHandler}>
          Search
        </button>
      </Searchd>
      {movies?.length > 0 && (
        <Wrapper>
          <h2 className="p">Showing results for {title}</h2>
          <p className="scroll" onClick={slideLeftHandler}>
            Prev
          </p>
          <div className="slider" id={"slider"}>
            {movies.map((item, index) => {
              return <SingleMovie key={index} item={item} />;
            })}
          </div>
          <p className="scroll2" onClick={slideRightHandler}>
            Next
          </p>
        </Wrapper>
      )}
    </>
  );
};
const Searchd = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  input {
    padding: 0.7rem;
    font-size: 1.8rem;
    flex: 1;
    border-radius: 13px;
    background: transparent;
    border: 1px solid grey;
    color: white;
  }
  button {
    padding: 0.3rem 1.3rem;
    margin-left: 1rem;
    border-radius: 13px;
    font-size: 1.4rem;
    cursor: pointer;
  }
  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    display: block;
    input {
      width: 100%;
      position: relative;
      padding: 0.4rem;
    }
    button {
      position: absolute;
      padding: 0.6rem;
      font-size: 1.4rem;
      right: 2rem;
      border: 1px solid grey;
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  color: white;
  margin-top: 1rem;
  &:hover {
    .scroll,
    .scroll2 {
      opacity: 0.7;
    }
  }
  .p {
    font-size: 1.4rem;
    padding: 0 5%;
    font-style: italic;
  }
  .scroll {
    background-color: white;
    padding: 1rem;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    top: 50%;
    z-index: 999;
    opacity: 0;
    transition: 0.7s ease;
    color: black;
    border: none;
  }
  .scroll2 {
    background-color: white;
    color: black;
    border: none;
    padding: 1rem;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 999;
    opacity: 0;
    transition: 0.7s ease;
  }
  .slider {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    margin-top: 1rem;
    gap: 1rem;
    padding: 1rem 2rem;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      overflow: hidden;
    }
    .icon {
      color: white;
      font-size: 3rem;
      cursor: pointer;
    }
  }
`;
export default Search;
