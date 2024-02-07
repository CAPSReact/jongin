// src/component/board/Item.jsx
import styled from "styled-components";
import BreadImage from "../../assets/images/items/bread.png";

export default function Item({ date }) {
  return (
    <ItemBox>
      <Bread />
      갓 나온 맛있는 빵 <br /> {date}
    </ItemBox>
  );
}

const ItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};

  font-size: 16px;
  color: ${({ theme }) => theme.colors.marin};
  font-weight: 300;
`;

const Bread = styled.div`
  width: 70px;
  height: 70px;
  background: url(${BreadImage});
  background-repeat: no-repeat;
  background-size: cover;
`;
