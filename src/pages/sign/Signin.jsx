import React, { useState } from "react";
import "../../styles/sign.css";
import {
  SignButton,
  SignInput,
  SignLabel,
  SignSay,
  SignTitle,
  Welcome,
  Wrapper,
} from "../../styles/style";

export default function Signin() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  let isFormCompleted = id != "" && pw != "";
  return (
    <Wrapper>
      <SignTitle>로그인</SignTitle>
      <Welcome className="welcome">반갑습니다.</Welcome>
      <SignLabel>ID</SignLabel>
      <SignInput
        type="text"
        placeholder="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></SignInput>
      <SignLabel>PW</SignLabel>
      <SignInput
        type="password"
        placeholder="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
      ></SignInput>

      <SignSay
        style={isFormCompleted ? { color: "#8ED0F4" } : { color: "#ED1B24" }}
      >
        {isFormCompleted ? "로그인이 가능합니다." : "모든 정보를 입력해주세요!"}
      </SignSay>
      <SignButton className="signup_btn" disabled={!isFormCompleted}>
        로그인(login)
      </SignButton>
    </Wrapper>
  );
}
