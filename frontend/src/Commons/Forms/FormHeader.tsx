import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import StyledFormHeader from './Styles/FormHeader.style';

type FormHeaderTypes = {
  text: string;
  active?: boolean;
};

const FormHeader = ({ text, active = false }: FormHeaderTypes) => {
  const [clicked, setClicked] = useState(active);

  const handleClick = () => {
    setClicked(!clicked);
    console.log(text, ' clicked');
  };
  console.log(clicked);
  return (
    <StyledFormHeader type="button" onClick={handleClick} clicked={clicked}>
      {text}
      <FontAwesomeIcon icon={clicked ? faChevronUp : faChevronDown} />
    </StyledFormHeader>
  );
};

// ESLint hates not having a default :p
// FormHeader.defaultProps = {
//   active: false,
// };

export default FormHeader;
