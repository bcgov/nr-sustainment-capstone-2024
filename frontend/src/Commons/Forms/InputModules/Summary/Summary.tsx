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
import { StyledFarmInfo, StyledContainer } from './Summary.style';

const SummaryComponent: React.FC<InputModuleProps> = ({ farmDetails }) => {
  console.log(farmDetails);
  return (
    <StyledContainer>
      <StyledFarmInfo>
        <div>
          <p>
            <span className="label">Farm Name:&nbsp;</span>
            {farmDetails.FarmName}
          </p>
          <p>
            <span className="label">Year:&nbsp;</span>
            {farmDetails.Year}
          </p>
          <p>
            <span className="label">Region:&nbsp;</span>
            {farmDetails.FarmRegion}
          </p>
          <p>
            <span className="label">Berries:&nbsp;</span>
            {farmDetails.HasBerries ? 'Yes' : 'No'}
          </p>
          <span className="label">
            <p>Fields:&nbsp;</p>
          </span>
          {farmDetails.Fields.map((field) => (
            <div key={field.FieldName + field.Area + field.Comment}>
              <div
                className="fieldRow"
                key={field.FieldName}
              >
                <span className="label">
                  <p>Name:&nbsp;</p>
                </span>
                <p>{field.FieldName}</p>
                <span className="label">
                  <p>Area:&nbsp;</p>
                </span>
                <p>{field.Area}</p>
              </div>
              <div>
                <span className="label">
                  <p>Comments:&nbsp;</p>
                </span>
                <p>{field.Comment}</p>
              </div>
            </div>
          ))}
        </div>
      </StyledFarmInfo>
      <CustomLink
        path="/export"
        size="lg"
        text="Finish"
      />
    </StyledContainer>
  );
};

const Summary: InputModuleInterface = {
  InputModuleComponent: SummaryComponent,
  id: 'Summary',
  name: { long: 'Summary', short: 'Summary' },
  faIcon: faList,
  enable: false,
};

export default Summary;
