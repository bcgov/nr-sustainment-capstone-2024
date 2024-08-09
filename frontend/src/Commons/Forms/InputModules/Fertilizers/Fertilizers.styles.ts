import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';

const StyledCustomNumberField = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  gap: 24px;
  justify-content: space-between;
  padding: 0 26px 0 24px;

  @media (min-width: ${screenSizes.desktop}) {
    padding: 0;
    justify-content: flex-start;
    width: 75%;
    gap: 24px;
  }
`;

export default StyledCustomNumberField;
