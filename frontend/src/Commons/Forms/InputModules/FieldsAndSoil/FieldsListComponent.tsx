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
          {fieldCount > 1 && <StyledDivider />}
        </div>
      ))}
    </StyledFieldInfoList>
  );
};

export default FieldsListComponent;
