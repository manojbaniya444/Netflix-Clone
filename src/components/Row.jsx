import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import SingleMovie from "./SingleMovie";

const Row = ({ title, requestURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requestURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [requestURL]);
  console.log(movies);

  return (
    <Wrapper>
      <h2>{title}</h2>
      <div className="slider">
        {movies.map((item, index) => {
          return <SingleMovie key={index} item={item} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
  margin-top: 1rem;
  h2 {
    font-size: 2rem;
    padding: 0 5%;
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
