import '@bcgov/design-tokens/css/variables.css';
import '@bcgov/bc-sans/css/BC_Sans.css';
import StyledApp from './App.style';
import LandingPage from './Views/LandingPage/LandingPage.tsx';
import Header from './Commons/Header/Header.tsx';
import Footer from './Commons/Footer/Footer.tsx';

const App = () => (
  <StyledApp>
    <Header />
    <LandingPage />
    <Footer />
  </StyledApp>
);

export default App;
