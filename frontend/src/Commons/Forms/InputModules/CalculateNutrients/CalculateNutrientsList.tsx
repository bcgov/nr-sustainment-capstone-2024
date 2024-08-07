import { FC, Fragment } from 'react';
import CropsDetailsInterface from '@Interface/CropsDetailsInterface';
import FertilizerInterface from '@Interface/FertilizerInterface';
import { faCircleCheck, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainBalanceInterface from '@Interface/MainBalanceInterface';
import FieldDetailInterface from '@Interface/FieldDetailsInterface';
import getFertilizerOption from '@Utils/getFertID';
import {
  StyledH3HeaderContainer,
  StyledH3HeaderItem,
  StyledH4HeaderItem,
  StyledPItem,
  CalcList,
  StyledGrid,
  StyledRemoval,
  StyledAgronomic,
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
    <CalcList>
      <StyledAgronomic>
        <StyledH3HeaderContainer>
          <StyledH3HeaderItem width="30%">
            <h3>Agronomic (lb/ac)</h3>
          </StyledH3HeaderItem>
        </StyledH3HeaderContainer>

        <StyledGrid>
          <StyledH4HeaderItem width="30%">
            <h4>Crop</h4>
          </StyledH4HeaderItem>
          <StyledH4HeaderItem width="30%">
            <h4>N</h4>
          </StyledH4HeaderItem>
          <StyledH4HeaderItem width="30%">
            <h4>P2O5</h4>
          </StyledH4HeaderItem>
          <StyledH4HeaderItem width="30%">
            <h4>K2O</h4>
          </StyledH4HeaderItem>
          {field.Crops.map((crop: CropsDetailsInterface, index: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <Fragment key={`${crop}-${index}`}>
              <StyledPItem width="30%">
                <p>{crop.cropId === '75' ? 'Blueberry' : 'Raspberry'}</p>
              </StyledPItem>
              <StyledPItem width="30%">
                <p>{cropBalances[index]?.agronomic?.N ?? zeroConstant}</p>
              </StyledPItem>
              <StyledPItem width="30%">
                <p>{cropBalances[index]?.agronomic?.P ?? zeroConstant}</p>
              </StyledPItem>
              <StyledPItem width="30%">
                <p>{cropBalances[index]?.agronomic?.K ?? zeroConstant}</p>
              </StyledPItem>
            </Fragment>
          ))}

          {field.Nutrients?.nutrientFertilizers?.length > 0 && (
            <>
              <StyledH4HeaderItem
                width="30%"
                className="fullRow"
              >
                <h4>Fertilizer</h4>
              </StyledH4HeaderItem>
              {field.Nutrients?.nutrientFertilizers.map(
                (fertilizer: FertilizerInterface, idx: number) => (
                  // Couldn't fix this ESLint rule since we allow for more then one of the same fert to be added
                  // Order is probably never changing without a rerender, which is the problem this rule tries to avoid
                  // eslint-disable-next-line react/no-array-index-key
                  <Fragment key={`${fertilizer.fertilizerId}-${idx}`}>
                    <p>
                      {getFertilizerOption(fertilizer.fertilizerId.toString())?.label ??
                        fertilizer.fertilizerId}
                    </p>
                    <StyledPItem width="30%">
                      <p>{fertilizer.fertN}</p>
                    </StyledPItem>
                    <StyledPItem width="30%">
                      <p>{fertilizer.fertP2o5}</p>
                    </StyledPItem>
                    <StyledPItem width="30%">
                      <p>{fertilizer.fertK2o}</p>
                    </StyledPItem>
                  </Fragment>
                ),
              )}
            </>
          )}

          <StyledDivider className="fullRow" />
          <StyledPItem width="30%">
            <p>Balance</p>
          </StyledPItem>
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
        </StyledGrid>
      </StyledAgronomic>

      <StyledRemoval>
        <StyledH3HeaderContainer>
          <StyledH3HeaderItem width="30%">
            <h3>Crop Removal (lb/ac)</h3>
          </StyledH3HeaderItem>
        </StyledH3HeaderContainer>

        <StyledGrid>
          <StyledH4HeaderItem
            width="30%"
            className="cropRemovalCol1"
          >
            <h4>Crop</h4>
          </StyledH4HeaderItem>
          <StyledH4HeaderItem width="30%">
            <h4>N</h4>
          </StyledH4HeaderItem>
          <StyledH4HeaderItem width="30%">
            <h4>P2O5</h4>
          </StyledH4HeaderItem>
          <StyledH4HeaderItem width="30%">
            <h4>K2O</h4>
          </StyledH4HeaderItem>
          {field.Crops.map((crop: CropsDetailsInterface, index: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <Fragment key={`${crop}-${index}`}>
              <StyledPItem
                width="30%"
                className="cropRemovalCol1"
              >
                <p>{crop.cropId === '75' ? 'Blueberry' : 'Raspberry'}</p>
              </StyledPItem>
              <StyledPItem width="30%">
                <p>{cropBalances[index]?.cropRemoval?.N ?? zeroConstant}</p>
              </StyledPItem>
              <StyledPItem width="30%">
                <p>{cropBalances[index]?.cropRemoval?.P ?? zeroConstant}</p>
              </StyledPItem>
              <StyledPItem width="30%">
                <p>{cropBalances[index]?.cropRemoval?.K ?? zeroConstant}</p>
              </StyledPItem>
            </Fragment>
          ))}

          {field.Nutrients?.nutrientFertilizers?.length > 0 && (
            <>
              <StyledH4HeaderItem
                width="30%"
                className="fullRow cropRemovalCol1"
              >
                <h4>Fertilizer</h4>
              </StyledH4HeaderItem>
              {field.Nutrients?.nutrientFertilizers.map(
                (fertilizer: FertilizerInterface, idx: number) => (
                  // Couldn't fix this ESLint rule since we allow for more then one of the same fert to be added
                  // Order is probably never changing without a rerender, which is the problem this rule tries to avoid
                  // eslint-disable-next-line react/no-array-index-key
                  <Fragment key={`${fertilizer.fertilizerId}-${idx}`}>
                    <p>
                      {getFertilizerOption(fertilizer.fertilizerId.toString())?.label ??
                        fertilizer.fertilizerId}
                    </p>
                    <StyledPItem width="30%">
                      <p>{fertilizer.fertN}</p>
                    </StyledPItem>
                    <StyledPItem width="30%">
                      <p>{fertilizer.fertP2o5}</p>
                    </StyledPItem>
                    <StyledPItem width="30%">
                      <p>{fertilizer.fertK2o}</p>
                    </StyledPItem>
                  </Fragment>
                ),
              )}
            </>
          )}

          <StyledDivider className="fullRow" />
          <StyledPItem width="30%">
            <p>Balance</p>
          </StyledPItem>
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
        </StyledGrid>
      </StyledRemoval>
    </CalcList>
  );
};

export default CalculationList;
