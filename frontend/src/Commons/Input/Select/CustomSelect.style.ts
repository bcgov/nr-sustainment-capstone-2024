/**
 * @desc Styling with BC Design Tokens and Emotion for Reusable Select Dropdown component
 * @author @GDamaso
 */
import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

type StyledSelectProps = {
  mobileWidth?: string;
  desktopWidth?: string;
  formCalc?: boolean;
};

const StyledSelect = styled.div<StyledSelectProps>`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.div`
  max-width: 320px;

  label {
    display: inline;
    font: ${tokens.typographyBoldSmallBody};
  }

  .label-content {
    display: inline;
    word-break: break-word;
  }

  .info-icon {
    display: inline-flex;
    align-items: center;
    margin-left: 6px;
  }

  @media (min-width: ${screenSizes.desktop}) {
    max-width: 750px;
    width: 100%;
    label {
      font: ${tokens.typographyBoldLargeBody};
    }
  }
`;

const StyledField = styled.div<StyledSelectProps>`
  width: ${(props) => props.mobileWidth};

  select {
    width: 100%;
    border: solid 1px ${tokens.themeGray40};
    border-radius: 3px;
    height: 21px;
    background-color: ${tokens.themeGrayWhite};
    font: ${tokens.typographyRegularLabel};
  }
  @media (min-width: 768px) {
    width: ${(props) => props.desktopWidth};
    select {
      font: ${tokens.typographyRegularSmallBody};
      width: 100%;
    }
  }
`;

export { StyledSelect, StyledLabel, StyledField };
