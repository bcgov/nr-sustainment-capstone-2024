import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';
import * as tokens from '@bcgov/design-tokens/js';

const StyledH3Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 70%;

  .blankSpace {
    display: none;
  }
  @media (min-width: ${screenSizes.desktop}) {
    .blankSpace {
      display: flex;
    }
  }
`;

const StyledH3Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 25px;
  width: 100%;

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

const CalcList = styled.div`
  flex-direction: column;

  h4 {
    font: ${tokens.typographyBoldSmallBody};
    margin: 0.8rem 0.8rem;
  }

  p {
    font: ${tokens.typographyRegularSmallBody};
    margin: 0 0 0 0;
    padding: 0.8rem 0.8rem 0.8rem 0.8rem;
  }

  @media (min-width: ${screenSizes.desktop}) {
    display: flex;
    flex-direction: row;
  }
`;

const StyledAgronomic = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
    margin: 28px auto 48px auto;

  @media (min-width: ${screenSizes.desktop}) {
    width: 90%;

    h3 {
      /* transform: translateX(135px); */
    }
`;

const StyledRemoval = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 28px auto 48px auto;


  @media (min-width: ${screenSizes.desktop}) {
    width: 60%;
    .cropRemovalCol1 {
      display: none;
    }

    h3 {
      transform: translateX(-50px);
    }
    td {
      text-align: center;
    }
`;

const StyledTable = styled.table`
  width: 100%;

  thead,
  tbody,
  tfoot {
    text-align: center;
  }

  tbody tr:nth-of-type(odd) {
    background-color: #f2f2f2;
  }

  td {
    white-space: nowrap;
    padding: 0;
    vertical-align: center;
  }

  .col1 {
    display: flex;
    justify-content: flex-start;
  }

  @media (min-width: ${screenSizes.desktop}) {
    width: 90%;
    td {
      white-space: nowrap;
    }
    .cropRemovalCol1 {
      display: none;
    }
  }
`;

export { StyledH3Container, StyledH3Item, CalcList, StyledRemoval, StyledAgronomic, StyledTable };
