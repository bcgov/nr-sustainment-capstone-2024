import StyledFarmInfo from './Styles/FarmInformation.style';

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
      <select id="farmRegion" name="farmRegion">
        <option value="Vancouver Island">Vancouver Island </option>
      </select>
    </label>
  </StyledFarmInfo>
);

export default FarmInfoForm;
