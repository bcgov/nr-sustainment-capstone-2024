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

const StyledListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;

  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
  }
`;

const DesktopFertilizerGroup = styled.div`
  display: none;

  @media (min-width: ${screenSizes.desktop}) {
    display: flex;
    width: 75%;
    margin-left: 77px;
  }
`;

const MobileFertilizerGroup = styled.div`
  display: flex;
  width: 100%;

  @media (min-width: ${screenSizes.desktop}) {
    display: none;
  }
`;

const FertilizerTypeAndFontAwesomeContainer = styled.div`
  display: flex;
  width: 100%;
`;

export {
  StyledCustomNumberField,
  StyledListContainer,
  DesktopFertilizerGroup,
  MobileFertilizerGroup,
  FertilizerTypeAndFontAwesomeContainer,
};
