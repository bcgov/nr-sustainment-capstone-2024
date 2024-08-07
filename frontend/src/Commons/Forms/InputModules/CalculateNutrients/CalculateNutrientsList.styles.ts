import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';
import * as tokens from '@bcgov/design-tokens/js';

type CalculationListProps = {
  width?: string;
};

const StyledH3HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledH3HeaderItem = styled.div<CalculationListProps>`
  display: flex;
  align-items: center;
  min-height: 25px;
  width: 100%;
  h3 {
    font: ${tokens.typographyBoldSmallBody};
    text-align: center;
  }
  span {
    margin: -10px 0 0 10px;
    position: relative;
  }
  @media (min-width: ${screenSizes.desktop}) {
    min-height: 40px;
    h3 {
      font: ${tokens.typographyBoldLargeBody};
    }
  }
`;

const StyledH4HeaderContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledH4HeaderItem = styled.div<CalculationListProps>`
  width: ${(props) => props.width};
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    font: ${tokens.typographyBoldSmallBody};
  }
  @media (min-width: ${screenSizes.desktop}) {
    h4 {
      font: ${tokens.typographyBoldLargeBody};
    }
  }
`;
const StyledH4HeaderList = styled.div`
  display: flex;
  width: 100%;
  justiy-content: space-between;
  gap: 50px;

  @media (min-width: ${screenSizes.desktop}) {
    justify-content: space-around;
  }
`;

const StyledPContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledPItem = styled.div<CalculationListProps>`
  width: ${(props) => props.width};
  p {
    font: ${tokens.typographyRegularSmallBody};
  }
  @media (min-width: ${screenSizes.desktop}) {
    font: ${tokens.typographyRegularLargeBody};
  }
`;

const StyledPItemList = styled.div`
  display: flex;
  width: 100%;
  justiy-content: space-between;
  gap: 70px;

  @media (min-width: ${screenSizes.desktop}) {
    justify-content: space-around;
  }
`;

const CalcList = styled.div`
  flex-direction: column;
  @media (min-width: ${screenSizes.desktop}) {
    display: flex;
    flex-direction: row;
  }
`;

const StyledAgronomic = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justiy-content: center;
  align-items: center;
`;

const StyledRemoval = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justiy-content: center;
  align-items: center;
`;

// Pretty good tutorial on how to use grids
// https://www.youtube.com/watch?v=9zBsdzdE4sM
const StyledGrid = styled.div`
  display: grid;
  justify-content: space-around;
  grid-template-columns: auto auto auto;
  align-content: center;
  /* grid-auto-rows: minmax(38px, auto); */
  width: 100%;

  // Make fertilizers and StyledDivider a row
  .fullRow {
    grid-column-start: 1;
    grid-column-end: 5;
  }

  @media (min-width: ${screenSizes.desktop}) {
    .cropRemoval {
    }
    .cropRemovalCol1 {
      /* This is not working, but is the best solution I can come up */
      /* today... I'll try again tomorrow :) */
      /* display: none; */
    }
  }
`;

export {
  StyledH3HeaderContainer,
  StyledH3HeaderItem,
  StyledH4HeaderContainer,
  StyledH4HeaderItem,
  StyledH4HeaderList,
  StyledPItem,
  StyledPItemList,
  StyledPContainer,
  CalcList,
  StyledGrid,
  StyledAgronomic,
  StyledRemoval,
};
