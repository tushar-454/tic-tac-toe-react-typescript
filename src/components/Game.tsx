import styled from 'styled-components';
import { BoardState, useGameState } from './GameState';

type LayoutProps = {
  gap: number;
};

const Row = styled.div<LayoutProps>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap}px;
`;
const Column = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap}px;
`;

const Game = () => {
  const { gameState, current, xIsNext, winner, handleClick, jumpTo } =
    useGameState();
  return (
    <Row gap={20}>
      <Column gap={20}>
        <div>
          {winner ? `Winner ${winner}` : `Next Player ${xIsNext ? 'X' : 'O'}`}
        </div>
        <Board board={current} onClick={handleClick} />
      </Column>
      <Log history={gameState.history} jumpTp={jumpTo} />
    </Row>
  );
};

type BoardProps = {
  board: BoardState;
  onClick: (square: number) => void;
};

const Board = ({ board, onClick }: BoardProps) => {
  const createProps = (square: number): SquareProps => {
    return {
      value: board[square],
      onClick: () => onClick(square),
    };
  };
  return (
    <Column>
      <Row gap={0}>
        <Square {...createProps(0)} />
        <Square {...createProps(1)} />
        <Square {...createProps(2)} />
      </Row>
      <Row gap={0}>
        <Square {...createProps(3)} />
        <Square {...createProps(4)} />
        <Square {...createProps(5)} />
      </Row>
      <Row gap={0}>
        <Square {...createProps(6)} />
        <Square {...createProps(7)} />
        <Square {...createProps(8)} />
      </Row>
    </Column>
  );
};

const StyledSquare = styled.button`
  width: 34px;
  height: 34px;
  background: #fff;
  border: 1px solid #999;
  padding: 0;
  font-size: 24px;
  font-weight: bold;
`;
type SquareProps = {
  value: Value;
  onClick: () => void;
};
const Square = (props: SquareProps) => {
  return <StyledSquare onClick={props.onClick}>{props.value}</StyledSquare>;
};

type LogProps = {
  history: BoardState[];
  jumpTo: (step: number) => void;
};

const Log = (props: LogProps) => {
  return (
    <div>
      <ol>
        {props.history.map((_, index) => {
          return (
            <li key={index}>
              <button onClick={() => props.jumpTo(index)}>
                Go to {index === 0 ? 'Start' : `Move #${index}`}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Game;
