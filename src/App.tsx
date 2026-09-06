import Dice from "./Dice";
import "./App.css";

function App() {
  return (
    <main className="app">
      <h1 className="app_title">주사위 게임</h1>
      <p className="app_description">파란 주사위 한개 표시</p>
      <Dice />
    </main>
  );
}

export default App;
