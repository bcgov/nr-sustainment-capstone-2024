import StyledButton from './Styles/Button.style';

export type ButtonSizes = 'sm' | 'md' | 'lg';
export type ButtonProps = {
  handleClick?: () => void;
  text: string;
  size: ButtonSizes;
  disabled: boolean;
};

const Button = ({ handleClick, text, size = 'md', disabled = false }: ButtonProps) => (
  <StyledButton size={size} disabled={disabled} onClick={handleClick} value="">
    {text}
  </StyledButton>
);

export default Button;
