// Button이 받을 데이터 모양 interface로 정의
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}
// primary : 기본 파란 버튼
// secondary: 보조 회색 버튼

// App이 넘겨준 text, onClick 받아서
// 실제 HTML button 태그로 만들어서 화면에 표시해주는 기능
function Button({ text, onClick, variant = "primary" }: ButtonProps) {
  return (
    <button className={`button button--${variant}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
