import { FC } from 'react';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FertilizerInterface from '@Interface/FertilizerInterface';
import getFertilizerOption from '@Utils/getFertID';
import {
  StyledFieldInfoList,
  StyledListItem,
  StyledFontAwesomeContainer,
  StyledCustomFertilizerGroup,
  StyledDivider,
} from '../ListComponent.styles';
import {
  StyledListContainer,
  DesktopFertilizerGroup,
  MobileFertilizerGroup,
  FertilizerTypeAndFontAwesomeContainer,
} from './Fertilizers.styles';

interface FertilizerProps {
  fertilizerDetails: FertilizerInterface[];
  removeFert(fertilizer: FertilizerInterface): void;
}

const FertilizersListComponent: FC<FertilizerProps> = ({ fertilizerDetails, removeFert }) => {
  const fieldCount = fertilizerDetails.length;
  return (
    <StyledFieldInfoList>
      {fertilizerDetails.map((fertilizer: FertilizerInterface) => (
        <div key={fertilizer.id}>
          <StyledListContainer>
            <FertilizerTypeAndFontAwesomeContainer>
              <StyledListItem
                desktopWidth="200px"
                mobileWidth="127px"
              >
                <h2>Fertilizer Type</h2>
                <p>{fertilizer.fertilizerTypeId}</p>
              </StyledListItem>
              <DesktopFertilizerGroup>
                {fertilizer.fertilizerTypeId === 'Dry Fertilizer (Custom)' ||
                fertilizer.fertilizerTypeId === 'Liquid Fertilizer (Custom)' ? (
                  <StyledCustomFertilizerGroup>
                    <StyledListItem
                      desktopWidth="80px"
                      mobileWidth="70px"
                    >
                      <h2>N (%)</h2>
                      <p>{fertilizer.customN}</p>
                    </StyledListItem>
                    <StyledListItem
                      desktopWidth="80px"
                      mobileWidth="70px"
                    >
                      <h2>P2o5 (%)</h2>
                      <p>{fertilizer.customP2o5}</p>
                    </StyledListItem>
                    <StyledListItem
                      desktopWidth="80px"
                      mobileWidth="70px"
                    >
                      <h2>K2o (%)</h2>
                      <p>{fertilizer.customK2o}</p>
                    </StyledListItem>
                  </StyledCustomFertilizerGroup>
                ) : (
                  <StyledListItem desktopWidth="300px">
                    <h2> Fertilizer Name</h2>
                    <p>{getFertilizerOption(fertilizer.fertilizerId)?.label}</p>
                  </StyledListItem>
                )}
              </DesktopFertilizerGroup>
              <StyledFontAwesomeContainer>
                <button
                  type="button"
                  onClick={() => removeFert(fertilizer)}
                  style={{ border: 'none', background: 'none' }}
                  aria-label="delete fertilizer"
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </StyledFontAwesomeContainer>
            </FertilizerTypeAndFontAwesomeContainer>

            <MobileFertilizerGroup>
              {fertilizer.fertilizerTypeId === 'Dry Fertilizer (Custom)' ||
              fertilizer.fertilizerTypeId === 'Liquid Fertilizer (Custom)' ? (
                <StyledCustomFertilizerGroup>
                  <StyledListItem
                    desktopWidth="80px"
                    mobileWidth="70px"
                  >
                    <h2>N (%)</h2>
                    <p>{fertilizer.customN}</p>
                  </StyledListItem>
                  <StyledListItem
                    desktopWidth="80px"
                    mobileWidth="70px"
                  >
                    <h2>P2o5 (%)</h2>
                    <p>{fertilizer.customP2o5}</p>
                  </StyledListItem>
                  <StyledListItem
                    desktopWidth="80px"
                    mobileWidth="70px"
                  >
                    <h2>K2o (%)</h2>
                    <p>{fertilizer.customK2o}</p>
                  </StyledListItem>
                </StyledCustomFertilizerGroup>
              ) : (
                <StyledListItem desktopWidth="300px">
                  <h2> Fertilizer Name</h2>
                  <p>{getFertilizerOption(fertilizer.fertilizerId)?.label}</p>
                </StyledListItem>
              )}
            </MobileFertilizerGroup>
          </StyledListContainer>
          {fieldCount > 1 && <StyledDivider />}
        </div>
      ))}
    </StyledFieldInfoList>
  );
};

export default FertilizersListComponent;
