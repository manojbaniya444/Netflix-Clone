import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Account = () => {
  return (
    <AccountPageWrapper>
        <Navbar />
      <h2>This is account page and this is protected.</h2>
    </AccountPageWrapper>
  );
};

const AccountPageWrapper = styled.section`
  h2 {
    color: white;
    font-size: 2rem;
    padding-top: 9rem;
    text-align: center;
  }
`;

export default Account;
