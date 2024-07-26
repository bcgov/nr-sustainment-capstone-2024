import { FC } from 'react';
import FarmDetailsInterface from '@Interface/FarmDetailsInterface';
import CropsDetailsInterface from '@Interface/CropsDetailsInterface';
import FertilizerInterface from '@Interface/FertilizerInterface';
import InformationIcons from '@Commons/InformationIcons/InformationIcons';
import {
  StyledH3HeaderContainer,
  StyledH3HeaderItem,
  StyledH4HeaderContainer,
  StyledH4HeaderItem,
  StyledH4HeaderList,
  StyledPItem,
  StyledPItemList,
  StyledPContainer,
  DesktopView,
  MobileView,
} from './CalculationList.styles';
import { StyledDivider } from '../ListComponent.styles';

interface CalculationListProps {
  farmDetails: FarmDetailsInterface;
  selectedFieldIndex: number;
  hasFertilizerAdded: boolean;
}
// Will be changed with the correct value after implementation of the calculation
const zeroConstant: number = 0;
const CalculationList: FC<CalculationListProps> = ({
  farmDetails,
  selectedFieldIndex,
  hasFertilizerAdded,
}) => {
  const agronomicArray: string[] = [
    'agronomic balances mainly indicate if crop nutrient requirements are met',
    'crop removal balances can indicate if soil phosphorus (P) or potassium (K) levels will change',
  ];
  const cropRemoval: string[] = [
    'Crop removal balances indicate if soil phosphorus (P) or potassium (K) levels will change',
    'Agronomic balances mainly indicate if crop nutrient requirements are met',
    'Increases in soil P in the long term are a possible water quality concern',
  ];
  return (
    <>
      <DesktopView>
        <StyledH3HeaderContainer>
          <StyledH3HeaderItem width="35%">
            <h3>&nbsp;</h3>
          </StyledH3HeaderItem>
          <StyledH3HeaderItem width="30%">
            <h3>Argonomic (lb/ac)</h3>
            <span>
              <InformationIcons arrayText={agronomicArray} />
            </span>
          </StyledH3HeaderItem>
          <StyledH3HeaderItem width="30%">
            <h3>Crop Removal (lb/ac)</h3>
            <span>
              <InformationIcons arrayText={cropRemoval} />
            </span>
          </StyledH3HeaderItem>
        </StyledH3HeaderContainer>
        <StyledH4HeaderContainer>
          <StyledH4HeaderItem width="30%">
            <h4>Crop</h4>
          </StyledH4HeaderItem>
          <StyledH4HeaderItem width="30%">
            <StyledH4HeaderList>
              <h4>N</h4>
              <h4>P2O5</h4>
              <h4>K2O</h4>
            </StyledH4HeaderList>
          </StyledH4HeaderItem>
          <StyledH4HeaderItem width="30%">
            <StyledH4HeaderList>
              <h4>N</h4>
              <h4>P2O5</h4>
              <h4>K2O</h4>
            </StyledH4HeaderList>
          </StyledH4HeaderItem>
        </StyledH4HeaderContainer>
        {farmDetails.Fields[selectedFieldIndex]?.Crops.map((Crop: CropsDetailsInterface) => {
          const { cropId } = Crop;

          return (
            <StyledPContainer key={cropId}>
              <StyledPItem width="30%">
                <p>{cropId === '75' ? 'Blueberry' : 'Raspberry'}</p>
              </StyledPItem>
              <StyledPItem width="30%">
                <StyledPItemList>
                  <p>{zeroConstant}</p>
                  <p>{zeroConstant}</p>
                  <p>{zeroConstant}</p>
                </StyledPItemList>
              </StyledPItem>
              <StyledPItem width="30%">
                <StyledPItemList>
                  <p>{zeroConstant}</p>
                  <p>{zeroConstant}</p>
                  <p>{zeroConstant}</p>
                </StyledPItemList>
              </StyledPItem>
            </StyledPContainer>
          );
        })}
        {hasFertilizerAdded && farmDetails.Fields[selectedFieldIndex].Nutrients.length > 0 && (
          <>
            <StyledH4HeaderItem width="30%">
              <h4>Fertilizer</h4>
            </StyledH4HeaderItem>
            {farmDetails.Fields[selectedFieldIndex]?.Nutrients.map(
              (fertilizer: FertilizerInterface) => {
                const { fertilizerId } = fertilizer;
                return (
                  <StyledPContainer key={`Fertilizer-${fertilizer.id}-${fertilizerId}`}>
                    <StyledPItem width="30%">
                      <p>{fertilizerId}</p>
                    </StyledPItem>
                    <StyledPItem width="30%">
                      <StyledPItemList>
                        <p>{zeroConstant}</p>
                        <p>{zeroConstant}</p>
                        <p>{zeroConstant}</p>
                      </StyledPItemList>
                    </StyledPItem>
                    <StyledPItem width="30%">
                      <StyledPItemList>
                        <p>{zeroConstant}</p>
                        <p>{zeroConstant}</p>
                        <p>{zeroConstant}</p>
                      </StyledPItemList>
                    </StyledPItem>
                  </StyledPContainer>
                );
              },
            )}
          </>
        )}
        <StyledDivider />
        <StyledPContainer>
          <StyledPItem width="30%">
            <p>Balance</p>
          </StyledPItem>
          <StyledPItem width="30%">
            <StyledPItemList>
              <p>{zeroConstant}</p>
              <p>{zeroConstant}</p>
              <p>{zeroConstant}</p>
            </StyledPItemList>
          </StyledPItem>
          <StyledPItem width="30%">
            <StyledPItemList>
              <p>{zeroConstant}</p>
              <p>{zeroConstant}</p>
              <p>{zeroConstant}</p>
            </StyledPItemList>
          </StyledPItem>
        </StyledPContainer>
      </DesktopView>
      <MobileView>
        <>
          <StyledH3HeaderItem width="100%">
            <h3>Argonomic (lb/ac)</h3>
            <span>
              <InformationIcons arrayText={agronomicArray} />
            </span>
          </StyledH3HeaderItem>
          <StyledH4HeaderContainer>
            <StyledH4HeaderItem width="30%">
              <h4>Crop</h4>
            </StyledH4HeaderItem>
            <StyledH4HeaderItem width="30%">
              <StyledH4HeaderList>
                <h4>N</h4>
                <h4>P2O5</h4>
                <h4>K2O</h4>
              </StyledH4HeaderList>
            </StyledH4HeaderItem>
          </StyledH4HeaderContainer>
          {farmDetails.Fields[selectedFieldIndex]?.Crops.map((Crop: CropsDetailsInterface) => {
            const { cropId } = Crop;

            return (
              <StyledPContainer key={cropId}>
                <StyledPItem width="30%">
                  <p>{cropId === '75' ? 'Blueberry' : 'Raspberry'}</p>
                </StyledPItem>
                <StyledPItem width="30%">
                  <StyledPItemList>
                    <p>{zeroConstant}</p>
                    <p>{zeroConstant}</p>
                    <p>{zeroConstant}</p>
                  </StyledPItemList>
                </StyledPItem>
              </StyledPContainer>
            );
          })}
          {hasFertilizerAdded && farmDetails.Fields[selectedFieldIndex].Nutrients.length > 0 && (
            <>
              <StyledH4HeaderItem width="30%">
                <h4>Fertilizer</h4>
              </StyledH4HeaderItem>
              {farmDetails.Fields[selectedFieldIndex]?.Nutrients.map(
                (fertilizer: FertilizerInterface) => {
                  const { fertilizerId } = fertilizer;
                  return (
                    <StyledPContainer key={`Fertilizer-${fertilizer.id}-${fertilizerId}`}>
                      <StyledPItem width="30%">
                        <p>{fertilizerId}</p>
                      </StyledPItem>
                      <StyledPItem width="30%">
                        <StyledPItemList>
                          <p>{zeroConstant}</p>
                          <p>{zeroConstant}</p>
                          <p>{zeroConstant}</p>
                        </StyledPItemList>
                      </StyledPItem>
                    </StyledPContainer>
                  );
                },
              )}
            </>
          )}
          <StyledDivider />
          <StyledPContainer>
            <StyledPItem width="30%">
              <p>Balance</p>
            </StyledPItem>
            <StyledPItem width="30%">
              <StyledPItemList>
                <p>{zeroConstant}</p>
                <p>{zeroConstant}</p>
                <p>{zeroConstant}</p>
              </StyledPItemList>
            </StyledPItem>
          </StyledPContainer>
          <StyledH3HeaderItem width="100%">
            <h3>Crop Removal (lb/ac)</h3>
            <span>
              <InformationIcons arrayText={cropRemoval} />
            </span>
          </StyledH3HeaderItem>
          <StyledH4HeaderContainer>
            <StyledH4HeaderItem width="30%">
              <h4>Crop</h4>
            </StyledH4HeaderItem>
            <StyledH4HeaderItem width="30%">
              <StyledH4HeaderList>
                <h4>N</h4>
                <h4>P2O5</h4>
                <h4>K2O</h4>
              </StyledH4HeaderList>
            </StyledH4HeaderItem>
          </StyledH4HeaderContainer>
          {farmDetails.Fields[selectedFieldIndex]?.Crops.map((Crop: CropsDetailsInterface) => {
            const { cropId } = Crop;

            return (
              <StyledPContainer key={cropId}>
                <StyledPItem width="30%">
                  <p>{cropId === '75' ? 'Blueberry' : 'Raspberry'}</p>
                </StyledPItem>
                <StyledPItem width="30%">
                  <StyledPItemList>
                    <p>{zeroConstant}</p>
                    <p>{zeroConstant}</p>
                    <p>{zeroConstant}</p>
                  </StyledPItemList>
                </StyledPItem>
              </StyledPContainer>
            );
          })}
          {hasFertilizerAdded && (
            <>
              <StyledH4HeaderItem width="30%">
                <h4>Fertilizer</h4>
              </StyledH4HeaderItem>
              {farmDetails.Fields[selectedFieldIndex]?.Nutrients.map(
                (fertilizer: FertilizerInterface) => {
                  const { fertilizerId } = fertilizer;
                  return (
                    <StyledPContainer key={`Fertilizer-${fertilizer.id}-${fertilizerId}`}>
                      <StyledPItem width="30%">
                        <p>{fertilizerId}</p>
                      </StyledPItem>
                      <StyledPItem width="30%">
                        <StyledPItemList>
                          <p>{zeroConstant}</p>
                          <p>{zeroConstant}</p>
                          <p>{zeroConstant}</p>
                        </StyledPItemList>
                      </StyledPItem>
                    </StyledPContainer>
                  );
                },
              )}
            </>
          )}
          <StyledDivider />
          <StyledPContainer>
            <StyledPItem width="30%">
              <p>Balance</p>
            </StyledPItem>
            <StyledPItem width="30%">
              <StyledPItemList>
                <p>{zeroConstant}</p>
                <p>{zeroConstant}</p>
                <p>{zeroConstant}</p>
              </StyledPItemList>
            </StyledPItem>
          </StyledPContainer>
        </>
      </MobileView>
    </>
  );
};
export default CalculationList;
