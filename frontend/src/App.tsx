import '@bcgov/design-tokens/css/variables.css';
import '@bcgov/bc-sans/css/BC_Sans.css';
import Header from './Commons/Header';
import Footer from './Commons/Footer';
import Button from './Commons/Button';

const App = () => (
  <>
    <Header />
    <Button text="New Calculation" />
    <Footer />
  </>
);

export default App;
