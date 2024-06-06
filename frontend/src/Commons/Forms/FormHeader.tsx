import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import StyledFormHeader from '../Styles/FormHeader.style';

type FormHeaderTypes = {
  text: string;
};

const FormHeader = ({ text }: FormHeaderTypes) => {
  const handleClick = () => {
    console.log(text, ' clicked');
  };
  return (
    <StyledFormHeader type="button" onClick={handleClick}>
      {text}
      <FontAwesomeIcon icon={faChevronUp} />
    </StyledFormHeader>
  );
};

// ESLint hates not having a default :p
// FormHeaderTypes.defaultProps = {
// };

export default FormHeader;
