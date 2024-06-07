import StyledFarmInfo from './Styles/FarmInformation.style';

const FarmInfoForm = () => (
  <StyledFarmInfo>
    <label>
      Name
      <br />
      <input type="text" name="farmName" />
    </label>
    <label>
      Year
      <br />
      <input type="text" name="farmYear" />
    </label>
    <label>
      Region
      <br />
      <select id="farmRegion" name="farmRegion">
        <option value="Vancouver Island">Vancouver Island </option>
      </select>
    </label>
  </StyledFarmInfo>
);

export default FarmInfoForm;
