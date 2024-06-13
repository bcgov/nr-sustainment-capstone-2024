import '@bcgov/design-tokens/css/variables.css';
import '@bcgov/bc-sans/css/BC_Sans.css';
import LandingPageHeader from '@Commons/LandingPageHeader/LandingPageHeader.tsx';
import Footer from '@Commons/Footer/Footer.tsx';
import StyledApp from './App.style';
import LandingPage from './Views/LandingPage/LandingPage.tsx';

const App = () => (
  <StyledApp>
    <LandingPageHeader />
    <LandingPage />
    <Footer />
  </StyledApp>
);

export default App;
