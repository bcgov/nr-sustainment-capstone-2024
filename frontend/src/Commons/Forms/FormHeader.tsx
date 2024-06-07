import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import StyledFormHeader from './Styles/FormHeader.style';

type FormHeaderTypes = {
  text: string;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const FormHeader = ({ text, active = false, setActive }: FormHeaderTypes) => {
  // const [clicked, setClicked] = useState(active);

  const handleClick = () => {
    setActive(!active);
    active = false;
    console.log(text, ' clicked');
  };
  return (
    <StyledFormHeader type="button" onClick={handleClick} active={active}>
      {text}
      <FontAwesomeIcon icon={active ? faChevronUp : faChevronDown} />
    </StyledFormHeader>
  );
};

// ESLint hates not having a default :p
// FormHeader.defaultProps = {
//   active: false,
// };

export default FormHeader;
