import React from 'react';
import InputModuleProps from 'src/Interface/InputModuleProps';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  StyledListContainer,
  StyledListItem,
  StyledFontAwesomeContainer,
  StyledFieldInfoList,
  StyledCommentContainerDesktop,
  StyledCommentContainerMobile,
  StyledDivider,
} from './FieldsListComponent.styles';

const FieldsListComponent: React.FC<InputModuleProps> = ({ farmDetails }) => (
  <StyledFieldInfoList>
    {farmDetails.Fields.slice(1).map((fields) => (
      <div key={fields.id}>
        <StyledListContainer>
          <StyledListItem width="30%">
            <h2>Field Name</h2>
            <p key={fields.FieldName}>{fields.FieldName}</p>
          </StyledListItem>
          <StyledListItem width="20%">
            <h2>Area</h2>
            <p key={fields.Area}>{fields.Area}</p>
          </StyledListItem>
          <StyledCommentContainerDesktop>
            <StyledListItem width="90%">
              <h2>Field Comments (optional)</h2>
              <p key={fields.Comments}>{fields.Comments}</p>
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
            <p key={fields.Comments}>{fields.Comments}</p>
          </StyledListItem>
        </StyledCommentContainerMobile>
        <StyledDivider />
      </div>
    ))}
  </StyledFieldInfoList>
);

export default FieldsListComponent;
