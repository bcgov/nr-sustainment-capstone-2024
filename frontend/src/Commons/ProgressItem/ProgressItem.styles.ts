import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import InputModuleInterface from 'src/Interface/InputModuleinterface';
import screenSizes from '@Constants/ScreenSize';
import { ACTIVE, COMPLETED, WARNING } from '@Constants/ModuleStatus';

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

function getStatusStyle(status: string): Record<string, string> {
  switch (status) {
    case ACTIVE:
      return {
        backgroundColor: tokens.supportBorderColorWarning,
        color: tokens.iconsColorInfo,
      };
    case COMPLETED:
      return {
        backgroundColor: tokens.iconsColorSuccess,
        color: tokens.iconsColorPrimaryInvert,
      };
    case WARNING:
      return {
        backgroundColor: tokens.iconsColorDanger,
        color: tokens.iconsColorPrimaryInvert,
      };
    default:
      return {
        backgroundColor: tokens.iconsColorPrimaryInvert,
        color: tokens.iconsColorPrimary,
      };
  }
}

const StyledItem = styled.div<ProgressProps>`
  border-radius: 50%;
  background-color: ${({ status }) => getStatusStyle(status).backgroundColor};
  color: ${({ status }) => getStatusStyle(status).color};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 46px;
  height: 46px;
  border: ${tokens.layoutBorderWidthLarge} solid ${tokens.surfaceColorBorderDark};
  font-size: 20px; /* tokens not working on this one */
  @media (min-width: ${screenSizes.desktop}) {
    min-width: 93px;
    min-height: 93px;
    padding: 20px;
    font-size: 44px;
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
