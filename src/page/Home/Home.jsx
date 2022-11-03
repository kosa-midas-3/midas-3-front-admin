import React from "react";
import styled from "styled-components";
import { getHomeApply, postAuth } from "../../api/Auth/AuthApi";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import { useQuery } from "react-query";

const BoxStyle = styled.div`
  width: 100%;
  height: 100%;
`;

const Home = () => {
  const { data } = useQuery("getUserInfo", getHomeApply, {
    onSuccess: () => {},
    onError: () => {},
    onSettled: () => {},
  });

  return (
    <BoxStyle>
      <Header />
      <Main homeApplies={data?.homeApplies} />
      <Footer />
    </BoxStyle>
  );
};

export default Home;
