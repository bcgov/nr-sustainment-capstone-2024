/**
 * @desc A styled reusable formik compatible component
 * @author @GDamaso
 */
import { Field, ErrorMessage } from 'formik';
import React, { FC } from 'react';
import OptionInterface from 'src/Interface/OptionInterface';
import InformationIcons from '@Commons/InformationIcons/InformationIcons';
import { StyledSelect, StyledLabel } from './CustomSelect.style';
import '../ErrorMessage.css';

interface CustomSelectProps {
  label: string;
  name: string;
  id: string;
  options: OptionInterface[];
  mobileWidth?: string;
  desktopWidth?: string;
  formCalc?: boolean;
  text?: string;
  rightPositioned?: boolean;
  toggleEnabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelect: FC<CustomSelectProps> = ({
  name,
  id,
  label,
  mobileWidth = '100%',
  desktopWidth = '100%',
  options,
  onChange,
  text,
  rightPositioned,
  toggleEnabled,
  formCalc = false,
}) => (
  <StyledSelect
    mobileWidth={mobileWidth}
    desktopWidth={desktopWidth}
    formCalc={formCalc}
  >
    <StyledLabel>
      <label htmlFor={id}>
        {label}
        {text && (
          <span>
            <InformationIcons
              text={text}
              rightPositioned={rightPositioned}
              toggleEnabled={toggleEnabled}
            />
          </span>
        )}
      </label>
    </StyledLabel>
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
