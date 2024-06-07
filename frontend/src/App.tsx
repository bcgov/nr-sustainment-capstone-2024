import '@bcgov/design-tokens/css/variables.css';
import '@bcgov/bc-sans/css/BC_Sans.css';
import LandingPage from './Views/LandingPage';
import Header from './Commons/Header';
import Footer from './Commons/Footer';

const App = () => (
  <>
    <Header />
    <LandingPage />
    <Footer />
  </>
);

export default App;
