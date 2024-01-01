import { Board } from './Board';
import { useGameState } from './GameState';
import { Column, Row } from './Layout';
import { Log } from './Log';

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
      <Log history={gameState.history} jumpTo={jumpTo} />
    </Row>
  );
};

export default Game;
