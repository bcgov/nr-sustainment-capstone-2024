import { Dispatch, SetStateAction, FC } from 'react';
import { StyledToggleButton, Thumb } from './Toggle.styles';

interface ToggleProps {
  toggleEnabled: boolean;
  onToggleChange: Dispatch<SetStateAction<boolean>>;
}

const Toggle: FC<ToggleProps> = ({ toggleEnabled, onToggleChange }) => {
  const handleToggle = () => {
    onToggleChange(!toggleEnabled);
  };

  return (
    <StyledToggleButton
      enabled={toggleEnabled}
      type="button"
      onClick={handleToggle}
    >
      <Thumb enabled={toggleEnabled} />
    </StyledToggleButton>
  );
};

export default Toggle;
