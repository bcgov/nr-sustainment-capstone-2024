/**
 * @desc Styling with BC Design Tokens and Emotion for TextArea component
 * @author @KCaparas
 */
import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

type StyledFieldProps = {
  mobileWidth: string;
  desktopWidth: string;
};

const StyledField = styled.div<StyledFieldProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.mobileWidth};
  margin-top: 5px;

  label {
    font: ${tokens.typographyBoldSmallBody};
  }
  textarea {
    border: solid 1px ${tokens.surfaceColorBorderDefault};
    border-radius: 3px;
    resize: none;
    height: 76px;

    @media (min-width: ${screenSizes.desktop}) {
      label {
        font: ${tokens.typographyBoldLargeBody};
      }
      height: 56px;
    }
  }

  @media (min-width: ${screenSizes.desktop}) {
    width: ${(props) => props.desktopWidth};
  }
`;

const StyledLabel = styled.div`
  label {
    display: flex;
    align-items: flex-end;
    font: ${tokens.typographyBoldSmallBody};
  }
  @media (min-width: ${screenSizes.desktop}) {
    label {
      font: ${tokens.typographyBoldLargeBody};
    }
  }
`;

export { StyledField, StyledLabel };
