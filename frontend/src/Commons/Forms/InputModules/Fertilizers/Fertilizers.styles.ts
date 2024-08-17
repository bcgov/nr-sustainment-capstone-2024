/**
 * @description    Styling for the Fertilizers Component.
 * @author         @Kcaparas
 */
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

/**
 * @description   Container for the list. Has same name as the other list container.
 *                Can be improved to be DRY. This is created due to specific changes.
 * @prop  {boolean} isFirstChild - a prop to be passed to indicate if it's the first item on the list.
 */
const StyledListContainer = styled.div<{ isFirstChild: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  ${({ isFirstChild }) => isFirstChild && `border-top: 1px solid #d8d8d8; padding: 24px 0;`}

  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
  }
`;

/**
 * @description   Fertilizer is aligned with FertilizerType on desktop
 *                Fertilizer is below the FertilizerType on mobile
 */
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
