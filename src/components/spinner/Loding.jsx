// import 이미지와 사이즈는 개인에 맞게 조정해주세요.

import Spinner from "../../assets/images/spinner/spinner1.gif";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  position: fixed;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  min-height: 99vh;
  display: flex;
  flex-direction: column;
  max-width: 390px;
  align-items: center;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.44);
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 95%;
  scale: 2;
  align-items: center;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 8px;
  font-weight: 600;
  line-height: normal;
`;

export default function Loading({ loadingText }) {
  return (
    <Wrapper>
      <LoadingContainer>
        <img src={Spinner} alt="로딩" width="30%" />
        {loadingText}
      </LoadingContainer>
    </Wrapper>
  );
}

Loading.propTypes = {
  loadingText: PropTypes.string,
};
