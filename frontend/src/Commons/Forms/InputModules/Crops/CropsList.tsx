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
} from '@Commons/Button/FieldButtonGroup.styles';
import {
  StyledListContainer,
  StyledListItem,
  StyledFieldInfoList,
  StyledCropsGroup,
} from '../ListComponent.styles';

interface CropsListComponentProps extends InputModuleProps {
  addNewCrop: (fieldIndex: number) => void;
  fields: FieldDetailInterface;
  index: number;
  buttonDisplayed: boolean;
}

const CropsList: React.FC<CropsListComponentProps> = ({
  addNewCrop,
  fields,
  index,
  buttonDisplayed,
}) => (
  <StyledFieldInfoList>
    <StyledListContainer>
      <StyledListItem width="240px">
        <h2>Field Name</h2>
        <p key={fields.FieldName}>{fields.FieldName}</p>
      </StyledListItem>
      <StyledCropsGroup>
        {fields.Crops.map((crops: CropsDetailsInterface) => (
          <StyledListItem
            width="50%"
            key={crops.id}
          >
            <div className="CropsList">
              <h2>Crops</h2>
              {/* For some reason, + 1 is id 0 */}
              <h2>{crops.id + 2}</h2>
            </div>
            <p key={crops.cropId}>{crops.cropId}</p>
          </StyledListItem>
        ))}
      </StyledCropsGroup>
    </StyledListContainer>
    {!buttonDisplayed && (
      <StyledNewFieldButtonContainer>
        <StyledNewFieldButtonController>
          <Button
            type="button"
            size="lg"
            disabled={false}
            radius="50px"
            actions="secondary"
            text={ComponentText.ADD_CROP}
            handleClick={() => addNewCrop(index)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </StyledNewFieldButtonController>
      </StyledNewFieldButtonContainer>
    )}
  </StyledFieldInfoList>
);

export default CropsList;
