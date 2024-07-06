import React, { useEffect } from 'react';
import InputModuleInterface from 'src/Interface/InputModuleinterface';
import ProgressItem from '../ProgressItem/ProgressItem';
import { Container, StyledProgressBar, StyledLineBlock } from './ProgressBar.styles';

interface ProgressBarProps {
  formStates: InputModuleInterface[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ formStates }) => {
  useEffect(() => {
    if (formStates) {
      console.log('PG State');
    }
  }, [formStates]);

  return (
    <Container>
      <StyledProgressBar>
        {formStates.map((progressItem) => (
          <ProgressItem
            InputModule={progressItem}
            key={progressItem.id}
          />
        ))}
      </StyledProgressBar>
      <StyledLineBlock />
    </Container>
  );
};

export default ProgressBar;
