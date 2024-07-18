import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';

const StyledFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 20px;
`;
const StyledFieldSelect = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledGroupFormView = styled.div`
  display: flex;
  gap: 50px;
`;
const StyledLeftView = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const StyledSmallFormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
  }
`;

export {
  StyledFieldContainer,
  StyledFieldSelect,
  StyledGroupFormView,
  StyledLeftView,
  StyledSmallFormGroup,
};
