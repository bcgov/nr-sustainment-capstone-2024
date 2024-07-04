/**
 * @desc Styling with BC Design Tokens and Emotion for Radio Button component
 * @author @Kcaparas
 */
import styled from '@emotion/styled';

type StyledFieldProps = {
  width: string;
};

const StyledField = styled.div<StyledFieldProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  align-items: flex-start;
`;

const StyledRadio = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  label {
    margin-top: -2px;
  }
`;

export { StyledField, StyledRadio };
