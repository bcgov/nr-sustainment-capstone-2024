import FormHeader from './FormHeader';
import { StyledFormContainer, StyledFormContent } from './Styles/FormModule.style';

type InputModuleType = React.ComponentType<{ className?: string }>;

const FormModule: React.FC<{ InputModule: InputModuleType }> = ({ InputModule }) => (
  <StyledFormContainer>
    <FormHeader text="Farm Information" active />
    <StyledFormContent>
      <InputModule />
    </StyledFormContent>
  </StyledFormContainer>
);

export default FormModule;
