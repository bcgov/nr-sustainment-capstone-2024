/**
 * @desc A footer with links to our terms of agreement and BC NMP Help resource
 * @author @GDamaso
 */
import { Field, ErrorMessage } from 'formik';
import { FC } from 'react';
import InformationIcons from '@Commons/InformationIcons/InformationIcons';
import { StyledField, StyledLabel, StyledInputField } from './CustomField.style';
import '../ErrorMessage.css';

interface CustomFieldProps {
  label: string;
  name: string;
  id: string;
  type: string;
  mobileWidth?: string;
  desktopWidth?: string;
  text?: string;
  rightPositioned?: boolean;
  toggleEnabled?: boolean;
  acres?: string;
  isYield?: boolean;
}

const CustomField: FC<CustomFieldProps> = ({
  name,
  id,
  type,
  label,
  mobileWidth = '100%',
  desktopWidth = '100%',
  text,
  acres,
  isYield,
  rightPositioned,
  toggleEnabled = false,
}) => (
  <StyledField isYield={isYield}>
    <StyledLabel>
      <label htmlFor={id}>{label}</label>
      {text && (
        <span>
          <InformationIcons
            text={text}
            rightPositioned={rightPositioned}
            toggleEnabled={toggleEnabled}
          />
        </span>
      )}
    </StyledLabel>
    <StyledInputField
      mobileWidth={mobileWidth}
      desktopWidth={desktopWidth}
    >
      <Field
        name={name}
        id={id}
        type={type}
        width="100%"
      />
      {acres && <span>{acres}</span>}
    </StyledInputField>
    <ErrorMessage
      name={id}
      render={(msg) => <div className="errorMessage">{msg}</div>}
    />
  </StyledField>
);

export default CustomField;
