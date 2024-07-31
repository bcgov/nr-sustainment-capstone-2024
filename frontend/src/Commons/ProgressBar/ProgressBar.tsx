// import React, { useEffect } from 'react';
import InputModuleInterface from 'src/Interface/InputModuleinterface';
import { FC } from 'react';
import ProgressItem from '../ProgressItem/ProgressItem';
import { Container, StyledProgressBar, StyledLineBlock } from './ProgressBar.styles';

interface ProgressBarProps {
  formStates: InputModuleInterface[];
  isHeaderVisible: boolean;
}

const ProgressBar: FC<ProgressBarProps> = ({ formStates, isHeaderVisible }) => (
  <Container isHeaderVisible={isHeaderVisible}>
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

export default ProgressBar;
