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
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import StyledFormHeader from './FormHeader.style';

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
