import React, { useState } from 'react';
import FormHeader from './FormHeader';
import { StyledFormContainer, StyledFormContent } from './Styles/FormModule.style';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type InputModuleType = React.ComponentType<{ className?: string }>;

interface FormModuleProps {
  InputModule: InputModuleType;
  name: string;
  enable: boolean;
  faIcon: IconDefinition;
}

const FormModule: React.FC<FormModuleProps> = ({ InputModule, name, enable, faIcon }) => {
  const [active, setActive] = useState(enable);

  return (
    <StyledFormContainer>
      <FormHeader text={name} active={active} setActive={setActive} faIcon={faIcon} />
      {active ? (
        <StyledFormContent>
          <InputModule />
        </StyledFormContent>
      ) : null}
    </StyledFormContainer>
  );
};

export default FormModule;
