/**
 * @desc A styled reusable formik compatible component
 * @author @GDamaso
 */
import { Field, ErrorMessage } from 'formik';
import React, { FC } from 'react';
import OptionInterface from 'src/Interface/OptionInterface';
import StyledSelect from './CustomSelect.style';
import '../ErrorMessage.css';

interface CustomSelectProps {
  label: string;
  name: string;
  id: string;
  options: OptionInterface[];
  width?: string;
  formCalc?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelect: FC<CustomSelectProps> = ({
  name,
  id,
  label,
  width = '100%',
  options,
  onChange,
  formCalc = false,
}) => (
  <StyledSelect
    width={width}
    formCalc={formCalc}
  >
    <label htmlFor={id}>{label}</label>
    <Field
      name={name}
      id={id}
      as="select"
      onChange={onChange}
    >
      <option
        value=""
        defaultValue="true"
      >
        Select an Option
      </option>

      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </Field>
    <ErrorMessage
      name={id}
      component="span"
      render={(msg) => <div className="errorMessage">{msg}</div>}
    />
  </StyledSelect>
);

export default CustomSelect;
