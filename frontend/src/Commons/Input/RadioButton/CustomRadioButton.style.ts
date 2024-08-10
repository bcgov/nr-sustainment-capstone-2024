/**
 * @desc Styling with BC Design Tokens and Emotion for Radio Button component
 * @author @Kcaparas
 */
import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';

type StyledFieldProps = {
  width: string;
};

const StyledField = styled.div<StyledFieldProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  max-width: 57px;
  align-items: flex-start;
`;

const StyledRadio = styled.div`
  display: flex;
  flex-direction: row;
  gap: 11px;
  padding-right: 10px;

  input[type='radio'] {
    appearance: none;
    width: 24px;
    height: 24px;
    border: 2px solid ${tokens.typographyColorSecondary};
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    transition:
      background-color 0.2s,
      border-color 0.2s;

    &:checked {
      border-color: black;
      background-color: white;

      &::after {
        content: '';
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: black;
        // margin: 4px;
      }
    }
  }
  label {
    font: ${tokens.typographyRegularSmallBody};
    color: ${tokens.typographyColorSecondary};
  }
`;

export { StyledField, StyledRadio };
