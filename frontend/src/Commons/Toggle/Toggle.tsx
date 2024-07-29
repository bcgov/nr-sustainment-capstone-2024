import { Dispatch, SetStateAction, FC, useState } from 'react';
import { StyledToggleButton, Thumb } from './Toggle.styles';

interface ToggleProps {
  onToggleChange: Dispatch<SetStateAction<boolean>>;
}

const Toggle: FC<ToggleProps> = ({ onToggleChange }) => {
  const [enabled, setLocalEnabled] = useState<boolean>(false);

  const handleToggle = () => {
    const newState = !enabled;
    setLocalEnabled(newState);
    onToggleChange(newState);
  };

  return (
    <StyledToggleButton
      enabled={enabled}
      type="button"
      onClick={handleToggle}
    >
      <Thumb enabled={enabled} />
    </StyledToggleButton>
  );
};

export default Toggle;
