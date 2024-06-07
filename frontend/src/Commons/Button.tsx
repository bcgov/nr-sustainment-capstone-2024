import { useNavigate } from 'react-router-dom';
import StyledButton from './Styles/Button.style';

export type ButtonSizes = 'sm' | 'md' | 'lg';
export type ButtonProps = {
  handleClick?: () => void;
  text: string;
  size: ButtonSizes;
  disabled: boolean;
  path?: string;
};

const Button = ({ handleClick, text, size = 'md', disabled = false, path = '' }: ButtonProps) => {
  const navigate = useNavigate();

  const handleClickWrapper = handleClick || (() => {
    if (path) {
      navigate(path);
    }
  });

  return (
    <StyledButton size={size} disabled={disabled} onClick={handleClickWrapper} value="">
      {text}
    </StyledButton>
  );
};

export default Button;
