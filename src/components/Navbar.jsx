import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavWrapper>
      <h1>NETFLIX</h1>
      <div className="nav-button-container">
        <button className="sign-in">Sign In</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
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
    .sign-in{
      background-color: transparent;
      border: none;
    }
  }
`;

export default Navbar;
