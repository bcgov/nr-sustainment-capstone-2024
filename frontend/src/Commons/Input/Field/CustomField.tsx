/**
 * @desc A footer with links to our terms of agreement and BC NMP Help resource
 * @author @GDamaso
 */
import { Field, ErrorMessage } from 'formik';
import { FC } from 'react';
import InformationIcons from '@Commons/InformationIcons/InformationIcons';
import { StyledField, StyledLabel } from './CustomField.style';
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
}

const CustomField: FC<CustomFieldProps> = ({
  name,
  id,
  type,
  label,
  mobileWidth = '100%',
  desktopWidth = '100%',
  text,
  rightPositioned,
  toggleEnabled = false,
}) => (
  <StyledField
    mobileWidth={mobileWidth}
    desktopWidth={desktopWidth}
  >
    <StyledLabel hasText={!text}>
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
    <Field
      name={name}
      id={id}
      type={type}
    />
    <ErrorMessage
      name={id}
      render={(msg) => <div className="errorMessage">{msg}</div>}
    />
  </StyledField>
);

export default CustomField;
