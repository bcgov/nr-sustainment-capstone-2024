/**
 * @summary Farm Information Input Module
 * @description A module with input fields to be used in a Form Module
 * @author @GDamaso
 */
import Button from '@Commons/Button/Button.tsx';
import InputModuleInterface from 'src/Interface/InputModuleinterface';
import { faTractor } from '@fortawesome/free-solid-svg-icons';
import InputModuleProps from 'src/Interface/InputModuleProps';
import FarmDetailsInterface from 'src/Interface/FarmDetailsInterface';
import React from 'react';
import { StyledFarmInfo, StyledButtonContainer } from './FarmInformation.style';

const mockFarmDetails: FarmDetailsInterface = {
  Year: '2020',
  FarmName: 'Hello',
  FarmRegion: 'World!',
  HasBerries: true,
};

const FarmInfoComponent: React.FC<InputModuleProps> = ({ farmDetails, updateFarmDetails }) => {
  const clickHandler = () => {
    console.log('clicked');
    console.log(farmDetails);
    updateFarmDetails(mockFarmDetails);
  };

  return (
    <StyledFarmInfo>
      <label htmlFor="farmName">
        Name
        <br />
        <input type="text" name="farmName" />
      </label>
      <label htmlFor="farmYear">
        Year
        <br />
        <input type="number" name="farmYear" />
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
