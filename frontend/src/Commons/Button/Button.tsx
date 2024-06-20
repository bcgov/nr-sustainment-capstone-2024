import React from 'react';
import { StyledButton, StyledChildrenContainer } from './Button.style';

type ButtonSizes = 'sm' | 'md' | 'lg';
type ButtonActions = 'primary' | 'secondary';
type ButtonTypes = 'button' | 'submit' | 'reset' | undefined;

type ButtonProps = {
  handleClick?: () => void;
  text: string;
  size?: ButtonSizes;
  disabled?: boolean;
  type?: ButtonTypes;
  radius?: string;
  actions?: ButtonActions;
  children?: React.ReactNode;
};

const Button = ({
  handleClick,
  text,
  size = 'md',
  disabled = false,
  radius = '8px',
  type = 'button',
  actions = 'primary',
  children,
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
      radius={radius}
      actions={actions}
    >
      <StyledChildrenContainer>
        {children}
        {text}
      </StyledChildrenContainer>
    </StyledButton>
  );
};

export default Button;
