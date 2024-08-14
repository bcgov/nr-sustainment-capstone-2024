import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';
import * as tokens from '@bcgov/design-tokens/js';

type StyledIconsProps = {
  rightPositioned?: boolean;
  toggleIcon?: boolean;
  headerDesktop?: boolean;
  toggleEnabled?: boolean;
};

const StyledBubbleAndFontAwesomeContainer = styled.div<StyledIconsProps>`
  display: ${(props) => (props.toggleEnabled ? 'flex' : 'none')};
  flex-direction: column;
  position: relative;
`;

const StyledFontAwesomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const IconContainer = styled.div<StyledIconsProps>`
  font-size: 16px;
  color: ${(props) => (props.toggleIcon ? tokens.iconsColorPrimaryInvert : tokens.iconsColorInfo)};
  cursor: pointer;
  background-color: transparent;
  @media (min-width: ${screenSizes.desktop}) {
    font-size: 24px;
  }
`;

const StyledCaretDown = styled.div<StyledIconsProps>`
  display: ${(props) => (props.headerDesktop ? 'none' : 'flex')};
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid ${tokens.supportBorderColorInfo};
  font-size: 24px;
  color: ${tokens.iconsColorInfo};
  margin-top: -5px;

  @media (min-width: ${screenSizes.desktop}) {
    border-top: ${(props) => (props.headerDesktop ? '0' : '')};
    border-bottom: ${(props) =>
      props.headerDesktop ? `15px solid ${tokens.supportBorderColorInfo}` : '0'};
  }
`;

const DesktopCaretDown = styled.div<StyledIconsProps>`
  display: ${(props) => (props.headerDesktop ? 'flex' : 'none')};
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  font-size: 24px;
  color: ${tokens.iconsColorInfo};
  margin-top: -15px;
  border-bottom: 15px solid ${tokens.iconsColorPrimaryInvert};
`;

const StyledBubble = styled.div<StyledIconsProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: ${(props) => (props.headerDesktop ? '' : '120%')};
  left: ${(props) => (props.rightPositioned ? '85%' : '30%')};
  transform: ${(props) => (props.rightPositioned ? 'translateX(-85%)' : 'translateX(-30%)')};
  padding: 10px 20px 0 0;
  border: 1px solid ${tokens.supportBorderColorInfo};
  border-radius: 4px;
  background-color: ${tokens.surfaceColorBackgroundLightBlue};
  width: 230px;

  li {
    font: ${tokens.typographyRegularLabel};
    color: ${tokens.typographyColorPrimary};
    margin: 5px 0;
    text-align: start;
  }
  p {
    padding: 10px 20px 10px 20px;
    font: ${tokens.typographyRegularLabel};
    color: ${tokens.typographyColorPrimary};
  }

  @media (min-width: ${screenSizes.desktop}) {
    bottom: ${(props) => (props.headerDesktop ? '' : '120%')};
    left: ${(props) => (props.rightPositioned ? '85%' : '30%')};
    transform: ${(props) => (props.rightPositioned ? 'translateX(-85%)' : 'translateX(-30%)')};
    width: 300px;
  }
`;

const StyledBubbleContainer = styled.div<StyledIconsProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 120%;
  left: -7px;

  @media (min-width: ${screenSizes.desktop}) {
    left: -2px;
    bottom: ${(props) => (props.headerDesktop ? '0' : '120%')};
    top: ${(props) => (props.headerDesktop ? '150%' : '')};
  }
`;

export {
  StyledFontAwesomeContainer,
  StyledBubbleAndFontAwesomeContainer,
  StyledBubbleContainer,
  StyledBubble,
  StyledCaretDown,
  IconContainer,
  DesktopCaretDown,
};
