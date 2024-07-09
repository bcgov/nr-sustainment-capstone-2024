import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';

const StyledAddCancelButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
    gap: 20px;
    position: absolute;
    right: 17%;
  }
`;

export default StyledAddCancelButtonContainer;
