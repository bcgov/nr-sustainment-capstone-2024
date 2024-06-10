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

const FarmInfoComponent: React.FC<InputModuleProps> = ({ farmDetails, updateFarmDetails }) => {
  const farmInfoDetails = farmDetails;

  const validate = (farmInfo: FarmDetailsInterface) => {
    const { FarmName, Year } = farmInfo;
    const nameRegexp = /^[A-Za-z \d]+$/;
    const yearRegexp = /^(19|20)\d{2}$/;

    const checkFarmName = nameRegexp.test(FarmName);
    const checkFarmYear = yearRegexp.test(Year);

    // To be removed once summary is implemented
    console.log(checkFarmName && checkFarmYear);
    return checkFarmName && checkFarmYear;
  };

  const clickHandler = () => {
    if (validate(farmInfoDetails)) {
      updateFarmDetails(farmInfoDetails);
      // To be removed once summary is implemented
      console.log('farmDetails: ', farmDetails);
    }
  };

  return (
    <StyledFarmInfo>
      <label htmlFor="farmName">Name</label>
      <input
        type="text"
        name="farmName"
        onChange={(e) => {
          farmInfoDetails.FarmName = e.target.value;
        }}
        minLength={1}
        maxLength={24}
      />
      <label htmlFor="farmYear">Year</label>
      <input
        type="number"
        name="farmYear"
        defaultValue="2024"
        onChange={(e) => {
          farmInfoDetails.Year = e.target.value;
        }}
      />
      <label htmlFor="farmRegion">Region</label>
      {/* <p> Region selection will customize recommendations to your local climate. </p> */}
      <StyledButtonContainer>
        <select
          id="farmRegion"
          name="farmRegion"
        >
          <option value="VancouverIsland">Vancouver Island </option>
        </select>
        <Button
          text="Next"
          size="sm"
          disabled={false}
          handleClick={clickHandler}
        />
      </StyledButtonContainer>
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
