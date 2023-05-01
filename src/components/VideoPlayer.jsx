import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAuthContext } from "../context/AuthContext";

const VideoPlayer = ({ id }) => {
  const [trailerURL, setTrailerURL] = useState("");
  const { showModal, setShowModal } = useAuthContext();
  const trailerRequest = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=991a45eb353643be9d519427affc937f&language=en-US
    `;

  useEffect(() => {
    const fetchTrailerURL = async () => {
      const response = await axios.get(trailerRequest);
      console.log(response);
      const trailer = response.data.results[0];
      const resTrailerURL = `https://www.youtube.com/embed/${trailer.key}`;
      setTrailerURL(resTrailerURL);
      console.log(trailer);
    };
    fetchTrailerURL();
  }, [id]);

  return (
    <VideoWrapper>
      <button className="close-player" onClick={() => setShowModal(false)}>
        Close
      </button>
      <div className="container">
        <iframe
          width="560"
          height="315"
          className="responsive-iframe"
          // src="https://www.youtube.com/embed/gardMnJszqc"
          src={trailerURL}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share "
          allowFullScreen
        ></iframe>
      </div>
    </VideoWrapper>
  );
};

const VideoWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  top: 5rem;
  left: 5rem;
  width: 70%;
  .container {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
  }

  .close-player {
    color: white;
    cursor: pointer;
    background-color: red;
    padding: 1rem;
    border: none;
  }
  .responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;

export default VideoPlayer;
