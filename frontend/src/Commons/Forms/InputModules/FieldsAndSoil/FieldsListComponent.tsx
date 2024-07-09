import React from 'react';
import InputModuleProps from 'src/Interface/InputModuleProps';
import ComponentText from '@Constants/ComponentText';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FieldDetailInterface from '@Interface/FieldDetailsInterface';
import FarmDetailsInterface from '@Interface/FarmDetailsInterface';
import {
  StyledListContainer,
  StyledListItem,
  StyledFontAwesomeContainer,
  StyledFieldInfoList,
  StyledCommentContainerDesktop,
  StyledCommentContainerMobile,
  StyledDivider,
  StyledListItemGroupContainer,
  StyledListItemGroup,
} from './FieldsListComponent.styles';

interface FieldListProps {
  farmDetails: FarmDetailsInterface;
}

const FieldsListComponent: React.FC<FieldListProps> = ({ farmDetails }) => {
  const fieldCount = farmDetails.Fields.length;
  // Will put this here for the meantime until I get insights from Product Owner
  const highValue = '25';
  const highPH = '4';
  console.log(farmDetails.Fields[0].hasSoilTest);
  return (
    <StyledFieldInfoList>
      {farmDetails.Fields.map((fields: FieldDetailInterface) => (
        <div key={fields.FieldName + fields.Area + fields.Comment}>
          <StyledListContainer>
            <StyledListItem width="160px">
              <h2>Field Name</h2>
              <p key={fields.FieldName}>{fields.FieldName}</p>
            </StyledListItem>
            <StyledListItem width="100px">
              <h2>Area</h2>
              <p key={fields.Area}>{fields.Area}</p>
            </StyledListItem>
            <StyledCommentContainerDesktop>
              <StyledListItem width="770px">
                <h2>Field Comments (optional)</h2>
                <p key={fields.Comment}>{fields.Comment}</p>
              </StyledListItem>
            </StyledCommentContainerDesktop>
            <StyledFontAwesomeContainer>
              <FontAwesomeIcon icon={faPencil} />
              <FontAwesomeIcon icon={faTrash} />
            </StyledFontAwesomeContainer>
          </StyledListContainer>
          <StyledCommentContainerMobile>
            <StyledListItem width="100%">
              <h2>Field Comments (optional)</h2>
              <p key={fields.Comment}>{fields.Comment}</p>
            </StyledListItem>
          </StyledCommentContainerMobile>
          <StyledListItemGroupContainer>
            <StyledListItem width="300px">
              <h2>Lab (Soil Test Methods)</h2>
              <p key={fields.SoilTest.TestingMethod}>
                {fields.hasSoilTest ? fields.SoilTest.TestingMethod : ComponentText.NA}
              </p>
            </StyledListItem>
            <StyledListItem width="180px">
              <h2>Sampling Month</h2>
              <p key={fields.SoilTest.sampleDate}>
                {fields.hasSoilTest ? fields.SoilTest.sampleDate : ComponentText.NA}
              </p>
            </StyledListItem>
            <StyledListItemGroup>
              <StyledListItem width="180px">
                <div className="smallItems">
                  <h2>NO3-N (ppm)</h2>
                  <p key={fields.SoilTest.valNO3H}>
                    {fields.hasSoilTest ? fields.SoilTest.valNO3H : ComponentText.NA}
                  </p>
                </div>
              </StyledListItem>
              <StyledListItem width="180px">
                <div className="smallItems">
                  <h2>P (ppm)</h2>
                  <p key={fields.SoilTest.valP}>
                    {fields.hasSoilTest ? fields.SoilTest.valP : highValue}
                  </p>
                </div>
              </StyledListItem>
            </StyledListItemGroup>
            <StyledListItemGroup>
              <StyledListItem width="180px">
                <div className="smallItems">
                  <h2>K (ppm)</h2>
                  <p key={fields.SoilTest.valK}>
                    {fields.hasSoilTest ? fields.SoilTest.valK : highValue}
                  </p>
                </div>
              </StyledListItem>
              <StyledListItem width="180px">
                <div className="smallItems">
                  <h2>pH</h2>
                  <p key={fields.SoilTest.valPH}>
                    {fields.hasSoilTest ? fields.SoilTest.valPH : highPH}
                  </p>
                </div>
              </StyledListItem>
            </StyledListItemGroup>
          </StyledListItemGroupContainer>
          <StyledListItemGroup>
            <StyledListItem width="180px">
              <h2>Leaf Tissue P(%)</h2>
              <p key={fields.LeafTest.leafTissueP}>
                {fields.hasLeafTest ? fields.LeafTest.leafTissueP : highValue}
              </p>
            </StyledListItem>
            <StyledListItem width="180px">
              <h2>Leaf Tissue K(%)</h2>
              <p key={fields.LeafTest.leafTissueK}>
                {fields.hasLeafTest ? fields.LeafTest.leafTissueK : highValue}
              </p>
            </StyledListItem>
          </StyledListItemGroup>
          {fieldCount > 1 && <StyledDivider />}
        </div>
      ))}
    </StyledFieldInfoList>
  );
};

export default FieldsListComponent;
