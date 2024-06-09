/**
 * @summary Farm Information Input Module
 * @description A module with input fields to be used in a Form Module
 * @author @GDamaso
 */
import Button from '@Commons/Button/Button.tsx';
import InputModuleInterface from 'src/Interface/InputModuleinterface';
import { faTractor } from '@fortawesome/free-solid-svg-icons';
import InputModuleProps from 'src/Interface/InputModuleProps';
import React from 'react';
import FarmDetailsInterface from 'src/Interface/FarmDetailsInterface';
import { StyledFarmInfo, StyledButtonContainer } from './FarmInformation.style';

// const mockFarmDetails: FarmDetailsInterface = {
//   Year: '2020',
//   FarmName: 'Hello',
//   FarmRegion: 'World!',
//   HasBerries: true,
// };

const FarmInfoComponent: React.FC<InputModuleProps> = ({ farmDetails, updateFarmDetails }) => {
  const farmInfoDetails = farmDetails;

  const validate = (farmInfo: FarmDetailsInterface) => {
    const { FarmName, Year } = farmInfo;
    const checkFarmName = FarmName === 'hey';
    const checkFarmYear = Year === '2024';

    if (checkFarmName && checkFarmYear) {
      console.log('Valid!');
      return true;
    }
    return false;
  };

  const clickHandler = () => {
    if (validate(farmInfoDetails)) {
      updateFarmDetails(farmInfoDetails);
      console.log('farmInfoDetails: ', farmInfoDetails);
      console.log('farmDetails: ', farmDetails);
    }
  };

  return (
    <StyledFarmInfo>
      <label htmlFor="farmName">
        Name
        <br />
        <input
          type="text"
          name="farmName"
          onChange={(e) => {
            farmInfoDetails.FarmName = e.target.value;
          }}
          minLength={1}
          maxLength={24}
        />
      </label>
      <label htmlFor="farmYear">
        Year
        <br />
        <input
          type="number"
          name="farmYear"
          defaultValue="2024"
          min="1950"
          max="2099"
          onChange={(e) => {
            farmInfoDetails.Year = e.target.value;
          }}
        />
      </label>
      <label htmlFor="farmRegion">
        Region
        <br />
        {/* <p> Region selection will customize recommendations to your local climate. </p> */}
        <StyledButtonContainer>
          <select id="farmRegion" name="farmRegion">
            <option value="Vancouver Island">Vancouver Island </option>
          </select>
          <Button text="Next" size="sm" disabled={false} handleClick={clickHandler} />
        </StyledButtonContainer>
      </label>
    </StyledFarmInfo>
  );
};

const FarmInfoForm: InputModuleInterface = {
  InputModuleComponent: FarmInfoComponent,
  id: 'FarmInformation',
  name: 'Farm Information',
  faIcon: faTractor,
  enable: true,
};

export default FarmInfoForm;
