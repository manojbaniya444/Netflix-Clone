import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import SingleMovie from "./SingleMovie";

const Row = ({ title, requestURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requestURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [requestURL]);

  const slideLeftHandler = () => {
    let slide = document.getElementById("slider" + rowID);
    slide.scrollLeft -= 300;
  };

  const slideRightHandler = () => {
    let slide = document.getElementById("slider" + rowID);
    slide.scrollLeft += 300;
  };

  return (
    <Wrapper>
      <h2>{title}</h2>
      <p className="scroll" onClick={slideLeftHandler}>
        Prev
      </p>
      <div className="slider" id={"slider" + rowID}>
        {movies?.map((item, index) => {
          return <SingleMovie key={index} item={item} />;
        })}
      </div>
      <p className="scroll2" onClick={slideRightHandler}>
        Next
      </p>
    </Wrapper>
  );
};

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
  h2 {
    font-size: 2rem;
    padding: 0 5%;
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

export default Row;
