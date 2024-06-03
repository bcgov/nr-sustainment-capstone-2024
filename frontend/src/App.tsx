import './App.css';
import HealthEndpoint from './Views/HealthCheck';
import FetchDevelopers from './Views/FetchDevelopers';
import Footer from './Views/Footer';

const App = () => (
  <>
    <HealthEndpoint />
    <FetchDevelopers />
    <Footer />
  </>
);

export default App;
