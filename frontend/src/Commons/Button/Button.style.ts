import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';
import ComponentText from '@Constants/ComponentText';
import getButtonSize from './ButtonSizeConstant';

type StyledButtonProps = {
  size: string;
  disabled: boolean;
  radius: string;
  actions: string;
};

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 42px;
  height: 100%;
  width: 100%;
  max-width: ${(props) => getButtonSize(props.size, ComponentText.ISMOBILE)};
  background-color: ${(props) => (props.actions === 'primary'
    ? tokens.surfaceColorPrimaryButtonDefault
    : tokens.surfaceColorSecondaryButtonDefault)};
  color: ${(props) => (props.actions === 'primary'
    ? tokens.typographyColorPrimaryInvert
    : tokens.typographyColorSecondary)};
  border-radius: ${(props) => props.radius};
  border: ${(props) => (props.actions === 'primary' ? 0 : `1px solid ${tokens.surfaceColorBorderMedium}`)};
  padding: 20px 30px;
  font: ${tokens.typographyBoldLabel};

  &:disabled {
    cursor: not-allowed;
  }

  @media (min-width: ${screenSizes.desktop}) {
    max-width: ${(props) => getButtonSize(props.size, ComponentText.ISDESKTOP)};
  }
`;

const StyledChildrenContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export { StyledButton, StyledChildrenContainer };
