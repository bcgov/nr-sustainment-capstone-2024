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

  input {
    width: 24px;
  }

  label {
    font: ${tokens.typographyRegularSmallBody};
    color: ${tokens.typographyColorSecondary};
  }
`;

export { StyledField, StyledRadio };
