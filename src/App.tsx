import { useState } from "react";
import "./App.css";
import Dice from "./Dice";
import Button from "./Button";

function getRandomDiceNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function App() {
  const [myHistory, setMyHistory] = useState<number[]>([]);

  // 기록은 join 사용
  // 총점은 reduce 사용
  // 현재 나온 숫자는 myHistory의 마지막 값 사용 
  const currentNumber = myHistory[myHistory.length - 1] ?? 1;

  const totalScore = myHistory.reduce((sum, number) => sum + number, 0);

  // 1. 클릭시 랜덤으로 주사 돌리는 함수
  function handleRollClick() {
    const nextNumber = getRandomDiceNumber();

    setMyHistory((history) => [...history, nextNumber]);
  }

  return (
    <main className="app">
      <h1 className="app_title">주사위 게임</h1>
      <p className="app_description">
        주사위 기록 + 총점 기록하기
        <p></p>
      </p>

      <Dice num={currentNumber} />
      <div className="app_results">
        <p className="app_result">현재 나온 숫자: {currentNumber} </p>
        <p className="app_result">총점: {totalScore}</p>
        <p className="app_result">
          기록:{" "}
          {myHistory.length === 0 ? "아직 없습니다." : myHistory.join(", ")}
        </p>
      </div>
      <div className="app_actions">
        <Button text="던지기" onClick={handleRollClick} />
      </div>
    </main>
  );
}

export default App;
