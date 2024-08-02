import { FC } from 'react';
import CropsDetailsInterface from '@Interface/CropsDetailsInterface';
import FertilizerInterface from '@Interface/FertilizerInterface';
import { faCircleCheck, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainBalanceInterface from '@Interface/MainBalanceInterface';
import FieldDetailInterface from '@Interface/FieldDetailsInterface';
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
} from './CalculateNutrientsList.styles';
import { StyledDivider } from '../ListComponent.styles';

interface CalculationListProps {
  field: FieldDetailInterface;
  cropBalances: MainBalanceInterface[];
  resultBalance: MainBalanceInterface;
}

const zeroConstant: number = 0;

const CalculationList: FC<CalculationListProps> = ({ field, cropBalances, resultBalance }) => {
  const getResultsIcon = (nutrient: number) =>
    nutrient >= 0 ? faCircleCheck : faTriangleExclamation;

  const getResultIconColor = (nutrient: number) => (nutrient >= 0 ? '#42814A' : '#F8BB47');

  return (
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

      {field.Crops.map((crop: CropsDetailsInterface, index: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <StyledPContainer key={`${crop}-${index}`}>
          <StyledPItem width="30%">
            <p>{crop.cropId === '75' ? 'Blueberry' : 'Raspberry'}</p>
          </StyledPItem>
          <StyledPItem width="30%">
            <StyledPItemList>
              <p>{cropBalances[index]?.agronomic?.N ?? zeroConstant}</p>
              <p>{cropBalances[index]?.agronomic?.P ?? zeroConstant}</p>
              <p>{cropBalances[index]?.agronomic?.K ?? zeroConstant}</p>
            </StyledPItemList>
          </StyledPItem>
          <StyledPItem width="30%">
            <StyledPItemList>
              <p>{cropBalances[index]?.cropRemoval?.N ?? zeroConstant}</p>
              <p>{cropBalances[index]?.cropRemoval?.P ?? zeroConstant}</p>
              <p>{cropBalances[index]?.cropRemoval?.K ?? zeroConstant}</p>
            </StyledPItemList>
          </StyledPItem>
        </StyledPContainer>
      ))}

      {field.Nutrients?.nutrientFertilizers?.length > 0 && (
        <>
          <StyledH4HeaderItem width="30%">
            <h4>Fertilizer</h4>
          </StyledH4HeaderItem>
          {field.Nutrients?.nutrientFertilizers.map(
            (fertilizer: FertilizerInterface, idx: number) => (
              // Couldn't fix this ESLint rule since we allow for more then one of the same fert to be added
              // Order is probably never changing without a rerender, which is the problem this rule tries to avoid
              // eslint-disable-next-line react/no-array-index-key
              <StyledPContainer key={`${fertilizer.fertilizerId}-${idx}`}>
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
            ),
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
                icon={getResultsIcon(resultBalance.agronomic.N)}
                color={getResultIconColor(resultBalance.agronomic.N)}
              />
              {resultBalance.agronomic.N}
            </p>
            <p>
              <FontAwesomeIcon
                icon={getResultsIcon(resultBalance.agronomic.P)}
                color={getResultIconColor(resultBalance.agronomic.P)}
              />
              {resultBalance.agronomic.P}
            </p>
            <p>
              <FontAwesomeIcon
                icon={getResultsIcon(resultBalance.agronomic.K)}
                color={getResultIconColor(resultBalance.agronomic.K)}
              />
              {resultBalance.agronomic.K}
            </p>
          </StyledPItemList>
        </StyledPItem>
        <StyledPItem width="30%">
          <StyledPItemList>
            <p>
              <FontAwesomeIcon
                icon={getResultsIcon(resultBalance.cropRemoval.N || 0)}
                color={getResultIconColor(resultBalance.cropRemoval.N || 0)}
              />
              {resultBalance.cropRemoval.N || 0}
            </p>
            <p>
              <FontAwesomeIcon
                icon={getResultsIcon(resultBalance.cropRemoval.P)}
                color={getResultIconColor(resultBalance.cropRemoval.P)}
              />
              {resultBalance.cropRemoval.P}
            </p>
            <p>
              <FontAwesomeIcon
                icon={getResultsIcon(resultBalance.cropRemoval.K)}
                color={getResultIconColor(resultBalance.cropRemoval.K)}
              />
              {resultBalance.cropRemoval.K}
            </p>
          </StyledPItemList>
        </StyledPItem>
      </StyledPContainer>
    </DesktopView>
  );
};

export default CalculationList;
