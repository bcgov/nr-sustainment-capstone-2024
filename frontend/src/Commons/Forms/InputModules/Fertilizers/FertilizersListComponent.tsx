import { FC } from 'react';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FertilizerInterface from '@Interface/FertilizerInterface';
import getFertilizerOption from '@Utils/getFertID';
import {
  StyledFieldInfoList,
  StyledListContainer,
  StyledListItem,
  StyledFontAwesomeContainer,
  StyledCustomFertilizerGroup,
  StyledDivider,
} from '../ListComponent.styles';

interface FertilizerProps {
  fertilizerDetails: FertilizerInterface[];
}

const FertilizersListComponent: FC<FertilizerProps> = ({ fertilizerDetails }) => {
  const fieldCount = fertilizerDetails.length;
  return (
    <StyledFieldInfoList>
      {fertilizerDetails.map((fertilizer: FertilizerInterface) => (
        <div key={fertilizer.id}>
          <StyledListContainer formNutrients>
            <StyledListItem width="240px">
              <h2>Fertilizer Type</h2>
              <p>{fertilizer.fertilizerTypeId}</p>
            </StyledListItem>
            {fertilizer.fertilizerTypeId === 'Dry Fertilizer (Custom)' ||
            fertilizer.fertilizerTypeId === 'Liquid Fertilizer (Custom)' ? (
              <StyledCustomFertilizerGroup>
                <StyledListItem width="40%">
                  <h2>N (%)</h2>
                  <p>{fertilizer.customN}</p>
                </StyledListItem>
                <StyledListItem width="40%">
                  <h2>P2o5 (%)</h2>
                  <p>{fertilizer.customP2o5}</p>
                </StyledListItem>
                <StyledListItem width="40%">
                  <h2>K2o (%)</h2>
                  <p>{fertilizer.customK2o}</p>
                </StyledListItem>
              </StyledCustomFertilizerGroup>
            ) : (
              <StyledListItem width="300px">
                <h2> Fertilizer Name</h2>
                <p>{getFertilizerOption(fertilizer.fertilizerId)?.label}</p>
              </StyledListItem>
            )}
            <StyledFontAwesomeContainer>
              <FontAwesomeIcon icon={faPencil} />
              <FontAwesomeIcon icon={faTrash} />
            </StyledFontAwesomeContainer>
          </StyledListContainer>
          {fieldCount > 1 && <StyledDivider />}
        </div>
      ))}
    </StyledFieldInfoList>
  );
};

export default FertilizersListComponent;
