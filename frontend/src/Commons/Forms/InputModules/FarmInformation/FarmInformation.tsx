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
import ComponentText from '@Constants/ComponentText';

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

  const updateFarmName = (e: React.ChangeEvent<HTMLInputElement>) => {
    farmInfoDetails.FarmName = e.target.value;
  };

  const updateFarmYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    farmInfoDetails.Year = e.target.value;
  };

  return (
    <StyledFarmInfo>
      <label htmlFor="farmName">
        <p>Name</p>
        <input
          type="text"
          name="Farm Name"
          id="farmName"
          onChange={(e) => updateFarmName(e)}
          minLength={1}
          maxLength={24}
        />
      </label>
      <label htmlFor="farmYear">
        <p>Year</p>
        <input
          type="number"
          name="Year"
          id="farmYear"
          defaultValue="2024"
          onChange={(e) => updateFarmYear(e)}
        />
      </label>
      <label htmlFor="farmRegion">
        <p>Region</p>
        <StyledButtonContainer>
          <select
            id="farmRegion"
            name="farmRegion"
          >
            <option value="VancouverIsland">Vancouver Island </option>
          </select>
          <Button
            text={ComponentText.NEXT}
            size="sm"
            disabled={false}
            handleClick={clickHandler}
          />
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
