import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

type ToggleProps = {
  enabled: boolean;
};

const StyledToggleButton = styled.button<ToggleProps>`
  position: relative;
  background-color: ${(props) =>
    props.enabled ? tokens.iconsColorSuccess : tokens.iconsColorDisabled};
  border: 2px solid ${tokens.supportBorderColorInfo};
  border-radius: 99px;
  width: 50px;
  height: 25px;
  transition:
    background-color 0.3s ease,
    border-color 0.4s ease;
  cursor: pointer;

  @media (min-width: ${screenSizes.desktop}) {
    width: 64px;
    height: 34px;
  }
`;

const Thumb = styled.div<ToggleProps>`
  height: 15px;
  width: 15px;
  background-color: #fff;
  border-radius: 99px;
  transform: translateX(0);
  transition: left 0.4s ease;
  position: absolute;
  left: ${(props) => (props.enabled ? '28px' : '5px')};
  top: 49%;
  transform: translateY(-50%);

  @media (min-width: ${screenSizes.desktop}) {
    width: 24px;
    height: 24px;
    left: ${(props) => (props.enabled ? '33px' : '5px')};
  }
`;

export { StyledToggleButton, Thumb };
