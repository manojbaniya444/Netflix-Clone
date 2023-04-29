import React, { useState } from "react";
import styled from "styled-components";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SingleMovie = ({ item }) => {
  const [isFav, setIsFav] = useState(true);
  return (
    <SingleWrapper>
      <Link to={`/moviedetail/${item?.id}`}>
        <div className="image-div">
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
            alt={item?.title}
          />
          <div className="overlay-image">
            {isFav ? (
              <BsHeart className="heart" />
            ) : (
              <BsHeartFill className="heart" />
            )}
            <BsHeart className="heart" />
            <h3>{item?.title}</h3>
          </div>
        </div>
      </Link>
    </SingleWrapper>
  );
};

const SingleWrapper = styled.div`
  .image-div {
    width: 320px;
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
      width: 320px;
      height: 100%;
      position: absolute;
      top: 0;
      background: black;
      opacity: 0;
      cursor: pointer;
      transition: 0.7s ease;
      h3 {
        font-size: 1.3rem;
        text-align: center;
        margin-top: 20%;
        color: white;
        opacity: 1;
      }
      .heart {
        font-size: 1.3rem;
        top: 7px;
        left: 3px;
        position: absolute;
        opacity: 0.7;
        color: white;
        &:hover {
          opacity: 1;
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
      width: 200px;
      .overlay-image {
        width: 200px;
      }
    }
  }
`;

export default SingleMovie;
