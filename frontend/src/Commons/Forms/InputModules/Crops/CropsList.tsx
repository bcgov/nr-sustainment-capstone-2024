import React from 'react';
import InputModuleProps from 'src/Interface/InputModuleProps';
import FieldDetailInterface from 'src/Interface/FieldDetailsInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '@Commons/Button/Button';
import ComponentText from '@Constants/ComponentText';
import { CropsDetailsInterface } from 'src/Interface/CropsDetailsInterface';
import {
  StyledNewFieldButtonContainer,
  StyledNewFieldButtonController,
} from '@Commons/Button/FieldButtonGroup.style';
import {
  StyledListContainer,
  StyledListItem,
  StyledFieldInfoList,
  StyledDivider,
  StyledCropsGroup,
} from './CropsList.style';

interface CropsListComponentProps extends InputModuleProps {
  addNewField: () => void;
}

const CropsListComponent: React.FC<CropsListComponentProps> = ({ farmDetails, addNewField }) => {
  const fieldCount = farmDetails.Fields.length;
  console.log(farmDetails);
  return (
    <StyledFieldInfoList>
      {farmDetails.Fields.map((field: FieldDetailInterface) => (
        <div key={field.Id}>
          <StyledListContainer>
            <StyledListItem width="240px">
              <h2>Field Name</h2>
              <p>{field.FieldName}</p>
            </StyledListItem>
            <StyledCropsGroup key={field.Crops?.id}>
              <StyledListItem width="0%">
                <div className="CropsList">
                  <h2>Crop</h2>
                  <h2>{field.Crops?.id ? field.Crops?.id : 0 + 1}</h2>
                </div>
                <p>{field.Crops?.cropId}</p>
              </StyledListItem>
            </StyledCropsGroup>
          </StyledListContainer>
          <StyledNewFieldButtonContainer>
            <StyledNewFieldButtonController>
              <Button
                type="button"
                size="lg"
                disabled={false}
                radius="50px"
                actions="secondary"
                text={ComponentText.ADD_CROP}
                handleClick={addNewField}
              >
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </StyledNewFieldButtonController>
          </StyledNewFieldButtonContainer>
        </div>
      ))}
      {fieldCount > 2 && <StyledDivider />}
    </StyledFieldInfoList>
  );
};

export default CropsListComponent;
