/**
 * @desc Main Page of Better Berries App
 * @author @GDamaso
 */
import Header from '@Commons/Header/Header.tsx';
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
    <Header />
    <StyledMainContainer>
      {mockBerriesWorkflow.map((formSection) => {
        // Not sure what type to use for `inputModule` here
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
