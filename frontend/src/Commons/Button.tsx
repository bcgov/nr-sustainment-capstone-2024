import StyledButton from './Styles/Button.style';

const Button = ({ text }: { text:string }) => (
  <StyledButton type="button">{text}</StyledButton>
);

export default Button;
