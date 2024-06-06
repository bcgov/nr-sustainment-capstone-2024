import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '../../Constants/ScreenSize';

type ButtonProps = {
  size: string;
  disabled: boolean;
};

const StyledButton = styled.button<ButtonProps>`
  max-height: ${(props) => (props.size === 'sm' ? '10px' : props.size === 'md' ? '25px' : '40x')}; /* 40px; */
  height: 100%;
  width: 100%;
  max-width: ${(props) => (props.size === 'sm' ? '125px' : props.size === 'md' ? '200px' : '300px')}; /* 327px; */
  background-color: ${tokens.surfaceColorPrimaryButtonDefault};
  color: ${tokens.typographyColorPrimaryInvert};
  border-radius: 8px;
  border: 0;
  padding: 10px;
  font-family: ${tokens.typographyFontFamiliesBcSans};
  font-weight: ${tokens.typographyFontWeightsBold};

  &:disabled {
    cursor: not-allowed;
  }

  @media (min-width: ${screenSizes.desktop}) {
    max-height: 59px;
    max-width: 483px;
  }
`;

export default StyledButton;
