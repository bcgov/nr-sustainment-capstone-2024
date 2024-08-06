import React from 'react';
import ButtonTypes from 'src/Interface/ButtonTypes';
import { StyledButton, StyledChildrenContainer } from './Button.style';

type ButtonSizes = 'sm' | 'md' | 'lg';
type ButtonActions = 'primary' | 'secondary';

type ButtonProps = {
  handleClick?: () => void;
  text: string;
  size?: ButtonSizes;
  disabled?: boolean;
  type?: ButtonTypes;
  radius?: string;
  actions?: ButtonActions;
  children?: React.ReactNode;
  landingPageButton?: boolean;
  addButton?: boolean;
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
  landingPageButton = false,
  addButton = false,
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
      landingPageButton={landingPageButton}
      addButton={addButton}
    >
      <StyledChildrenContainer>
        {children}
        {text}
      </StyledChildrenContainer>
    </StyledButton>
  );
};

export default Button;
