import InputModuleInterface from 'src/Interface/InputModuleinterface';
import * as inputModules from '@Commons/Forms/InputModules/index';
import ProgressItem from '../ProgressItem/ProgressItem';
import { Container, StyledProgressBar, StyledLineBlock } from './ProgressBar.styles';

const mockBerriesWorkflow = [
  { InputModuleID: 'FarmInformation' },
  { InputModuleID: 'FieldsAndSoil' },
  { InputModuleID: 'CropsInformation' },
  { InputModuleID: 'ManureAndCompost' },
  { InputModuleID: 'Calculate' },
  { InputModuleID: 'Summary' },
];

const ProgressBar = () => (
  <Container>
    <StyledProgressBar>
      {mockBerriesWorkflow.map((progressItem) => {
        const InputModule: InputModuleInterface = (inputModules as any)[progressItem.InputModuleID];
        if (InputModule) {
          return (
            <ProgressItem
              InputModule={InputModule}
              key={progressItem.InputModuleID}
            />
          );
        }
        return null;
      })}
    </StyledProgressBar>
    <StyledLineBlock />
  </Container>
);

export default ProgressBar;
