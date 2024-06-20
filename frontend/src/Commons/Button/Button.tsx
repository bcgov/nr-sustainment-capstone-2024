import StyledButton from './Button.style';

type ButtonSizes = 'sm' | 'md' | 'lg';
type ButtonTypes = 'button' | 'submit' | 'reset' | undefined;

type ButtonProps = {
  handleClick?: () => void;
  text: string;
  size?: ButtonSizes;
  disabled?: boolean;
  type?: ButtonTypes;
};

const Button = ({
  handleClick,
  text,
  size = 'md',
  disabled = false,
  type = 'button',
}: ButtonProps) => {
  const handleClickWrapper = () => {
    if (handleClick) {
      handleClick();
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
