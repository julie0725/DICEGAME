// Button이 받을 데이터 모양 interface로 정의
interface ButtonProps {
  text: string;
  onClick: () => void;
}

// App이 넘겨준 text, onClick 받아서
// 실제 HTML button 태그로 만들어서 화면에 표시해주는 기능
function Button({ text, onClick }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
