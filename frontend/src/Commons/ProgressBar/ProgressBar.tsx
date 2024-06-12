import {
  faCalculator,
  faCow,
  faList,
  faTractor,
  faWheatAwn,
} from '@fortawesome/free-solid-svg-icons';
import ProgressItem from './ProgressItem';
import { Container, StyledProgressBar, StyledLineBlock } from './ProgressBar.styles';

const ProgressBar = () => (
  <Container>
    <StyledProgressBar>
      <ProgressItem
        favIcon={faTractor}
        text="Farm Info"
        active
      />
      <ProgressItem
        favIcon={faWheatAwn}
        text="Fields"
      />
      <ProgressItem
        favIcon={faCow}
        text="Manure"
      />
      <ProgressItem
        favIcon={faCalculator}
        text="Calculate"
      />
      <ProgressItem
        favIcon={faList}
        text="Summary"
      />
    </StyledProgressBar>
    <StyledLineBlock />
  </Container>
);

export default ProgressBar;
