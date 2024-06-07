import '@bcgov/design-tokens/css/variables.css';
import '@bcgov/bc-sans/css/BC_Sans.css';
import StyledApp from './Views/Styles/App.styles';
import LandingPage from './Views/LandingPage';
import Header from './Commons/Header';
import Footer from './Commons/Footer';

const App = () => (
  <StyledApp>
    <Header />
    <LandingPage />
    <Footer />
  </StyledApp>
);

export default App;
