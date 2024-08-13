import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';
import * as tokens from '@bcgov/design-tokens/js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface TableProps {
  twoCrops: boolean;
}

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

    td {
      text-align: center;
    }
`;

const StyledTable = styled.table<TableProps>`
  width: 100%;

  thead,
  tbody,
  tfoot {
    text-align: center;
  }

  tbody tr:nth-of-type(${(props) => (props.twoCrops ? 'even' : 'odd')}) {
    background-color: ${tokens.themeGray30};
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

const StyledPBalance = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  p {
    font: ${tokens.typographyRegularSmallBody};
    padding: 0;
  }

  @media (min-width: ${screenSizes.desktop}) {
    gap: 24px;
    p {
      font: ${tokens.typographyRegularBody};
    }
  }
`;

const FontAwesomeContainer = styled.div`
  font-size: 18px;
  margin-left: -28px;

  @media (min-width: ${screenSizes.desktop}) {
    margin-left: -40px;
  }
`;
export {
  StyledH3Container,
  StyledH3Item,
  CalcList,
  StyledRemoval,
  StyledAgronomic,
  StyledTable,
  StyledPBalance,
  FontAwesomeContainer,
};
