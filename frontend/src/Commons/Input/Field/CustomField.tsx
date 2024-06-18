/**
 * @desc A footer with links to our terms of agreement and BC NMP Help resource
 *@author @GDamaso
 */
import { Field, ErrorMessage } from 'formik';
import { FC } from 'react';
import StyledField from './CustomField.style';

type CustomFieldSizes = 'sm' | 'md' | 'lg';
interface CustomFieldProps {
  label: string;
  name: string;
  id: string;
  type: string;
  size: CustomFieldSizes;
}

const CustomField: FC<CustomFieldProps> = ({ name, id, type, label, size = 'lg' }) => (
  <StyledField 
    size={size} 
  >
    <label htmlFor={id}>{label}</label>
    <Field
      name={name}
      id={id}
      type={type}
    />
    <ErrorMessage name={id} />
  </StyledField>
);

export default CustomField;
