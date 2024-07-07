import React from 'react';
import InputModuleProps from 'src/Interface/InputModuleProps';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FieldDetailInterface from 'src/Interface/FieldDetailsInterface';
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

const FieldsListComponent: React.FC<InputModuleProps> = ({ farmDetails }) => {
  const fieldCount = farmDetails.Fields.length;
  console.log(farmDetails.Fields[0].hasSoilTest);
  return (
    <StyledFieldInfoList>
      {farmDetails.Fields.map((fields: FieldDetailInterface) => (
        <div key={fields.FieldName + fields.Area + fields.Comment}>
          <StyledListContainer>
            <StyledListItem width="150px">
              <h2>Field Name</h2>
              <p key={fields.FieldName}>{fields.FieldName}</p>
            </StyledListItem>
            <StyledListItem width="100px">
              <h2>Area</h2>
              <p key={fields.Area}>{fields.Area}</p>
            </StyledListItem>
            <StyledCommentContainerDesktop>
              <StyledListItem width="500px">
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
            <StyledListItem width="290px">
              <h2>Lab (Soil Test Methods)</h2>
              <p key={fields.SoilTest.TestingMethod}>
                {fields.hasSoilTest ? fields.SoilTest.TestingMethod : 'N/A'}
              </p>
            </StyledListItem>
            <StyledListItem width="200px">
              <h2>Sampling Month</h2>
              <p key={fields.SoilTest.sampleDate}>
                {fields.hasSoilTest ? fields.SoilTest.sampleDate : 'N/A'}
              </p>
            </StyledListItem>
            <StyledListItemGroup>
              <StyledListItem width="180px">
                <h2>NO3-N (ppm)</h2>
                <p key={fields.SoilTest.valNO3H}>
                  {fields.hasSoilTest ? fields.SoilTest.valNO3H : 'N/A'}
                </p>
              </StyledListItem>
              <StyledListItem width="180px">
                <h2>P (ppm)</h2>
                <p key={fields.SoilTest.valP}>{fields.hasSoilTest ? fields.SoilTest.valP : '25'}</p>
              </StyledListItem>
            </StyledListItemGroup>
            <StyledListItemGroup>
              <StyledListItem width="180px">
                <h2>K (ppm)</h2>
                <p key={fields.SoilTest.valK}>{fields.hasSoilTest ? fields.SoilTest.valK : '25'}</p>
              </StyledListItem>
              <StyledListItem width="180px">
                <h2>pH</h2>
                <p key={fields.SoilTest.valPH}>
                  {fields.hasSoilTest ? fields.SoilTest.valPH : '4'}
                </p>
              </StyledListItem>
            </StyledListItemGroup>
          </StyledListItemGroupContainer>
          <StyledListItemGroup>
            <StyledListItem width="180px">
              <h2>Leaf Tissue P(%)</h2>
              <p key={fields.LeafTest.leafTissueP}>
                {fields.hasLeafTest ? fields.LeafTest.leafTissueP : '25'}
              </p>
            </StyledListItem>
            <StyledListItem width="180px">
              <h2>Leaf Tissue K(%)</h2>
              <p key={fields.LeafTest.leafTissueK}>
                {fields.hasLeafTest ? fields.LeafTest.leafTissueK : '25'}
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
