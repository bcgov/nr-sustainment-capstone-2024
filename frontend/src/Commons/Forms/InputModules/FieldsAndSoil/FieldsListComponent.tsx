import { FC } from 'react';
import ComponentText from '@Constants/ComponentText';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
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
  StyledListItemGroupContainer,
  StyledListItemGroup,
  StyledList,
} from '../ListComponent.styles';

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
      {farmDetails.Fields.map((field: FieldDetailInterface) => {
        const { FieldName, Area, Comment, HasSoilTest, SoilTest, HasLeafTest, LeafTest } = field;

        return (
          <StyledList
            key={`${FieldName}-${Area}-${Comment || 'NoComment'}`}
            fieldCount={fieldCount}
          >
            <StyledListContainer>
              <StyledListItem
                desktopWidth="135px"
                mobileWidth="124px"
                marginRight="120px"
              >
                <h2>Field Name</h2>
                <p>{FieldName}</p>
              </StyledListItem>
              <StyledListItem
                desktopWidth="50px"
                mobileWidth="50px"
                marginRight="120px"
              >
                <h2>Area</h2>
                <p>{Area}</p>
              </StyledListItem>
              <StyledCommentContainerDesktop>
                <StyledListItem desktopWidth="743px">
                  <h2>Field Comments (optional)</h2>
                  {Comment && <p>{Comment}</p>}
                </StyledListItem>
              </StyledCommentContainerDesktop>
              <StyledFontAwesomeContainer>
                <FontAwesomeIcon icon={faPencil} />
                <FontAwesomeIcon icon={faTrashCan} />
              </StyledFontAwesomeContainer>
            </StyledListContainer>

            <StyledCommentContainerMobile>
              <StyledListItem mobileWidth="322px">
                <h2>Field Comments (optional)</h2>
                {Comment && <p>{Comment}</p>}
              </StyledListItem>
            </StyledCommentContainerMobile>

            <StyledListItemGroupContainer>
              <StyledListItem
                desktopWidth="230px"
                mobileWidth="234px"
                marginRight="195px"
              >
                <h2>Lab (Soil Test Methods)</h2>
                <p>{HasSoilTest ? SoilTest.TestingMethod : ComponentText.NA}</p>
              </StyledListItem>
              <StyledListItem
                desktopWidth="149px"
                mobileWidth="136px"
                marginRight="50px"
              >
                <h2>Sampling Month</h2>
                <p>{HasSoilTest ? SoilTest.sampleDate : ComponentText.NA}</p>
              </StyledListItem>
              <StyledListItemGroup desktopWidth="25%">
                <StyledListItem
                  desktopWidth="128px"
                  mobileWidth="180px"
                  marginRight="50px"
                >
                  <h2>NO3-N (ppm)</h2>
                  <p>{HasSoilTest ? SoilTest.valNO3H : ComponentText.NA}</p>
                </StyledListItem>
                <StyledListItem
                  desktopWidth="104px"
                  mobileWidth="180px"
                >
                  <h2>P (ppm)</h2>
                  <p>{HasSoilTest ? SoilTest.ValP : highValue}</p>
                </StyledListItem>
              </StyledListItemGroup>
              <StyledListItemGroup desktopWidth="25%">
                <StyledListItem
                  desktopWidth="104px"
                  mobileWidth="180px"
                  marginRight="50px"
                >
                  <h2>K (ppm)</h2>
                  <p>{HasSoilTest ? SoilTest.valK : highValue}</p>
                </StyledListItem>
                <StyledListItem
                  desktopWidth="26px"
                  mobileWidth="180px"
                  marginRight="50px"
                >
                  <h2>pH</h2>
                  <p>{HasSoilTest ? SoilTest.valPH : highPH}</p>
                </StyledListItem>
              </StyledListItemGroup>
            </StyledListItemGroupContainer>
            <StyledListItemGroupContainer>
              <StyledListItemGroup desktopWidth="50%">
                <StyledListItem
                  desktopWidth="145px"
                  mobileWidth="180px"
                  marginRight="110px"
                >
                  <h2>Leaf Tissue P(%)</h2>
                  <p>{HasLeafTest ? LeafTest.leafTissueP : highValue}</p>
                </StyledListItem>
                <StyledListItem
                  desktopWidth="146px"
                  mobileWidth="180px"
                >
                  <h2>Leaf Tissue K(%)</h2>
                  <p>{HasLeafTest ? LeafTest.leafTissueK : highValue}</p>
                </StyledListItem>
              </StyledListItemGroup>
            </StyledListItemGroupContainer>
          </StyledList>
        );
      })}
    </StyledFieldInfoList>
  );
};

export default FieldsListComponent;
