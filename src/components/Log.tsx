import { BoardState } from './GameState';

type LogProps = {
  history: BoardState[];
  jumpTo: (step: number) => void;
};
export const Log = (props: LogProps) => {
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
