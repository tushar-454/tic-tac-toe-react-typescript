import styled from 'styled-components';

const StyledSquare = styled.button`
  width: 34px;
  height: 34px;
  background: #fff;
  border: 1px solid #999;
  padding: 0;
  font-size: 24px;
  font-weight: bold;
`;
export type SquareProps = {
  value: Value;
  onClick: () => void;
};
export const Square = (props: SquareProps) => {
  return <StyledSquare onClick={props.onClick}>{props.value}</StyledSquare>;
};
