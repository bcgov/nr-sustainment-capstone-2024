/**
 * @desc A footer with links to our terms of agreement and BC NMP Help resource
 * @author @GDamaso
 */
import { Field, ErrorMessage } from 'formik';
import { FC, Dispatch, SetStateAction } from 'react';
import InformationIcons from '@Commons/InformationIcons/InformationIcons';
import { StyledField, StyledLabel } from './CustomField.style';
import '../ErrorMessage.css';

interface CustomFieldProps {
  label: string;
  name: string;
  id: string;
  type: string;
  width?: string;
  text?: string;
  rightPositioned?: boolean;
  toggleEnabled?: boolean;
  isBubbleDisplayed?: boolean;
  setDisplayedBubble?: Dispatch<SetStateAction<boolean>>;
}

const CustomField: FC<CustomFieldProps> = ({
  name,
  id,
  type,
  label,
  width = '100%',
  text,
  rightPositioned,
  toggleEnabled = false,
  isBubbleDisplayed,
  setDisplayedBubble,
}) => (
  <StyledField width={width}>
    <StyledLabel>
      <label htmlFor={id}>{label}</label>
      {text && (
        <span>
          <InformationIcons
            text={text}
            rightPositioned={rightPositioned}
            toggleEnabled={toggleEnabled}
            isBubbleDisplayed={isBubbleDisplayed}
            setDisplayedBubble={setDisplayedBubble}
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
