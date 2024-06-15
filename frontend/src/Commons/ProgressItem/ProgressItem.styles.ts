import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import InputModuleInterface from 'src/Interface/InputModuleinterface';
import screenSizes from '@Constants/ScreenSize';

type ProgressProps = {
  InputModule: InputModuleInterface;
  active: boolean;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 15%; /* deploy */
`;
const StyledItem = styled.div<ProgressProps>`
  border-radius: 50%;
  background-color: ${(props) => (props.active === true ? tokens.supportBorderColorWarning : '#FFF')};
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
