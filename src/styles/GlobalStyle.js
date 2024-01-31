import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	// 희망하는 전역 스타일 정의
    body {
        font-size: 16px;
    }
    button {
        outline: none;
        border: none;
    }
    input {
        outline: none;
        border: none;
    }
    @font-face {
        font-family: "KorailRoundGothicBold";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/KorailRoundGothicBold.woff2")
            format("woff2");
        font-weight: 700;
        font-style: normal;
    }
`;

export default GlobalStyle;
