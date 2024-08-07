import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

const StyledFieldInfoList = styled.div<{ isFirstChild?: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  ${({ isFirstChild }) =>
    !isFirstChild && `border-top: 2px solid ${tokens.typographyColorPlaceholder};`}
`;

const StyledListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 4px;
  align-items: flex-start;

  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
    gap: 110px;
  }
`;

export { StyledListContainer, StyledFieldInfoList };
