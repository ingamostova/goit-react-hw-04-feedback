import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
`;

export const Btn = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  font-family: Helvetica, sans-serif;
  background-color: rgb(95, 192, 225);
  border: none;
  border-radius: 8px;
  transition: all 250ms ease-out;
  :hover {
    background-color: #008cba;
    cursor: pointer;
  }
`;
