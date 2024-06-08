import {
  faCalculator,
  faCow,
  faList,
  faTractor,
  faWheatAwn,
} from '@fortawesome/free-solid-svg-icons';
import Header from '../../Commons/Header/Header.tsx';
import Footer from '../../Commons/Footer/Footer.tsx';
import FormModule from '../../Commons/Forms/FormModule/FormModule.tsx';
import { StyledMain, StyledMainContainer } from './MainPage.styles';
import FarmInfoForm from '../../Commons/Forms/InputModules/FarmInformation/FarmInformation.tsx';

const farmInformation = () => <FarmInfoForm />;

const MainPage = () => (
  <StyledMain>
    <Header />
    <StyledMainContainer>
      <FormModule InputModule={farmInformation} name="Farm Information" faIcon={faTractor} enable />
      <FormModule
        InputModule={farmInformation}
        name="Fields and Soil"
        faIcon={faWheatAwn}
        enable={false}
      />
      <FormModule
        InputModule={farmInformation}
        name="Manure and Compost"
        faIcon={faCow}
        enable={false}
      />
      <FormModule
        InputModule={farmInformation}
        name="Calculate Nutrients"
        faIcon={faCalculator}
        enable={false}
      />
      <FormModule InputModule={farmInformation} name="Summary" faIcon={faList} enable={false} />
    </StyledMainContainer>
    <Footer />
  </StyledMain>
);

export default MainPage;
