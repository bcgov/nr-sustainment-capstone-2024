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
  width: ${(props) => props.width};
  h3 {
    font: ${tokens.typographyBoldSmallBody};
    text-align: center;
  }
  @media (min-width: ${screenSizes.desktop}) {
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

const DesktopView = styled.div`
  display: none;

  @media (min-width: ${screenSizes.desktop}) {
    display: flex;
    flex-direction: column;
  }
`;

const MobileView = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${screenSizes.desktop}) {
    display: none;
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
  DesktopView,
  MobileView,
};
