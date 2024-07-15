import { FC } from 'react';
import InputModuleProps from 'src/Interface/InputModuleProps';
import FieldDetailInterface from 'src/Interface/FieldDetailsInterface';
import { CropsDetailsInterface } from 'src/Interface/CropsDetailsInterface';
import {
  StyledListContainer,
  StyledListItem,
  StyledFieldInfoList,
  StyledCropsGroup,
} from '../ListComponent.styles';

interface CropsListComponentProps extends InputModuleProps {
  field: FieldDetailInterface;
}

const CropsList: FC<CropsListComponentProps> = ({ field }) => (
  <StyledFieldInfoList>
    <StyledListContainer>
      <StyledListItem width="240px">
        <h2>Field Name</h2>
        <p key={field.FieldName}>{field.FieldName}</p>
      </StyledListItem>
      <StyledCropsGroup>
        {field.Crops.map((crop: CropsDetailsInterface) => (
          <StyledListItem
            width="50%"
            key={crop.id}
          >
            <div className="CropsList">
              <h2>Crops</h2>
              <h2>{crop.id}</h2>
            </div>
            <p key={crop.cropId}>{crop.cropId}</p>
          </StyledListItem>
        ))}
      </StyledCropsGroup>
    </StyledListContainer>
  </StyledFieldInfoList>
);

export default CropsList;
