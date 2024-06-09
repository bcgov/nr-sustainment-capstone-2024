import { useNavigate } from 'react-router-dom';
import React from 'react';
import StyledButton from './Button.style';

type ButtonSizes = 'sm' | 'md' | 'lg';
type ButtonProps = {
  handleClick?: () => void;
  text: string;
  size: ButtonSizes;
  disabled: boolean;
  path?: string;
};

const Button = ({ handleClick, text, size = 'md', disabled = false, path = '' }: ButtonProps) => {
  const navigate = useNavigate();

  const handleClickWrapper = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (handleClick) {
      handleClick();
    } else if (path) {
      navigate(path);
    }
  };

  return (
    <StyledButton size={size} disabled={disabled} onClick={handleClickWrapper} value="">
      {text}
    </StyledButton>
  );
};

export default Button;
