import React from "react";
import styled from "styled-components";
import { postAuth } from "../../api/Auth/AuthApi";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import { useQuery } from "react-query";

const BoxStyle = styled.div`
  width: 100%;
  height: 100%;
`;

const Home = () => {
  const { data, refetch, isLoading } = useQuery("getUserInfo", postAuth, {
    onSuccess: () => {},
    onError: () => {},
    onSettled: () => {},
  });

  return (
    <BoxStyle>
      <Header nickname={data?.nickname} />
      <Main Department={data?.Department} />
      <Footer />
    </BoxStyle>
  );
};

export default Home;
