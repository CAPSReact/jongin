import styled, { keyframes } from "styled-components";

export const ButtonStyle = styled.div`
  width: 100px;
  height: 50px;
  text-align: center;
  background-color: ${(ob) => ob.theme.colors.darkGray};
`;
// 페이드 애니메이션 키프레임
const FadeIn = () => keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.gray};
  animation: ${FadeIn()} 2s ease-out;
`;

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  min-height: 99vh;
  display: flex;
  flex-direction: column;
  max-width: 390px;
  background-color: ${({ theme }) => {
    return theme.background.brightBg;
  }};
  align-items: center;
  text-align: center;
`;

export const Container = styled.div`
  width: 390px;
  height: 844px;
  background: ${({ theme }) => {
    return theme.background.brightBg;
  }};
`;

export const SignTitle = styled.h1`
  display: flex;
  width: 294px;
  height: 46px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ theme }) => {
    return theme.colors.myText;
  }};
  text-align: center;
  font-family: KorailRoundGothicBold;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: -17px;
  margin-top: 124px;
`;

export const SignLabel = styled.p`
  width: 304px;
  color: ${({ theme }) => {
    return theme.colors.myText;
  }};
  font-family: KorailRoundGothicBold;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
`;

export const Welcome = styled.h2`
  display: flex;
  width: 294px;
  height: 46px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ theme }) => {
    return theme.colors.myText;
  }};
  text-align: center;
  font-family: KorailRoundGothicBold;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SignInput = styled.input`
  width: 274px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #333d42;
  background: ${({ theme }) => {
    return theme.background.brightBg;
  }};
  padding: 0 15px;
`;

export const UserSelect = styled.select`
  width: 304px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #2f88a4;
  background: ${({ theme }) => {
    return theme.background.brightBg;
  }};
  padding: 0 15px;
  font-family: KorailRoundGothicBold;
`;

export const SignButton = styled.button`
  display: flex;
  width: 200px;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #ffffff;
  background-color: #11264f;
  text-align: right;
  font-family: KorailRoundGothicBold;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 10px;
  border: none;
  padding: 0 45px;
  background: #2f88a4;
`;

export const SignSay = styled.p`
  display: flex;
  width: 294px;
  height: 46px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #ed1b24;
  text-align: center;
  font-family: KorailRoundGothicBold;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 125px;
`;

// 같은 파일에 함께 선언한다.
// 사용법
// ${({ theme }) => theme.상수이름.상수요소}
// 여기서는 colors의 요소를 사용했다.

/* canvas 속성 */
export const Box = styled.div`
  // margin-top: 200px;
  width: 100%;
  max-width: 390px;
  height: 100vh;
`;

/* sign */

/* 3d pages */
export const InGameButtonStyle = styled.div`
  position: absolute;
  width: 50%;
  text-align: center;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.marin};
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  border-radius: 10px;
  bottom: 140px;
  left: 0;
  right: 0;
  margin: 0 auto;
  cursor: pointer;
`;
