import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';
import getButtonSize from '@Commons/Button/ButtonSizeConstant';
import ComponentText from '@Constants/ComponentText';

type StyledLinkProps = {
  size: string;
  landingPageButton?: boolean;
  addButton?: boolean;
  saveFertilizerButton?: boolean;
  calcAddFertButton?: boolean;
  returnToCalc?: boolean;
  finishButton?: boolean;
};

const StyledLinkContainer = styled.div<StyledLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 9.5px 0 9.5px 0;
  max-height: ${(props) => (props.landingPageButton ? '40px' : '31px')};
  max-width: ${(props) =>
    getButtonSize(
      props.size,
      ComponentText.ISMOBILE,
      props.landingPageButton,
      props.addButton,
      props.saveFertilizerButton,
      props.calcAddFertButton,
      props.returnToCalc,
    )};
  background-color: ${tokens.surfaceColorPrimaryButtonDefault};
  color: ${tokens.typographyColorPrimaryInvert};
  border-radius: 8px;
  border: ${`1px solid ${tokens.surfaceColorBorderMedium}`};
  box-sizing: border-box;
  a {
    font: ${tokens.typographyRegularSmallBody};
  }
  &:hover {
    background-color: ${tokens.surfaceColorPrimaryButtonHover};
  }
  @media (min-width: ${screenSizes.desktop}) {
    height: 42px;
    padding: ${(props) => (props.finishButton ? '20px 41px' : '21px 0')};
    max-width: ${(props) =>
      getButtonSize(
        props.size,
        ComponentText.ISDESKTOP,
        props.landingPageButton,
        props.addButton,
        props.saveFertilizerButton,
        props.calcAddFertButton,
        props.returnToCalc,
      )};
    width: 100%;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    padding: inherit;
    text-decoration: none;
    height: 100%;
    width: 100%;
    text-align: center;
    font: ${tokens.typographyRegularLargeBody};
    width: 100%;
  }
`;

export default StyledLinkContainer;
