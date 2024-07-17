import { FC } from 'react';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TempNutrientsInterface } from '@Interface/NutrientsInterface';
import {
  StyledFieldInfoList,
  StyledListContainer,
  StyledListItem,
  StyledFontAwesomeContainer,
  StyledCustomFertilizerGroup,
  StyledDivider,
} from '../ListComponent.styles';

interface FertilizerProps {
  nutrientDetails: TempNutrientsInterface[];
}

const FertilizersListComponent: FC<FertilizerProps> = ({ nutrientDetails }) => {
  const fieldCount = nutrientDetails.length;
  return (
    <StyledFieldInfoList>
      {nutrientDetails.map((nutrient: TempNutrientsInterface) => (
        <div key={nutrient.id}>
          <StyledListContainer formNutrients>
            <StyledListItem width="240px">
              <h2>Fertilizer Type</h2>
              <p>{nutrient.fertilizerTypeId}</p>
            </StyledListItem>
            {nutrient.fertilizerTypeId.includes('Dry Fertilizer (Custom)') ||
            nutrient.fertilizerTypeId.includes('Liquid Fertilizer (Custom)') ? (
              <StyledCustomFertilizerGroup>
                <StyledListItem width="40%">
                  <h2>N (%)</h2>
                  <p>{nutrient.customN}</p>
                </StyledListItem>
                <StyledListItem width="40%">
                  <h2>P2o5 (%)</h2>
                  <p>{nutrient.customP2o5}</p>
                </StyledListItem>
                <StyledListItem width="40%">
                  <h2>K2o (%)</h2>
                  <p>{nutrient.customK2o}</p>
                </StyledListItem>
              </StyledCustomFertilizerGroup>
            ) : (
              <StyledListItem width="300px">
                <h2> Fertilizer Name</h2>
                <p> {nutrient.fertilizerId}</p>
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
