import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useAuthContext();

  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await signOutUser();
      // navigate("/signup");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <NavWrapper>
      <Link to="/" className="link">
        <h1>M-FLIX</h1>
      </Link>

      <div className="nav-button-container">
        {!user?.email ? (
          <>
            <Link to="/signup">
              <button className="sign-in">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="signup-btn">Login</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/account">
              <button className="sign-in">Account</button>
            </Link>
            <Link to="/login">
              <button className="signup-btn" onClick={logoutHandler}>
                Logout
              </button>
            </Link>
          </>
        )}
      </div>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  .link {
    text-decoration: none;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  background: transparent;
  /* margin: 3px 2% 0; */
  padding: 0 5% 0 5%;
  margin-top: 5px;
  z-index: 9;
  h1 {
    font-size: 2.25rem;
    color: rgb(220 38 38);
  }
  .nav-button-container {
    button {
      color: white;
      padding: 0.3rem 0.7rem;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }
    .signup-btn {
      background-color: rgb(220 38 38);
      margin-left: 7px;
      transition: 0.2s ease;
      &:hover {
        background-color: #700c0c;
      }
    }
    .sign-in {
      background-color: transparent;
      border: none;
    }
  }
`;

export default Navbar;
