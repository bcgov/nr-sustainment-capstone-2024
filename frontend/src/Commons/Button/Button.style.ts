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
  landingPageButton?: boolean;
  addButton?: boolean;
};

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: ${(props) => (props.landingPageButton ? '40px' : '31px')};
  height: 100%;
  width: 100%;
  max-width: ${(props) =>
    getButtonSize(props.size, ComponentText.ISMOBILE, props.landingPageButton, props.addButton)};
  background-color: ${(props) =>
    props.actions === 'primary'
      ? tokens.surfaceColorPrimaryButtonDefault
      : tokens.surfaceColorSecondaryButtonDefault};
  color: ${(props) =>
    props.actions === 'primary'
      ? tokens.typographyColorPrimaryInvert
      : tokens.typographyColorSecondary};
  border-radius: ${(props) => props.radius};
  border: ${(props) =>
    props.actions === 'primary' ? 0 : `1px solid ${tokens.surfaceColorBorderMedium}`};
  padding: ${(props) => (props.landingPageButton ? '20px' : '0')};
  font: ${tokens.typographyRegularSmallBody};

  &:disabled {
    cursor: not-allowed;
  }
  &:hover {
    background-color: ${(props) =>
      props.actions === 'primary'
        ? tokens.surfaceColorPrimaryButtonHover
        : tokens.surfaceColorSecondaryButtonHover};
  }

  @media (min-width: ${screenSizes.desktop}) {
    padding: 20px 41px;
    max-width: ${(props) =>
      getButtonSize(props.size, ComponentText.ISDESKTOP, props.landingPageButton, props.addButton)};
    max-height: ${(props) => (props.landingPageButton ? '59px' : '31px')};
  }
`;

const StyledChildrenContainer = styled.div`
  display: flex;
  align-items: center;
  font: ${tokens.typographyRegularLargeBody};
  gap: 5px;
`;

export { StyledButton, StyledChildrenContainer };
