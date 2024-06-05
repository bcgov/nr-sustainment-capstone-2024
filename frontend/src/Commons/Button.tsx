import StyledButton from './Styles/Button.style';

type ButtonTypes = {
  text: string;
};

const Button = ({ text }: ButtonTypes) => {
  const handleClick = () => {
    console.log('button clicked');
  };
  return (
    <StyledButton type="button" onClick={handleClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
