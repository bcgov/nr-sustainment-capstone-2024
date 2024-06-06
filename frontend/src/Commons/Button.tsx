import { useNavigate } from 'react-router-dom';
import StyledButton from './Styles/Button.style';

type ButtonTypes = {
  text: string;
  path?: string;
};

const Button = ({ text, path }: ButtonTypes) => {
  const navigate = useNavigate();

  const handleClick = () => {
    path ? navigate(path) : null;
  };
  return (
    <StyledButton type="button" onClick={handleClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
