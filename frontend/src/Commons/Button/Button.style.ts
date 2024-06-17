import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

type StyledButtonProps = {
  size: string;
  type: string;
  disabled: boolean;
};

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: ${(props) => (props.size === 'sm' ? '27px' : props.size === 'md' ? '25px' : '40px')};
  height: 100%;
  width: 100%;
  max-width: ${(props) => (props.size === 'sm' ? '52px' : props.size === 'md' ? '200px' : '300px')};
  background-color: ${(props) => (props.type === 'button' || props.type === 'submit'
    ? tokens.surfaceColorPrimaryButtonDefault
    : tokens.surfaceColorSecondaryButtonDefault)};
  color: ${(props) => (props.type === 'button' || props.type === 'submit'
    ? tokens.typographyColorPrimaryInvert
    : tokens.typographyColorPrimary)};
  border-radius: 8px;
  border: ${(props) => (props.type === 'button' || props.type === 'submit'
    ? 0
    : `1px solid ${tokens.surfaceColorBorderMedium}`)};
  padding: 20px 30px;
  font-family: ${tokens.typographyFontFamiliesBcSans};
  font-weight: ${tokens.typographyFontWeightsBold};

  &:disabled {
    cursor: not-allowed;
  }

  @media (min-width: ${screenSizes.desktop}) {
    max-height: ${(props) => (props.size === 'sm' ? '27px' : props.size === 'md' ? '25px' : '40px')};
    max-width: ${(props) => (props.size === 'sm' ? '52px' : props.size === 'md' ? '200px' : '300px')};
  }
`;

export default StyledButton;
