import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import InputModuleInterface from 'src/Interface/InputModuleinterface';
import screenSizes from '@Constants/ScreenSize';

type ProgressProps = {
  InputModule: InputModuleInterface;
  active: boolean;
  status: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 15%;
`;
const StyledItem = styled.div<ProgressProps>`
  border-radius: 50%;
  background-color: ${(props) => (props.status === 'active'
    ? tokens.supportBorderColorWarning
    : props.status === 'completed'
      ? tokens.iconsColorSuccess
      : props.status === 'warning'
        ? tokens.iconsColorDanger
        : tokens.iconsColorPrimaryInvert)};
  color: ${(props) => (props.status === 'active'
    ? tokens.iconsColorInfo
    : props.status === 'completed' || props.status === 'warning'
      ? tokens.iconsColorPrimaryInvert
      : tokens.iconsColorPrimary)};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 46px;
  height: 46px;
  border: ${tokens.layoutBorderWidthLarge} solid ${tokens.surfaceColorBorderDark};
  font-size: 18px; /* tokens not working on this one */
  @media (min-width: ${screenSizes.desktop}) {
    min-width: 93px;
    min-height: 93px;
    padding: 20px;
    font-size: 30px;
  }
`;
const StyledItemTextShort = styled.p`
  font: ${tokens.typographyRegularLabel};
  text-align: center;
  display: block;
  @media (min-width: ${screenSizes.desktop}) {
    font: ${tokens.typographyRegularH5};
    font-size: 20px;
    display: none;
  }
`;

const StyledItemTextLong = styled.p`
  font: ${tokens.typographyRegularLabel};
  text-align: center;
  display: none;
  @media (min-width: ${screenSizes.desktop}) {
    font: ${tokens.typographyRegularH5};
    font-size: 20px;
    display: block;
  }
`;
export { Container, StyledItem, StyledItemTextShort, StyledItemTextLong };
