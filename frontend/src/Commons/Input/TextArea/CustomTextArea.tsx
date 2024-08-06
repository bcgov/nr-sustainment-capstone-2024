/**
 *
 * @desc    Custom TextArea that aligns with the designer's mockup
 * @author  @Kcaparas
 */

import { Field, ErrorMessage } from 'formik';
import { FC } from 'react';
import { StyledField, StyledLabel } from './CustomTextArea.styles';
import '../ErrorMessage.css';

interface CustomTextAreaProps {
  label: string;
  name: string;
  id: string;
  maxLength: number;
  placeholder: string;
  mobileWidth?: string;
  desktopWidth?: string;
}

const CustomTextArea: FC<CustomTextAreaProps> = ({
  label,
  id,
  placeholder,
  name,
  maxLength,
  mobileWidth = '100%',
  desktopWidth = '100%',
}) => (
  <StyledField
    mobileWidth={mobileWidth}
    desktopWidth={desktopWidth}
  >
    <StyledLabel>
      <label htmlFor={id}>{label}</label>
    </StyledLabel>
    <Field
      as="textarea"
      maxLength={maxLength}
      placeholder={placeholder}
      name={name}
      id={id}
    />
    <ErrorMessage
      name={id}
      render={(msg) => <div className="errorMessage">{msg}</div>}
    />
  </StyledField>
);

export default CustomTextArea;
