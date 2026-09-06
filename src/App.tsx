import { useState } from "react";
import "./App.css";
import Board from "./Board";
import Button from "./Button";

function getRandomDiceNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function App() {
  // 나와 상대방의 주사위를 동시에 던집는 함수
  const [myHistory, setMyHistory] = useState<number[]>([]);
  const [otherHistory, setOtherHistory] = useState<number[]>([]);

  // 1. 클릭시 랜덤으로 주사 돌리는 함수 primary
  function handleRollClick() {
    const nextMyNumber = getRandomDiceNumber();
    const nextOtherNumber = getRandomDiceNumber();

    setMyHistory((history) => [...history, nextMyNumber]);
    setOtherHistory((history) => [...history, nextOtherNumber]);
  }

  // 2. 초기화 함수 variant :secondary
  function handleClearClick() {
    setMyHistory([]); //초기화
    setOtherHistory([]); //초기화
  }
  return (
    <main className="app">
      <h1 className="app_title">주사위 게임</h1>
      <p className="app_description">나와 상대방의 주사위를 동시에 던지기</p>

      <div className="app_actions">
        <Button text="던지기" onClick={handleRollClick} />
        <Button
          text="처음부터"
          variant="secondary"
          onClick={handleClearClick}
        />
      </div>

      <div className="board_list">
        <Board name="나" color="blue" gameHistory={myHistory} />
        <Board name="상대방" color="red" gameHistory={otherHistory} />
      </div>
    </main>
  );
}

export default App;
