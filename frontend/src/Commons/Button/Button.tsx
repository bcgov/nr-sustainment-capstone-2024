import { useNavigate } from 'react-router-dom';
import StyledButton from './Button.style';

type ButtonSizes = 'sm' | 'md' | 'lg';
type ButtonActions = 'primary' | 'secondary'
type ButtonTypes = 'button' | 'submit' | 'reset' | undefined;

type ButtonProps = {
  handleClick?: () => void;
  text: string;
  size?: ButtonSizes;
  disabled?: boolean;
  actions?: ButtonActions;
  path?: string;
  type?: ButtonTypes;
  radius?: string;
};

const Button = ({
  handleClick,
  text,
  size = 'md',
  disabled = false,
  path = '',
  radius = '8px',
  type = 'button',
  actions = 'primary',
}: ButtonProps) => {
  const navigate = useNavigate();

  const handleClickWrapper = () => {
    if (handleClick) {
      handleClick();
    } else if (path) {
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
      radius={radius}
      actions={actions}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
