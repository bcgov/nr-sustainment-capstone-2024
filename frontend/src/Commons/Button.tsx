import StyledButton from './Styles/Button.style';

const Button = ({ text }: { text:string }) => ( // Destructured primitive string literal
  <StyledButton type="button">{text}</StyledButton>
);

export default Button;
