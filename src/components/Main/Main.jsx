import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import List from "../List/List";

const BoxStyle = styled.div`
  padding: 0 30px 15px 30px;
`;

const TextStyle = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin: 0;
`;

const Main = ({ Department }) => {
  return (
    <BoxStyle>
      <TextStyle>{Department?.department}</TextStyle>
      <List Department={Department} />
    </BoxStyle>
  );
};

export default Main;
