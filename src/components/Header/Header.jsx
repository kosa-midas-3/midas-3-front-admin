import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { postAuth } from "../../api/Auth/AuthApi";
import logo from "../../assets/img/logo.png";
const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const LogoStyle = styled.img`
  width: 150px;
`;

const TextStyle = styled.p`
  font-size: 35px;
  font-weight: bold;
  margin: 20px 0;
  display: inline;
`;

const SpanStyle = styled.span`
  color: #6cdc84;
`;

const Header = ({ setIsPassword }) => {
  const { data } = useQuery("getMyInfo", postAuth, {
    onSuccess: () => {},
    onError: () => {
      alert("유저 정보가 존재하지 않습니다.");
      setIsPassword(false);
      localStorage.removeItem("password");
    },
    onSettled: () => {},
  });

  return (
    <HeaderStyle>
      <LogoStyle src={logo} />
      <TextStyle>
        안녕하세요 <SpanStyle>{data?.nickname}</SpanStyle>님
      </TextStyle>
    </HeaderStyle>
  );
};

export default Header;
