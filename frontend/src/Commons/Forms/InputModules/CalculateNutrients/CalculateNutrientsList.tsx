import { FC } from 'react';
import CropsDetailsInterface from '@Interface/CropsDetailsInterface';
import FertilizerInterface from '@Interface/FertilizerInterface';
import { faCircleCheck, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainBalanceInterface from '@Interface/MainBalanceInterface';
import FieldDetailInterface from '@Interface/FieldDetailsInterface';
import getFertilizerOption from '@Utils/getFertID';
import {
  CalcList,
  StyledRemoval,
  StyledAgronomic,
  StyledTable,
  StyledH3Item,
  StyledH3Container,
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
        <StyledH3Container>
          <StyledH3Item className="blankSpace">
            <h3>&nbsp;</h3>
          </StyledH3Item>
          <StyledH3Item>
            <h3>Agronomic (lb/ac)</h3>
          </StyledH3Item>
        </StyledH3Container>

        <StyledTable twoCrops={field.Crops.length > 1}>
          <thead>
            <tr>
              <th>
                <h4 className="col1">Crop</h4>
              </th>
              <th>
                <h4>N</h4>
              </th>
              <th>
                <h4>P2O5</h4>
              </th>
              <th>
                <h4>K2O</h4>
              </th>
            </tr>
          </thead>

          <tbody>
            {field.Crops.map((crop: CropsDetailsInterface, index: number) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={`${crop}-${index}`}>
                <td>
                  <p className="col1">{crop.cropId === '75' ? 'Blueberry' : 'Raspberry'}</p>
                </td>
                <td>
                  <p>{cropBalances[index]?.agronomic?.N ?? zeroConstant}</p>
                </td>
                <td>
                  <p>{cropBalances[index]?.agronomic?.P ?? zeroConstant}</p>
                </td>
                <td>
                  <p>{cropBalances[index]?.agronomic?.K ?? zeroConstant}</p>
                </td>
              </tr>
            ))}

            {field.Nutrients?.nutrientFertilizers?.length > 0 && (
              <>
                <tr>
                  <td>
                    <h4 className="col1">Fertilizer</h4>
                  </td>
                  <td>
                    <h4 className="blankSpace">&nbsp;</h4>
                  </td>
                </tr>

                {field.Nutrients?.nutrientFertilizers.map(
                  (fertilizer: FertilizerInterface, idx: number) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <tr key={`${fertilizer.fertilizerId}-${idx}`}>
                      <td>
                        <p className="col1">
                          {getFertilizerOption(fertilizer.fertilizerId.toString())?.label ??
                            fertilizer.fertilizerId}
                        </p>
                      </td>
                      <td>
                        <p>{fertilizer.fertN}</p>
                      </td>
                      <td>
                        <p>{fertilizer.fertP2o5}</p>
                      </td>
                      <td>
                        <p>{fertilizer.fertK2o}</p>
                      </td>
                    </tr>
                  ),
                )}
              </>
            )}

            <tr>
              <td>
                <StyledDivider />
              </td>
              <td>
                <StyledDivider />
              </td>
              <td>
                <StyledDivider />
              </td>
              <td>
                <StyledDivider />
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td>
                <p className="col1">Balance</p>
              </td>
              <td>
                <p>
                  <FontAwesomeIcon
                    icon={getResultsIcon(resultBalance.agronomic.N)}
                    color={getResultIconColor(resultBalance.agronomic.N)}
                  />
                  {resultBalance.agronomic.N}
                </p>
              </td>
              <td>
                <p>
                  <FontAwesomeIcon
                    icon={getResultsIcon(resultBalance.agronomic.P)}
                    color={getResultIconColor(resultBalance.agronomic.P)}
                  />
                  {resultBalance.agronomic.P}
                </p>
              </td>
              <td>
                <p>
                  <FontAwesomeIcon
                    icon={getResultsIcon(resultBalance.agronomic.K)}
                    color={getResultIconColor(resultBalance.agronomic.K)}
                  />
                  {resultBalance.agronomic.K}
                </p>
              </td>
            </tr>
          </tfoot>
        </StyledTable>
      </StyledAgronomic>

      <StyledRemoval>
        <StyledH3Item>
          <h3>Crop Removal (lb/ac)</h3>
        </StyledH3Item>

        <StyledTable twoCrops={field.Crops.length > 1}>
          <thead>
            <tr>
              <th>
                <h4 className="cropRemovalCol1 col1">Crop</h4>
              </th>
              <th>
                <h4>N</h4>
              </th>
              <th>
                <h4>P2O5</h4>
              </th>
              <th>
                <h4>K2O</h4>
              </th>
            </tr>
          </thead>

          <tbody>
            {field.Crops.map((crop: CropsDetailsInterface, index: number) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={`removal-${crop}-${index}`}>
                <td>
                  <p className="cropRemovalCol1 col1">
                    {crop.cropId === '75' ? 'Blueberry' : 'Raspberry'}
                  </p>
                </td>
                <td>
                  <p>{cropBalances[index]?.cropRemoval?.N ?? zeroConstant}</p>
                </td>
                <td>
                  <p>{cropBalances[index]?.cropRemoval?.P ?? zeroConstant}</p>
                </td>
                <td>
                  <p>{cropBalances[index]?.cropRemoval?.K ?? zeroConstant}</p>
                </td>
              </tr>
            ))}

            {field.Nutrients?.nutrientFertilizers?.length > 0 && (
              <>
                <tr>
                  <td>
                    <h4 className=" cropRemovalCol1 col1">Fertilizer</h4>
                  </td>
                  <td>
                    <h4>&nbsp;</h4>
                  </td>
                </tr>

                {field.Nutrients?.nutrientFertilizers.map(
                  (fertilizer: FertilizerInterface, idx: number) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <tr key={`${fertilizer.fertilizerId}-${idx}`}>
                      <td>
                        <p className="cropRemovalCol1 col1">
                          {getFertilizerOption(fertilizer.fertilizerId.toString())?.label ??
                            fertilizer.fertilizerId}
                        </p>
                      </td>
                      <td>
                        <p>{fertilizer.fertN}</p>
                      </td>
                      <td>
                        <p>{fertilizer.fertP2o5}</p>
                      </td>
                      <td>
                        <p>{fertilizer.fertK2o}</p>
                      </td>
                    </tr>
                  ),
                )}
              </>
            )}

            <tr>
              <td>
                <StyledDivider />
              </td>
              <td>
                <StyledDivider />
              </td>
              <td>
                <StyledDivider />
              </td>
              <td>
                <StyledDivider />
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td>
                <p className="cropRemovalCol1 col1">Balance</p>
              </td>
              <td>
                <p>
                  <FontAwesomeIcon
                    icon={getResultsIcon(resultBalance.cropRemoval.N || 0)}
                    color={getResultIconColor(resultBalance.cropRemoval.N || 0)}
                  />
                  {resultBalance.cropRemoval.N || 0}
                </p>
              </td>
              <td>
                <p>
                  <FontAwesomeIcon
                    icon={getResultsIcon(resultBalance.cropRemoval.P)}
                    color={getResultIconColor(resultBalance.cropRemoval.P)}
                  />
                  {resultBalance.cropRemoval.P}
                </p>
              </td>
              <td>
                <p>
                  <FontAwesomeIcon
                    icon={getResultsIcon(resultBalance.cropRemoval.K)}
                    color={getResultIconColor(resultBalance.cropRemoval.K)}
                  />
                  {resultBalance.cropRemoval.K}
                </p>
              </td>
            </tr>
          </tfoot>
        </StyledTable>
      </StyledRemoval>
    </CalcList>
  );
};

export default CalculationList;
