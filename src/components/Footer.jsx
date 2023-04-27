import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <WrapperFooter>
      <div className="1">
        <ul>
          <li>FAQ</li>
          <li>Account</li>
          <li>Investor Relations</li>
          <li>Ways to Watch</li>
        </ul>
      </div>
      <div className="2">
        <ul>
          <li>Privacy</li>
          <li>Corporate Information</li>
          <li>Speed Test</li>
          <li>Only on Netflix</li>
        </ul>
      </div>

      <div className="3">
        <ul>
          <li>Help Center</li>
          <li>Media Center</li>
          <li>Job</li>
          <li>Terms of Use</li>
        </ul>
      </div>

      <div className="4">
        <ul>
          <li>Contact Us</li>
          <li>Legal Notices</li>
        </ul>
      </div>
    </WrapperFooter>
  );
};

const WrapperFooter = styled.footer`
  background-color: #00081d;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-top: 2rem;
  padding-bottom: 2rem;
  div {
    display: flex;
    align-items: center;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 1rem;
    ul li {
      list-style: none;
      padding: 5px;
      font-size: 1.2rem;
      cursor: pointer;
      text-decoration: underline;
      color: white;
    }
  }

  @media (max-width: ${({theme})=> theme.responsive.mobile})
  {
    grid-template-columns: 1fr 1fr;
  }


`;

export default Footer;
