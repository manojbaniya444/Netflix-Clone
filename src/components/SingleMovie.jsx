import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleMovie = ({ item }) => {
  return (
    <SingleWrapper>
      <Link to={`/moviedetail/${item?.id}`}>
        <div className="image-div">
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
            alt={item?.title}
          />
          <div className="overlay-image">
            <p>{item?.title}</p>
          </div>
        </div>
      </Link>
    </SingleWrapper>
  );
};

const SingleWrapper = styled.div`
  .image-div {
    width: 200px;
    position: relative;
    img {
      height: 100%;
      width: 100%;
      cursor: pointer;
      transition: 0.71s ease;
      &:hover {
        scale: 1.04;
      }
    }

    .overlay-image {
      width: 200px;
      height: 100%;
      position: absolute;
      top: 0;
      background: black;
      opacity: 0;
      cursor: pointer;
      transition: 0.7s ease;
      p {
        font-size: 1.3rem;
        text-align: center;
        margin-top: 20%;
        color: white;
        opacity: 1;
        
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
      margin-top: 4%;
    }
      }
      &:hover {
        opacity: 0.7;
        h3 {
          opacity: 1;
        }
      }
    }

    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
      width: 120px;
      .overlay-image {
        width: 120px;
      }
    }
  }
`;

export default SingleMovie;
