import { useNavigate } from 'react-router-dom';
import StyledButton from './Button.style';

type ButtonSizes = 'sm' | 'md' | 'lg';
type ButtonTypes = 'button' | 'submit' | 'reset' | undefined;

type ButtonProps = {
  handleClick?: () => void;
  text: string;
  size?: ButtonSizes;
  disabled?: boolean;
  path?: string;
  type?: ButtonTypes;
};

const Button = ({
  handleClick,
  text,
  size = 'md',
  disabled = false,
  path = '',
  type = 'button',
}: ButtonProps) => {
  const navigate = useNavigate();

  const handleClickWrapper = () => {
    if (handleClick) {
      handleClick();
    } else if (path) {
      if (path === '/main' && localStorage.getItem('farmDetails')) {
        console.log('Continue last Calculation?');
      }
      navigate(path);
    }
  };

  return (
    <StyledButton
      size={size}
      disabled={disabled}
      onClick={handleClickWrapper}
      value=""
      type={type}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
