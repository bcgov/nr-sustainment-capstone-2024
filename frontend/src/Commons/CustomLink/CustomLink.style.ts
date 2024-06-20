import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

type StyledLinkProps = {
  size: string;
};

const StyledLinkContainer = styled.div<StyledLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.size === 'sm' ? '27px' : props.size === 'md' ? '25px' : '40px')};
  width: ${(props) => (props.size === 'sm' ? '52px' : props.size === 'md' ? '200px' : '300px')};
  background-color: ${tokens.surfaceColorPrimaryButtonDefault};
  color: ${tokens.typographyColorPrimaryInvert};
  border-radius: 8px;
  border: ${`1px solid ${tokens.surfaceColorBorderMedium}`};
  font-family: ${tokens.typographyFontFamiliesBcSans};
  font-weight: ${tokens.typographyFontWeightsBold};

  @media (min-width: ${screenSizes.desktop}) {
    max-height: ${(props) =>
      props.size === 'sm' ? '27px' : props.size === 'md' ? '25px' : '40px'};
    max-width: ${(props) =>
      props.size === 'sm' ? '52px' : props.size === 'md' ? '200px' : '300px'};
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    text-decoration: none;
    height: 100%;
    width: 100%;
    text-align: center;
  }
`;

export default StyledLinkContainer;
