/**
 *
 * @desc    Custom TextArea that aligns with the designer's mockup
 * @author  @Kcaparas
 */

import { Field } from 'formik';
import { FC } from 'react';
import StyledField from './CustomTextArea.styles';

interface CustomTextAreaProps {
  label: string;
  name: string;
  id: string;
  placeholder: string;
  width?: string;
}

const CustomTextArea: FC<CustomTextAreaProps> = ({
  label,
  id,
  placeholder,
  name,
  width = '100%',
}) => (
  <StyledField width={width}>
    <label htmlFor={id}>{label}</label>
    <Field
      as="textarea"
      placeholder={placeholder}
      name={name}
      id={id}
    />
  </StyledField>
);

export default CustomTextArea;
