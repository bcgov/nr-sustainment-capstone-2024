import '@bcgov/design-tokens/css/variables.css';
import '@bcgov/bc-sans/css/BC_Sans.css';
import HealthEndpoint from './Views/HealthCheck';
import FetchDevelopers from './Views/FetchDevelopers';
import Header from './Commons/Header/Header';

const App = () => (
  <>
    <Header />
    <HealthEndpoint />
    <FetchDevelopers />
    <Footer />
  </>
);

export default App;
