import { useModal } from "@kimuichan/ui-base";
import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getHomeApply } from "../../api/Auth/AuthApi";
import List from "../List/List";

const BoxStyle = styled.div`
  padding: 0 30px 15px 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TextStyle = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

const Main = () => {
  const { data } = useQuery("getUserInfo", getHomeApply, {
    onSuccess: () => {},
  });
  return (
    <BoxStyle>
      {Object.keys(data?.homeApplies || {}).map((name, idx) => (
        <div
          style={{ display: " flex", flexDirection: "column", gap: "20px" }}
          key={idx}
        >
          <TextStyle>{name}</TextStyle>
          <List homeApply={data?.homeApplies[name]}></List>
        </div>
      ))}
    </BoxStyle>
  );
};

export default Main;
