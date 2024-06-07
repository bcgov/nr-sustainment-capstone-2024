import Header from '../Commons/Header';
import Footer from '../Commons/Footer';
import FormModule from '../Commons/Forms/FormModule';
import StyledMain from './Styles/MainPage.styles';
import FarmInfoForm from '../Commons/Forms/InputModules/FarmInformation';

// const testInputModule = () => <Button text="Hello world!" path="/" />;
const farmInformation = () => <FarmInfoForm />;

const MainPage = () => (
  <StyledMain>
    <Header />
    <FormModule InputModule={farmInformation} />
    <Footer />
  </StyledMain>
);

export default MainPage;
