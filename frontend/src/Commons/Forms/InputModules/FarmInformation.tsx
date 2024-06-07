import { StyledFarmInfo, StyledButtonContainer } from './Styles/FarmInformation.style';
import Button from '../../Button';

const FarmInfoForm = () => (
  <StyledFarmInfo>
    <label htmlFor="farmName">
      Name
      <br />
      <input type="text" name="farmName" />
    </label>
    <label htmlFor="farmYear">
      Year
      <br />
      <input type="text" name="farmYear" />
    </label>
    <label htmlFor="farmRegion">
      Region
      <br />
      <p> Region selection will customize recommendations to your local climate. </p>
      <StyledButtonContainer>
        <select id="farmRegion" name="farmRegion">
          <option value="Vancouver Island">Vancouver Island </option>
        </select>
        <Button text="Next" size='sm' disabled={false} path="/" />
      </StyledButtonContainer>
    </label>
  </StyledFarmInfo>
);

export default FarmInfoForm;
