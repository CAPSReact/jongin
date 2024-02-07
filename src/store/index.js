import { configureStore } from "@reduxjs/toolkit";
import breadSlice from "../items/breadSlice";
import listSlice from "../items/listSlice";

// 스토어 설정
export const store = configureStore({
  reducer: {
    // 여기서 선언한 이름이 useSelector를 통해 가져올 때 사용할 이름이다.
    bread: breadSlice,
    // state 추가
    list: listSlice,
  },
});
