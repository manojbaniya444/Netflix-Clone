import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Credits = ({ movieI }) => {
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieI}/credits?api_key=991a45eb353643be9d519427affc937f&language=en-US`
      )
      .then((response) => {
        const array = response.data.cast.slice(0,15);
        setCasts(array);
      });
  }, [movieI]);

  console.log(casts);
  return (
    <Wrapper>
      {casts?.map((curItem) => {
        return (
          <div className="section">
            <p className="name">{curItem?.name}</p>
            <div className="img-div">
              <img
                src={`https://image.tmdb.org/t/p/original/${curItem?.profile_path}`}
                alt={curItem?.name}
              />
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr; */
  color: white;
  background-color: rgb(3,31,54);
  .section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .name {
      color: white;
      font-size: 2rem;
      font-family: "Oswald", sans-serif;
    }
    .img-div {
      width: 200px;
      height: 280px;
      border-radius: 9px;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 9px;
      }
      @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        width: 120px;
        height: 170px;
      }
    }
  }
  /* @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    grid-template-columns: 1fr 1fr 1fr;
  } */
`;

export default Credits;
