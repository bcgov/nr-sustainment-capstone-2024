import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';
import getButtonSize from '@Commons/Button/ButtonSizeConstant';

type StyledLinkProps = {
  size: string;
};

const StyledLinkContainer = styled.div<StyledLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-height: 42px;
  max-width: ${(props) => getButtonSize(props.size, false)};
  background-color: ${tokens.surfaceColorPrimaryButtonDefault};
  color: ${tokens.typographyColorPrimaryInvert};
  border-radius: 8px;
  border: ${`1px solid ${tokens.surfaceColorBorderMedium}`};
  font: ${tokens.typographyBoldLabel};
  @media (min-width: ${screenSizes.desktop}) {
    height: 100%;
    max-width: ${(props) => getButtonSize(props.size, true)};
    width: 100%;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    padding: 20px 30px;
    text-decoration: none;
    height: 100%;
    width: 100%;
    text-align: center;
  }
`;

export default StyledLinkContainer;
