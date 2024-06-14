/**
 * @desc A styled reusable formik compatible component
 * @author @GDamaso
 */
import { Field, ErrorMessage } from 'formik';
import { FC } from 'react';
import OptionInterface from 'src/Interface/OptionInterface';
import StyledSelect from './CustomSelect.style';

interface CustomSelectProps {
  label: string;
  name: string;
  id: string;
  options: OptionInterface[];
  width?: string;
}

const CustomSelect: FC<CustomSelectProps> = ({ name, id, label, width = '100%', options }) => (
  <StyledSelect width={width}>
    <label htmlFor={id}>
      <p>{label}</p>
    </label>
    <Field
      name={name}
      id={id}
      as="select"
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
    />
  </StyledSelect>
);

export default CustomSelect;
