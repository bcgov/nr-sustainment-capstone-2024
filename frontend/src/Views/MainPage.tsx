import Header from '../Commons/Header';
import Footer from '../Commons/Footer';
import FormModule from '../Commons/Forms/FormModule';
import { StyledMain, StyledMainContainer } from './Styles/MainPage.styles';
import FarmInfoForm from '../Commons/Forms/InputModules/FarmInformation';

// const testInputModule = () => <Button text="Hello world!" path="/" />;
const farmInformation = () => <FarmInfoForm />;

const MainPage = () => {
  return (
    <StyledMain>
      <Header />
      <StyledMainContainer>
        <FormModule InputModule={farmInformation} enable={true} />
        <FormModule InputModule={farmInformation} enable={false} />
      </StyledMainContainer>
      <Footer />
    </StyledMain>
  );
};

export default MainPage;
