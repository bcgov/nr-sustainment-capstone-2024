import { FC, useState, useEffect } from 'react';
import FarmDetailsInterface from '@Interface/FarmDetailsInterface';
import CropsDetailsInterface from '@Interface/CropsDetailsInterface';
import FertilizerInterface from '@Interface/FertilizerInterface';
import Calculate from '@Utils/Calculate/Calculate';
import MainBalanceInterface from '@Interface/MainBalanceInterface';
import CropRemovalBalanceInterface from '@Interface/CropRemovalBalance';
import AgronomicBalanceInterface from '@Interface/AgronomicBalanceInterface';
import { StyledDivider } from '../ListComponent.styles';
import { faCircleCheck, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
} from './CalculateNutrientsList.styles';

interface CalculationListProps {
  farmDetails: FarmDetailsInterface;
  selectedFieldIndex: number;
  hasFertilizerAdded: boolean;
}

const initialAgronomicBalance: AgronomicBalanceInterface = { N: 0, P: 0, K: 0 };
const initialCropRemovalBalance: CropRemovalBalanceInterface = { P: 0, K: 0 };
const initialBalance: MainBalanceInterface = {
  agronomic: initialAgronomicBalance,
  cropRemoval: initialCropRemovalBalance,
};

const zeroConstant: number = 0;

const CalculationList: FC<CalculationListProps> = ({
  farmDetails,
  selectedFieldIndex,
  hasFertilizerAdded,
}) => {
  const [cropBalance, setCropBalance] = useState<MainBalanceInterface>(initialBalance);
  const [resultBalance, setResultBalance] = useState<MainBalanceInterface>(initialBalance);

  useEffect(() => {
    const field = farmDetails.Fields[selectedFieldIndex];
    if (field) {
      const balances = field.Crops.map((crop) => Calculate(field, crop));
      const newCropBalance = balances[balances.length - 1];
      setCropBalance(newCropBalance);

      let fertN = 0;
      let fertP = 0;
      let fertK = 0;

      if (hasFertilizerAdded && field.Nutrients.length > 0) {
        field.Nutrients.forEach((fertilizer) => {
          fertN += fertilizer.fertN;
          fertP += fertilizer.fertP2o5;
          fertK += fertilizer.fertK2o;
        });
      }

      setResultBalance({
        agronomic: {
          N: newCropBalance.agronomic.N + fertN,
          P: newCropBalance.agronomic.P + fertP,
          K: newCropBalance.agronomic.K + fertK,
        },
        cropRemoval: {
          N: newCropBalance.cropRemoval.N ? newCropBalance.cropRemoval.N + fertN : fertN,
          P: newCropBalance.cropRemoval.P + fertP,
          K: newCropBalance.cropRemoval.K + fertK,
        },
      });
    }
  }, [farmDetails.Fields[selectedFieldIndex], selectedFieldIndex, hasFertilizerAdded]);

  return (
    <>
      <DesktopView>
        <StyledH3HeaderContainer>
          <StyledH3HeaderItem width="35%">
            <h3>&nbsp;</h3>
          </StyledH3HeaderItem>
          <StyledH3HeaderItem width="30%">
            <h3>Argonomic (lb/ac)</h3>
          </StyledH3HeaderItem>
          <StyledH3HeaderItem width="30%">
            <h3>Crop Removal (lb/ac)</h3>
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

        {farmDetails.Fields[selectedFieldIndex]?.Crops.map((crop: CropsDetailsInterface) => {
          return (
            <StyledPContainer key={`${crop}`}>
              <StyledPItem width="30%">
                <p>{crop.cropId === '75' ? 'Blueberry' : 'Raspberry'}</p>
              </StyledPItem>
              <StyledPItem width="30%">
                <StyledPItemList>
                  <p>{cropBalance.agronomic.N}</p>
                  <p>{cropBalance.agronomic.P}</p>
                  <p>{cropBalance.agronomic.K}</p>
                </StyledPItemList>
              </StyledPItem>
              <StyledPItem width="30%">
                <StyledPItemList>
                  <p>{zeroConstant}</p>
                  <p>{cropBalance.cropRemoval.P}</p>
                  <p>{cropBalance.cropRemoval.K}</p>
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
                return (
                  <StyledPContainer
                    key={`Fertilizer-${fertilizer.id}-${fertilizer.fertilizerId}-${farmDetails.Fields[selectedFieldIndex].Nutrients.length}`}
                  >
                    <StyledPItem width="30%">
                      <p>{fertilizer.fertilizerId}</p>
                    </StyledPItem>
                    <StyledPItem width="30%">
                      <StyledPItemList>
                        <p>{fertilizer.fertN}</p>
                        <p>{fertilizer.fertP2o5}</p>
                        <p>{fertilizer.fertK2o}</p>
                      </StyledPItemList>
                    </StyledPItem>
                    <StyledPItem width="30%">
                      <StyledPItemList>
                        <p>{fertilizer.fertN}</p>
                        <p>{fertilizer.fertP2o5}</p>
                        <p>{fertilizer.fertK2o}</p>
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
              <p>
                <FontAwesomeIcon
                  icon={resultBalance.agronomic.N > 0 ? faCircleCheck : faTriangleExclamation}
                />
                {resultBalance.agronomic.N}
              </p>
              <p>
                <FontAwesomeIcon
                  icon={resultBalance.agronomic.N > 0 ? faCircleCheck : faTriangleExclamation}
                />
                {resultBalance.agronomic.P}
              </p>
              <p>
                <FontAwesomeIcon
                  icon={resultBalance.agronomic.N > 0 ? faCircleCheck : faTriangleExclamation}
                />
                {resultBalance.agronomic.K}
              </p>
            </StyledPItemList>
          </StyledPItem>
          <StyledPItem width="30%">
            <StyledPItemList>
              <p>{resultBalance.cropRemoval.N}</p>
              <p>{resultBalance.cropRemoval.P}</p>
              <p>{resultBalance.cropRemoval.K}</p>
            </StyledPItemList>
          </StyledPItem>
        </StyledPContainer>
      </DesktopView>

      <MobileView>
        <>
          <StyledH3HeaderItem width="100%">
            <h3>Agronomic (lb/ac)</h3>
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
