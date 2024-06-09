/**
 * @desc Main Page of Better Berries App
 * @author @GDamaso
 */
import MainPageHeader from '@Commons/MainPageHeader/MainPageHeader';
import FormModule from '@Commons/Forms/FormModule/FormModule.tsx';
import * as inputModules from '@Commons/Forms/InputModules/index';
import InputModuleInterface from 'src/Interface/InputModuleinterface';
import { StyledMain, StyledMainContainer } from './MainPage.styles';

const mockBerriesWorkflow = [
  { formSectionID: 'FarmInformation' },
  { formSectionID: 'FieldsAndSoil' },
  { formSectionID: 'ManureAndCompost' },
  { formSectionID: 'Calculate' },
  { formSectionID: 'Summary' },
];

const MainPage = () => (
  <StyledMain>
    <MainPageHeader />
    <StyledMainContainer>
      {mockBerriesWorkflow.map((formSection) => {
        console.log(formSection.formSectionID);
        const InputModule: InputModuleInterface = (inputModules as any)[formSection.formSectionID];
        if (InputModule) {
          return <FormModule InputModule={InputModule} key={formSection.formSectionID} />;
        }
        return null;
      })}
    </StyledMainContainer>
  </StyledMain>
);

export default MainPage;
