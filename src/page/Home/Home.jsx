import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";

const BoxStyle = styled.div`
  width: 1124px;
  margin: 0 auto;
`;

const Home = ({ setIsPassword }) => {
  return (
    <BoxStyle>
      <Header setIsPassword={setIsPassword} />
      <Main />
      <Footer />
    </BoxStyle>
  );
};

export default Home;
