import React from "react";
import styled from "styled-components";
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
`;

const SpanStyle = styled.span`
  color: #6cdc84;
`;

const Header = ({ nickname }) => {
  return (
    <HeaderStyle>
      <LogoStyle src={logo} />
      <TextStyle>
        안녕하세요 <SpanStyle>{nickname}</SpanStyle>님
      </TextStyle>
    </HeaderStyle>
  );
};

export default Header;
