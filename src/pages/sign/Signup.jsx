import React, { useState } from "react";

import {
  SignButton,
  SignInput,
  SignLabel,
  SignSay,
  SignTitle,
  UserSelect,
  Welcome,
  Wrapper,
} from "../../styles/Style";

export default function Signup() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [userType, setUserType] = useState("");
  let isFormCompleted = id != "" && pw != "" && userType != "";
  return (
    <>
      <Wrapper>
        <SignTitle>회원가입</SignTitle>
        <Welcome>반갑습니다.</Welcome>
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
        <SignLabel>회원유형</SignLabel>
        <UserSelect
          onChange={(e) => {
            setUserType(e.target.value);
          }}
          value={userType}
        >
          <option value="0">회장</option>
          <option value="1">부회장</option>
          <option value="2">집행부</option>
          <option value="3">부원</option>
        </UserSelect>
        <SignSay
          style={isFormCompleted ? { color: "#8ED0F4" } : { color: "#ED1B24" }}
        >
          {isFormCompleted ? "가입이 가능합니다." : "모든 정보를 입력해주세요!"}
        </SignSay>
        <SignButton disabled={!isFormCompleted}>가입(signup)</SignButton>
      </Wrapper>
    </>
  );
}
