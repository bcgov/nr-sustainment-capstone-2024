/**
 * @summary Farm Information Input Module
 * @description A module with input fields to be used in a Form Module
 * @author @GDamaso
 */
import Button from '@Commons/Button/Button.tsx';
import InputModuleInterface from 'src/Interface/InputModuleinterface';
import { faCow } from '@fortawesome/free-solid-svg-icons';
import { StyledFarmInfo, StyledButtonContainer } from './ManureAndCompost.style';

const FarmInfoComponent = () => (
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
      {/* <p> Region selection will customize recommendations to your local climate. </p> */}
      <StyledButtonContainer>
        <select id="farmRegion" name="farmRegion">
          <option value="Vancouver Island">Vancouver Island </option>
        </select>
        <Button text="Next" size="sm" disabled={false} path="/" />
      </StyledButtonContainer>
    </label>
  </StyledFarmInfo>
);

const ManureAndCompost: InputModuleInterface = {
  InputModuleComponent: FarmInfoComponent,
  id: 'ManureAndCompost',
  name: 'Manure and Compost',
  faIcon: faCow,
  enable: false,
};

export default ManureAndCompost;
