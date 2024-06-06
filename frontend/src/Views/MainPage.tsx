import Header from '../Commons/Header';
import Footer from '../Commons/Footer';
import FormModule from '../Commons/Forms/FormModule';
import StyledMain from './Styles/MainPage.styles';
import Button from '../Commons/Button';

const MainPage = () => (
  <StyledMain>
    <Header />
    <FormModule InputModule={() => <Button text="Hello world!" path="/" />} />
    <Footer />
  </StyledMain>
);

export default MainPage;
