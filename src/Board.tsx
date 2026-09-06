import Dice, { type DiceColor } from "./Dice";

interface BoardProps {
  name: string;
  color?: DiceColor;
  gameHistory: number[];
}

// 기록은 join 사용
// 총점은 reduce 사용
// 현재 나온 숫자는 myHistory의 마지막 값 사용
function Board({ name, color = "blue", gameHistory }: BoardProps) {
  const currentNumber = gameHistory[gameHistory.length - 1] ?? 1;

  const totalScore = gameHistory.reduce((sum, number) => sum + number, 0);

  return (
    <section className={`board board--${color}`}>
      <h2 className="board_title">{name}</h2>

      <Dice color={color} num={currentNumber} />

      <div className="board_results">
        <p className="board_result">현재 나온 숫자: {currentNumber} </p>
        <p className="board_result">총점: {totalScore}</p>
        <p className="board_result">
          기록:{" "}
          {gameHistory.length === 0 ? "아직 없습니다." : gameHistory.join(", ")}
        </p>
      </div>
    </section>
  );
}

export default Board;
