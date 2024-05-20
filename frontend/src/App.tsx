import './App.css';
import HealthEndpoint from './components/HealthCheck';
import FetchDevelopers from './components/FetchDevelopers';

const App = () => (
  <>
    <HealthEndpoint />
    <FetchDevelopers />
  </>
);

export default App;
