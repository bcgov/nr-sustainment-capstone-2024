/**
 * @desc Styling with BC Design Tokens and Emotion for
 *       Farm Information Input Module
 * @author @GDamaso
 */
import styled from '@emotion/styled';

const StyledFarmInfo = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  height: 100%;
  p {
    margin-bottom: 0;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 0;
  padding-top: 0;

  Select {
    height: 30px;
    width: 80%;
  }
`;
export { StyledFarmInfo, StyledButtonContainer };
