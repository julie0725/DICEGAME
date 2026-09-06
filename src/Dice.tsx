import diceBlue01 from "./assets/dice-blue-1.svg";
import diceBlue02 from "./assets/dice-blue-2.svg";
import diceBlue03 from "./assets/dice-blue-3.svg";
import diceBlue04 from "./assets/dice-blue-4.svg";
import diceBlue05 from "./assets/dice-blue-5.svg";
import diceBlue06 from "./assets/dice-blue-6.svg";

interface DiceProps {
  num?: number;
}

const DICE_IMAGES = [
  diceBlue01,
  diceBlue02,
  diceBlue03,
  diceBlue04,
  diceBlue05,
  diceBlue06,
];

function Dice({ num = 1 }: DiceProps) {
  const diceImage = DICE_IMAGES[num - 1];

  return (
    <img className="dice" src={diceImage} alt={`파란색 ${num}이 나온 주사위`} />
  );
}

export default Dice;
