import FormHeader from './FormHeader';
import StyledFormModule from './Styles/FormModule.style';

type InputModuleType = React.ComponentType<{ className?: string; }>;

const FormModule: React.FC<{ InputModule: InputModuleType }> = ({ InputModule }) => (
  <StyledFormModule>
    <FormHeader text="Farm Information" active />
    <div>
      <InputModule />
    </div>
  </StyledFormModule>
);

export default FormModule;
