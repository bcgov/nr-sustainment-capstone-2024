import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';
import { typographyRegularLabel } from '@bcgov/design-tokens/js';

const StyledButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100vw;
  justify-content: flex-end;
  @media (min-width: ${screenSizes.desktop}) {
    justify-content: flex-start;
    width: 100%;
  }
`;
const StyledButtonContainer = styled.div`
  margin-top: 20px;
  width: 50%;
  font: ${typographyRegularLabel};
`;

const StyledAddCancelButtonContainer = styled.div`
  display: flex;
  position: absolute;
  right: 7%;
  gap: 10px;

  @media (min-width: ${screenSizes.desktop}) {
    position: absolute;
    right: 17%;
  }
`;
const StyledNewFieldButtonContainer = styled.div`
  position: relative;
  left: 0;
  width: 100%;
`;

export {
  StyledButtonGroupContainer,
  StyledButtonContainer,
  StyledAddCancelButtonContainer,
  StyledNewFieldButtonContainer,
};
