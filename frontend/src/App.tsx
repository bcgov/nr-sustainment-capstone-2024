import '@bcgov/design-tokens/css/variables.css';
import '@bcgov/bc-sans/css/BC_Sans.css';
import StyledApp from './App.style';
import LandingPage from './Views/LandingPage/LandingPage.tsx';

const App = () => (
  <StyledApp>
    <LandingPage />
  </StyledApp>
);

export default App;
