import React, { useState } from 'react';
import FormHeader from './FormHeader';
import { StyledFormContainer, StyledFormContent } from './Styles/FormModule.style';

type InputModuleType = React.ComponentType<{ className?: string }>;

interface FormModuleProps {
  InputModule: InputModuleType;
  enable: boolean;
}

const FormModule: React.FC<FormModuleProps> = ({ InputModule, enable }) => {
  const [active, setActive] = useState(enable);

  return (

    <StyledFormContainer>
      <FormHeader text="Farm Information" active={active} setActive={setActive} />
      {active ? (
        <StyledFormContent>
          <InputModule />
        </StyledFormContent>
      ) : null}
    </StyledFormContainer>
  )
};

export default FormModule;
