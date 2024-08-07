import { FC } from 'react';
import FieldDetailInterface from '@Interface/FieldDetailsInterface';
import CropsDetailsInterface from '@Interface/CropsDetailsInterface';
import { StyledListItem, StyledFieldInfoList, StyledCropsGroup } from '../ListComponent.styles';
import StyledListContainer from './CropsList.styles';

interface CropsListComponentProps {
  field: FieldDetailInterface;
}

const CropsList: FC<CropsListComponentProps> = ({ field }) => (
  <StyledFieldInfoList>
    <StyledListContainer>
      <StyledListItem desktopWidth="240px">
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

export default CropsList;
