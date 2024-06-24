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
import CustomLink from '@Commons/CustomLink/CustomLink';
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
      <p>Fields:&nbsp;</p>
      {farmDetails.Fields.map((field) => (
        <div key={field.FieldName}>
          <p>{field.FieldName}</p>
          <p>{field.Area}</p>
          <p>{field.Comments}</p>
        </div>
      ))}
    </StyledFarmInfo>
    <CustomLink
      path="/export"
      size="lg"
      text="Finish"
    />
  </>
);

const Summary: InputModuleInterface = {
  InputModuleComponent: SummaryComponent,
  id: 'Summary',
  name: { long: 'Summary', short: 'Summary' },
  faIcon: faList,
  enable: false,
  status: 'inactive',
};

export default Summary;
