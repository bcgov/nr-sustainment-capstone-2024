/**
 * @desc A footer with links to our terms of agreement and BC NMP Help resource
 *@author @Kcaparas
 */
import React, { FC } from 'react';
import { Field } from 'formik';
import { StyledField, StyledRadio } from './CustomRadioButton.style';
import '../ErrorMessage.css';

interface CustomRadioProps {
  label: string;
  name: string;
  id: string;
  type: string;
  width?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomRadioButton: FC<CustomRadioProps> = ({
  name,
  id,
  type,
  label,
  width = '100%',
  checked,
  onChange,
}) => (
  <StyledField width={width}>
    <StyledRadio>
      <Field
        name={name}
        id={id}
        type={type}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </StyledRadio>
  </StyledField>
);

export default CustomRadioButton;
