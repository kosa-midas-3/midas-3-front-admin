import React, { useRef } from "react";
import styled from "styled-components";
import { FullInput, useInput, FullButton } from "@kimuichan/ui-base";
import { useMutation } from "react-query";
import { postAuth } from "../../api/Auth/AuthApi";
const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginStyle = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px #ddd;
  border-radius: 10px;
  padding: 50px;
`;

const TitleStyle = styled.div`
  width: 430px;
  display: flex;
  font-size: 60px;
  align-items: center;
  padding: 40px 0 80px;
`;

const TextStyle = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin-left: 20px;
`;

const Login = ({ setIsPassword }) => {
  const [password, setPassword] = useInput("");
  const inputRef = useRef(null);
  const { mutate } = useMutation(postAuth, {
    onSuccess: () => {
      setIsPassword(!!password);
    },
    onError: () => {
      setPassword({ target: { value: "" } });
      alert("사용자가 존재하지 않습니다.");
      localStorage.removeItem("password");
    },
  });
  const onClickHandler = () => {
    console.log(password);
    localStorage.setItem("password", password);
    mutate();
  };

  return (
    <LoginWrapper>
      <LoginStyle>
        <TitleStyle>
          👋
          <TextStyle>
            비밀번호를 입력하여 <br /> 로그인하세요
          </TextStyle>
        </TitleStyle>
        <FullInput
          onChange={setPassword}
          value={password}
          inputRef={inputRef}
          placeholder="비밀번호를 입력하세요."
        />
        <FullButton onClick={onClickHandler}>로그인</FullButton>
      </LoginStyle>
    </LoginWrapper>
  );
};

export default Login;
