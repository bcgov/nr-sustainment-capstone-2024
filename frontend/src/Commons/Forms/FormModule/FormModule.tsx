/**
 * @summary A Form Section, container for an Input Module
 * @desc A Form Module is a component that takes a form section container,
 *       containing a header and an Input Module
 *
 * @param InputModule: ComponentType<string> => Takes string name of a Component, InputModule
 * @param name: string => name of the Form Section
 * @param enable: boolean => expand or collapse form section upon render
 * @param faIcon: IconDefinition => Font Awesome IconDefinition to be passed to FormHeader component
 *
 * @example:
      <FormModule
        InputModule={farmInformation}
        name="Fields and Soil"
        faIcon={faWheatAwn}
        enable={false}
      />
 *
 * @author @GDamaso
 */
import React, { useState } from 'react';
import FormHeader from '../FormHeader/FormHeader.tsx';
import { StyledFormContainer, StyledFormContent } from './FormModule.style';
import InputModuleInterface from 'src/Interface/InputModuleinterface.tsx';

interface FormModuleProps {
  InputModule: InputModuleInterface;
}

const FormModule: React.FC<FormModuleProps> = ({ InputModule }) => {
  const { InputModuleComponent, name, enable, faIcon } = InputModule;
  const [active, setActive] = useState(enable);

  return (
    <StyledFormContainer>
      <FormHeader text={name} active={active} setActive={setActive} faIcon={faIcon} />
      {active ? (
        <StyledFormContent>
          <InputModuleComponent />
        </StyledFormContent>
      ) : null}
    </StyledFormContainer>
  );
};

export default FormModule;
