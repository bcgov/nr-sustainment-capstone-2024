import { useNavigate } from 'react-router-dom';
import StyledButton from './Styles/Button.style';

type ButtonTypes = {
  text: string;
  path?: string;
};

const Button = ({ text, path }: ButtonTypes) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);
    }
  };
  return (
    <StyledButton type="button" onClick={handleClick}>
      {text}
    </StyledButton>
  );
};

// ESLint hates not having a default :p
Button.defaultProps = {
  path: '',
};

export default Button;
