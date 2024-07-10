import { FC } from 'react';
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

const FieldsListComponent: FC<FieldListProps> = ({ farmDetails }) => {
  const fieldCount = farmDetails.Fields.length;
  // Will put this here for the meantime until I get insights from Product Owner
  const highValue = '25';
  const highPH = '4';

  return (
    <StyledFieldInfoList>
      {farmDetails.Fields.map((field: FieldDetailInterface) => (
        <div key={field.FieldName + field.Area + field.Comment}>
          <StyledListContainer>
            <StyledListItem width="160px">
              <h2>Field Name</h2>
              <p key={field.FieldName}>{field.FieldName}</p>
            </StyledListItem>
            <StyledListItem width="100px">
              <h2>Area</h2>
              <p key={field.Area}>{field.Area}</p>
            </StyledListItem>
            <StyledCommentContainerDesktop>
              <StyledListItem width="770px">
                <h2>Field Comments (optional)</h2>
                <p key={field.Comment}>{field.Comment}</p>
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
              <p key={field.Comment}>{field.Comment}</p>
            </StyledListItem>
          </StyledCommentContainerMobile>

          {field.HasSoilTest && (
            <StyledListItemGroupContainer>
              <StyledListItem width="300px">
                <h2>Lab (Soil Test Methods)</h2>
                <p key={field.SoilTest.TestingMethod}>
                  {field.HasSoilTest ? field.SoilTest.TestingMethod : ComponentText.NA}
                </p>
              </StyledListItem>
              <StyledListItem width="180px">
                <h2>Sampling Month</h2>
                <p key={field.SoilTest.sampleDate}>
                  {field.HasSoilTest ? field.SoilTest.sampleDate : ComponentText.NA}
                </p>
              </StyledListItem>
              <StyledListItemGroup>
                <StyledListItem width="180px">
                  <div className="smallItems">
                    <h2>NO3-N (ppm)</h2>
                    <p key={field.SoilTest.valNO3H}>
                      {field.HasSoilTest ? field.SoilTest.valNO3H : ComponentText.NA}
                    </p>
                  </div>
                </StyledListItem>
                <StyledListItem width="180px">
                  <div className="smallItems">
                    <h2>P (ppm)</h2>
                    <p key={field.SoilTest.ValP}>
                      {field.HasSoilTest ? field.SoilTest.ValP : highValue}
                    </p>
                  </div>
                </StyledListItem>
              </StyledListItemGroup>
              <StyledListItemGroup>
                <StyledListItem width="180px">
                  <div className="smallItems">
                    <h2>K (ppm)</h2>
                    <p key={field.SoilTest.valK}>
                      {field.HasSoilTest ? field.SoilTest.valK : highValue}
                    </p>
                  </div>
                </StyledListItem>
                <StyledListItem width="180px">
                  <div className="smallItems">
                    <h2>pH</h2>
                    <p key={field.SoilTest.valPH}>
                      {field.HasSoilTest ? field.SoilTest.valPH : highPH}
                    </p>
                  </div>
                </StyledListItem>
              </StyledListItemGroup>
              <StyledListItemGroup>
                <StyledListItem width="180px">
                  <h2>Leaf Tissue P(%)</h2>
                  <p key={field.LeafTest.leafTissueP}>
                    {field.HasLeafTest ? field.LeafTest.leafTissueP : highValue}
                  </p>
                </StyledListItem>
                <StyledListItem width="180px">
                  <h2>Leaf Tissue K(%)</h2>
                  <p key={field.LeafTest.leafTissueK}>
                    {field.HasLeafTest ? field.LeafTest.leafTissueK : highValue}
                  </p>
                </StyledListItem>
              </StyledListItemGroup>
            </StyledListItemGroupContainer>
          )}

          {fieldCount > 1 && <StyledDivider />}
        </div>
      ))}
    </StyledFieldInfoList>
  );
};

export default FieldsListComponent;
