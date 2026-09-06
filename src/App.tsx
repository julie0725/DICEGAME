import { useState } from "react";
import "./App.css";
import Board from "./Board";
import Button from "./Button";

function getRandomDiceNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function App() {
  const [myHistory, setMyHistory] = useState<number[]>([]);

  // 1. 클릭시 랜덤으로 주사 돌리는 함수
  function handleRollClick() {
    const nextNumber = getRandomDiceNumber();

    setMyHistory((history) => [...history, nextNumber]);
  }

  return (
    <main className="app">
      <h1 className="app_title">주사위 게임</h1>
      <p className="app_description">게임 화면을 Board Component로 분리</p>

      <div className="app_actions">
        <Button text="던지기" onClick={handleRollClick} />
      </div>

      <Board name="나" gameHistory={myHistory} />
    </main>
  );
}

export default App;
