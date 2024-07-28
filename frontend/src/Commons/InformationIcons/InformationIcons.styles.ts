import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';
import * as tokens from '@bcgov/design-tokens/js';

type StyledIconsProps = {
  rightPositioned?: boolean;
};
const StyledBubbleAndFontAwesomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledFontAwesomeContainer = styled.div`
  display: flex;
  position: relative;
`;

const IconContainer = styled.div`
  font-size: 16px;
  color: ${tokens.iconsColorInfo};
  cursor: pointer;
  background-color: transparent;
  @media (min-width: ${screenSizes.desktop}) {
    font-size: 24px;
  }
`;

const StyledBubble = styled.div<StyledIconsProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: ${(props) => (props.rightPositioned ? '85%' : '30%')};
  transform: ${(props) => (props.rightPositioned ? 'translateX(-85%)' : 'translateX(-30%)')};
  bottom: 100%;
  padding: 10px 20px 0 0;
  border: 1px solid ${tokens.supportBorderColorInfo};
  border-radius: 4px;
  background-color: ${tokens.surfaceColorBackgroundLightBlue};
  width: 230px;
  li {
    font: ${tokens.typographyRegularLabel};
    color: ${tokens.typographyColorPrimary};
  }
  p {
    padding: 10px 0 0 20px;
    font: ${tokens.typographyRegularLabel};
    color: ${tokens.typographyColorPrimary};
  }

  @media (min-width: ${screenSizes.desktop}) {
    left: 30%;
    transform: translateX(-30%);
    width: 300px;
  }
`;

const StyledBubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 120%;
  left: 30%;
  transform: translateX(-30%);
  z-index: 1;
  padding-bottom: 8px;
`;

const StyledCaretDown = styled.div`
  position: absolute;
  bottom: -1px;
  left: 30%;
  transform: translateX(-30%);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid ${tokens.supportBorderColorInfo};
  font-size: 24px;
  color: ${tokens.iconsColorInfo};
`;

export {
  StyledFontAwesomeContainer,
  StyledBubbleAndFontAwesomeContainer,
  StyledBubbleContainer,
  StyledBubble,
  StyledCaretDown,
  IconContainer,
};
