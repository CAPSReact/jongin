import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InsideImage from "../../assets/images/navigation/inside.svg";
import OutSideImage from "../../assets/images/navigation/outside.svg";
import BoardImage from "../../assets/images/navigation/board.svg";
import ProfileImage from "../../assets/images/navigation/profile.svg";

export const Wrapper = styled.div`
  position: fixed;
  margin: 0 auto;
  width: 100%;
  bottom: 0;
  max-height: 80px;
  min-height: 1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
`;

const NavigationBar = styled.div`
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  max-width: 390px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 30px 30px 0 0;
  display: grid;
  grid-template-columns: repeat(
    4,
    1fr
  ); /* 4개의 요소를 각각 같은 너비로 설정 */
`;

const BtnBox = styled.div`
  margin: auto;
  width: 60%;
  height: 80%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* 내부 글자 속성 */
  color: #000;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.5px;

  /* 포인터 */
  cursor: pointer;
`;

/* 내부에 들어갈 글자의 스타일링까지 한번에 해줍니다. */

export default function Navigation() {
  const navigate = useNavigate();

  //   const handleNavigate = () => {
  //     navigate("/home");
  //   };

  return (
    <Wrapper>
      <NavigationBar>
        <BtnBox
          onClick={() => {
            navigate("/house");
          }}
        >
          <img src={OutSideImage} alt="outside" />
          outside
        </BtnBox>
        <BtnBox
          onClick={() => {
            navigate("/inside");
          }}
        >
          <img src={InsideImage} alt="inside" />
          inside
        </BtnBox>
        <BtnBox
          onClick={() => {
            navigate("/board");
          }}
        >
          <img src={BoardImage} alt="borad" />
          board
        </BtnBox>
        <BtnBox
          onClick={() => {
            navigate("/test");
          }}
        >
          <img src={ProfileImage} alt="profile" />
          profile
        </BtnBox>
      </NavigationBar>
    </Wrapper>
  );
}
