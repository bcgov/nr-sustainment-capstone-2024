/**
 * @desc A footer with links to our terms of agreement and BC NMP Help resource
 *@author @GDamaso
 */
import { Field, ErrorMessage } from 'formik';
import StyledField from './CustomField.style';

interface CustomFieldProps {
  label: string;
  name: string;
  id: string;
  type: string;
  width?: string;
}

const CustomField: React.FC<CustomFieldProps> = ({ name, id, type, label, width = '100%' }) => (
  <StyledField width={width}>
    <label htmlFor={id}>
      <p>{label}</p>
    </label>
    <Field
      name={name}
      id={id}
      type={type}
    />
    <ErrorMessage name={id} />
  </StyledField>
);

export default CustomField;
