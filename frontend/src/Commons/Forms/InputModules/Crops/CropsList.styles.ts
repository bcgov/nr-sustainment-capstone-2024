import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';

const StyledFieldInfoList = styled.div<{ isFirstChild?: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  ${({ isFirstChild }) =>
    !isFirstChild &&
    `border-top: 1px solid #d8d8d8; 
     margin-top: 24px;
    `}
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
