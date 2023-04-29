import React from "react";
import styled from "styled-components";
import requests from "../Request";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const { signUp } = useAuthContext();

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SignUser>
      <div className="background-image">
        <img src={requests.requestNetflixImage} alt="/" />
        <div className="overlay"></div>
      </div>
      <div className="form-container">
        <form className="form" onSubmit={signupHandler}>
          <Link className="links" to="/">
            <h1 className="logo">M-flix</h1>
          </Link>
          <h1>Create Account</h1>
          <p className="error">{error}</p>
          <input
            type="email"
            name="email"
            placeholder="Enter email address..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
          <div className="flex2">
            <p>
              <input type="checkbox" />
              <span className="already-span">Remember me</span>
            </p>
            <p>Need Help?</p>
          </div>
          <h3 className="already">
            Already have an account?
            <Link to="/login" className="link">
              Login in
            </Link>
          </h3>
          lix Sign In
          <p className="info">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.<span>Learn more</span>
          </p>
        </form>
      </div>
    </SignUser>
  );
};

const SignUser = styled.div`
  width: 100%;
  height: 100%;
  .error {
    color: red;
  }

  .background-image {
    height: 100%;
    img {
      width: 100vw;
      height: 100vh;
      object-fit: cover;
    }
    .overlay {
      position: absolute;
      top: 0;
      width: 100vw;
      height: 100vh;
      background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
      img {
        display: none;
      }
      .overlay {
        display: none;
      }
    }
  }
  .form-container {
    display: flex;
    justify-content: center;
    .form {
      .links {
        text-decoration: none;
      }
      .logo {
        color: red;
        font-size: 4rem;
        text-transform: uppercase;
        margin-bottom: 1.3rem;
      }
      position: absolute;
      top: 10rem;
      color: white;
      background: black;
      display: flex;
      flex-direction: column;
      min-width: 500px;
      padding: 1rem 2rem 3rem;
      border-radius: 5px;
      input {
        padding: 1.3rem 1rem;
        margin-top: 1rem;
        border-radius: 5px;
      }
      button {
        padding: 1.3rem 1rem;
        margin-top: 1rem;
        background-color: red;
        color: white;
        cursor: pointer;
        border: none;
        border-radius: 5px;
      }
      .flex2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
        p {
          font-size: 1.3rem;
          color: grey;
        }
      }
      .already {
        margin-top: 1rem;
        color: grey;
        /* .link {
          color: #c8c1c1;
        } */
      }
      .info {
        margin-top: 1rem;
        color: grey;
        font-size: 1.2rem;
        span {
          color: #4747e4;
          text-decoration: underline;
          cursor: pointer;
        }
      }
      @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        min-width: 300px;
      }
    }
  }
`;

export default SignUp;
