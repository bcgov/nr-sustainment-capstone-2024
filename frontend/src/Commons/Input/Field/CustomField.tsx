/**
 * @desc A footer with links to our terms of agreement and BC NMP Help resource
 *@author @GDamaso
 */
import { Field, ErrorMessage } from 'formik';
import { FC } from 'react';
import StyledField from './CustomField.style';

interface CustomFieldProps {
  label: string;
  name: string;
  id: string;
  type: string;
  width?: string;
  units?: string;
  showUnits: boolean;
}

const CustomField: FC<CustomFieldProps> = ({ name, id, type, label, width = '100%', units = 'acres', showUnits = false }) => (
  <StyledField width={width}>
    <label htmlFor={id}>{label}</label>
    <div id="unitsContainer">
      <Field
        name={name}
        id={id}
        type={type}
      />
      {showUnits ? <p>{ units }</p> : null }
    </div>
    <ErrorMessage name={id} />
  </StyledField>
);

export default CustomField;
