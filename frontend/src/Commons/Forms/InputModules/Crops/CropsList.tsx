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
  StyledCropsGroup,
  StyledDivider,
} from './CropsList.style';

interface CropsListComponentProps extends InputModuleProps {
  addNewField: (fieldIndex: number) => void;
  fields: FieldDetailInterface;
  index: number;
}

const CropsListComponent: React.FC<CropsListComponentProps> = ({
  farmDetails,
  addNewField,
  fields,
  index,
}) => {
  const fieldCount = farmDetails.Fields.length;
  return (
    <StyledFieldInfoList>
      <StyledListContainer>
        <StyledListItem width="240px">
          <h2>Field Name</h2>
          <p key={fields.FieldName}>{fields.FieldName}</p>
        </StyledListItem>
        {fields.Crops.length > 0
          && fields.Crops.slice(1).map((crops: CropsDetailsInterface) => (
            <StyledCropsGroup key={crops.id}>
              <StyledListItem width="0%">
                <div className="CropsList">
                  <h2>Crops</h2>
                  <h2>{crops.id + 1}</h2>
                </div>
                <p key={crops.cropId}>{crops.cropId}</p>
              </StyledListItem>
            </StyledCropsGroup>
          ))}
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
            handleClick={() => {
              console.log(index);
              addNewField(index);
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </StyledNewFieldButtonController>
      </StyledNewFieldButtonContainer>
      {fieldCount > 2 && <StyledDivider />}
    </StyledFieldInfoList>
  );
};

export default CropsListComponent;