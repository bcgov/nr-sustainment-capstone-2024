import React from 'react';
import InputModuleProps from 'src/Interface/InputModuleProps';
import FieldDetailInterface from 'src/Interface/FieldDetailsInterface';
import {
  StyledListContainer,
  StyledListItem,
  StyledFieldInfoList,
  StyledDivider,
} from './CropsList.style';

const CropsListComponent: React.FC<InputModuleProps> = ({ farmDetails }) => {
  const fieldCount = farmDetails.Fields.length;
  return (
    <StyledFieldInfoList>
      {farmDetails.Fields.map((fields: FieldDetailInterface) => (
        <div key={fields.FieldName + fields.Area + fields.Comment}>
          <StyledListContainer>
            <StyledListItem width="50%">
              <h2>Field Name</h2>
              <p key={fields.FieldName}>{fields.FieldName}</p>
            </StyledListItem>
          </StyledListContainer>
        </div>
      ))}
      {fieldCount > 2 && <StyledDivider />}
    </StyledFieldInfoList>
  );
};

export default CropsListComponent;
