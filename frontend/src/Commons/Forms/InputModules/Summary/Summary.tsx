/**
 *
 *
 * THIS DOES NOT REPRESENT MOCKUPS!
 *
 * @summary Farm Information Input Module
 * @description A module with the data inputted by the user
 * @author @GDamaso @Kcaparas
 */
import React from 'react';
import InputModuleProps from 'src/Interface/InputModuleProps';
import InputModuleInterface from 'src/Interface/InputModuleinterface';
import { faList } from '@fortawesome/free-solid-svg-icons';
import Button from '@Commons/Button/Button';
import { StyledFarmInfo } from './Summary.style';

const SummaryComponent: React.FC<InputModuleProps> = ({ farmDetails }) => (
  <>
    <StyledFarmInfo>
      <p>
        Farm Name:&nbsp;
        {farmDetails.FarmName}
      </p>
      <p>
        Year:&nbsp;
        {farmDetails.Year}
      </p>
      <p>
        Region:&nbsp;
        {farmDetails.FarmRegion}
      </p>
      <p>
        Berries:&nbsp;
        {farmDetails.HasBerries ? 'Yes' : 'No'}
      </p>
    </StyledFarmInfo>
    <Button
      size="md"
      text="Finish"
      disabled={false}
      path="/export"
    />
  </>
);

const Summary: InputModuleInterface = {
  InputModuleComponent: SummaryComponent,
  id: 'Summary',
  name: { long: 'Summary', short: 'Summary' },
  faIcon: faList,
  enable: false,
};

export default Summary;
