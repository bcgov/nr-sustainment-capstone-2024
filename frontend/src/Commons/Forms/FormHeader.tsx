import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import StyledFormHeader from './Styles/FormHeader.style';

type FormHeaderTypes = {
  text: string;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  faIcon: IconDefinition;
};

const FormHeader = ({ text, active = false, setActive, faIcon }: FormHeaderTypes) => {
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <StyledFormHeader type="button" onClick={handleClick} active={active}>
      {text}
      <div>
        <FontAwesomeIcon icon={faIcon} style={{ marginRight: '8px' }} />
        <FontAwesomeIcon icon={active ? faChevronUp : faChevronDown} />
      </div>
    </StyledFormHeader>
  );
};

export default FormHeader;
