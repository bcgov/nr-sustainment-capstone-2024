import { FC } from 'react';
import FarmDetailsInterface from '@Interface/FarmDetailsInterface';
import FieldDetailInterface from '@Interface/FieldDetailsInterface';
import CropsDetailsInterface from '@Interface/CropsDetailsInterface';
import { StyledListItem, StyledCropsGroup } from '../ListComponent.styles';
import { StyledListContainer, StyledFieldInfoList } from './CropsList.styles';

interface CropsListComponentProps {
  field: FieldDetailInterface;
  farmDetails: FarmDetailsInterface;
}

const CropsList: FC<CropsListComponentProps> = ({ farmDetails, field }) => {
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
