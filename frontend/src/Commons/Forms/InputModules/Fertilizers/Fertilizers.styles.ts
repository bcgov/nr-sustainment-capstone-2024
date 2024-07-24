import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';

const StyledCustomNumberField = styled.div`
  display: flex;
  margin: auto;
  width: 95%;
  gap: 20px;

  @media (min-width: ${screenSizes.desktop}) {
    width: 75%;
    gap: 10px;
  }
`;

export default StyledCustomNumberField;
