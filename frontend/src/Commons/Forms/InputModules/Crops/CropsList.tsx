import { FC } from 'react';
import FarmDetailsInterface from '@Interface/FarmDetailsInterface';
import FieldDetailInterface from '@Interface/FieldDetailsInterface';
import CropsDetailsInterface from '@Interface/CropsDetailsInterface';
import { StyledListItem, StyledCropsGroup } from '../ListComponent.styles';
import { StyledListContainer, StyledFieldInfoList } from './CropsList.styles';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CropsListComponentProps {
  field: FieldDetailInterface;
  farmDetails: FarmDetailsInterface;
  removeCrop(field: FieldDetailInterface, crop: CropsDetailsInterface): void;
}

const CropsList: FC<CropsListComponentProps> = ({ farmDetails, field, removeCrop }) => {
  const fieldIndex = farmDetails.Fields.indexOf(field);
  return (
    <StyledFieldInfoList isFirstChild={fieldIndex === 0}>
      <StyledListContainer>
        <StyledListItem
          desktopWidth="160px"
          mobileWidth="181px"
        >
          <h2>Field Name</h2>
          <p key={field.FieldName}>{field.FieldName}</p>
        </StyledListItem>
        <StyledCropsGroup>
          {field.Crops.map((crop: CropsDetailsInterface, idx: number) => (
            <StyledListItem
              desktopWidth="160px"
              mobileWidth="121px"
              key={crop.id}
            >
              <div className="CropsList">
                <h2>Crop</h2>
                <h2>{idx + 1}</h2>
                <button
                  onClick={() => removeCrop(field, crop)}
                  style={{ border: 'none', background: 'none' }}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
              <p key={crop.cropId}>{crop.cropId === '75' ? 'Blueberry' : 'Raspberry'}</p>
            </StyledListItem>
          ))}
        </StyledCropsGroup>
      </StyledListContainer>
    </StyledFieldInfoList>
  );
};

export default CropsList;
