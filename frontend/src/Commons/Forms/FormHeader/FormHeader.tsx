/**
 * @summary A button you can click to collapse the form
 * @description The header defines a title, and an icon to act as a button,
 * collapsing and expanding the form section when clicked. It can also be set to start
 * expanded or collapsed
 *
 * @param text: string => Header Title
 * @param active: boolean => Expanded/Collapsed form state
 * @param setActive: SetStateAction => setAction state handler,
 *                   passed to set parent component state
 * @param faIcon: IconDefinition => Font Awesome Icon Definition
 *
 * @example:
 *    <FormHeader text={name} active={active} setActive={setActive} faIcon={faIcon} />
 *
 * @author @GDamaso
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import InputModuleInterface from 'src/Interface/InputModuleinterface';
import StyledFormHeader from './FormHeader.style';

interface FormHeaderProps {
  inputModule: InputModuleInterface;
  handleFormState: (moduleID: string, nextModuleID?: string) => void;
}

const FormHeader = ({ inputModule, handleFormState }: FormHeaderProps) => {
  const handleToggle = () => {
    handleFormState(inputModule.id);
  };

  return (
    <StyledFormHeader
      type="button"
      onClick={handleToggle}
      active={inputModule.enable}
    >
      {inputModule.name.long}
      <div>
        <FontAwesomeIcon
          icon={inputModule.faIcon}
          style={{ marginRight: '11px' }}
        />
        <FontAwesomeIcon icon={inputModule.enable ? faChevronUp : faChevronDown} />
      </div>
    </StyledFormHeader>
  );
};

export default FormHeader;
