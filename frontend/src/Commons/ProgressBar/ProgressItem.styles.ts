import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import screenSizes from '@Constants/ScreenSize';

type ProgressProps = {
  favIcon?: IconDefinition;
  active?: boolean;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
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

  @media (min-width: ${screenSizes.desktop}) {
    min-width: 93px;
    min-height: 93px;
    padding: 20px;
  }
`;

const StyledIcon = styled.div`
  font-size: 18px; /* tokens not working on this one */

  @media (min-width: ${screenSizes.desktop}) {
    font-size: 30px;
  }
`;
const StyledItemText = styled.p`
  font: ${tokens.typographyRegularLabel};
  text-align: center;
  
  @media (min-width: ${screenSizes.desktop}) {
    font: ${tokens.typographyRegularH5};
    font-size: 20px;
  }
`;
export { Container, StyledItem, StyledIcon, StyledItemText };
