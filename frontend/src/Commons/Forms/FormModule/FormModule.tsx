/**
 * @summary A Form Section, container for an Input Module
 * @desc A Form Module is a component that takes a form section container,
 *       containing a header and an Input Module
 *
 * @param InputModule: InputModuleInterface => Takes the InputModule to be rendered
 * @param farmDetails: FarmDetailsInterface => Main data object with farm and calculation data
 * @param updateFarmDetails: A setState function to modify the main data object (farmDetails)
 * with new farm farm information.
 * @param name: string => Name of the Form Section
 * @param enable: boolean => Expand or collapse form section upon render
 * @param faIcon: IconDefinition => Font Awesome IconDefinition to be passed to FormHeader component
 *
 * @example:
      <FormModule
        InputModule={farmInformation}
        farmDetails={farmDetails}
        name="Fields and Soil"
        faIcon={faWheatAwn}
        enable={false}
      />
 *
 * @author @GDamaso
 */
import { FC } from 'react';
import InputModuleInterface from 'src/Interface/InputModuleinterface.tsx';
import FarmDetailsInterface from 'src/Interface/FarmDetailsInterface.tsx';
import FormHeader from '../FormHeader/FormHeader.tsx';
import { StyledFormContainer, StyledFormContent } from './FormModule.style';

interface FormModuleProps {
  InputModule: InputModuleInterface;
  farmDetails: FarmDetailsInterface;
  updateFarmDetails(farmDetails: FarmDetailsInterface): void;
  handleFormState(moduleID: string, nextModuleID?: string): void;
  handleBackState?(): void;
}

const FormModule: FC<FormModuleProps> = ({
  InputModule,
  farmDetails,
  updateFarmDetails,
  handleFormState,
  handleBackState,
}) => {
  const { InputModuleComponent } = InputModule;

  return (
    <StyledFormContainer>
      <FormHeader
        inputModule={InputModule}
        handleFormState={handleFormState}
      />
      {InputModule.enable && (
        <StyledFormContent>
          <InputModuleComponent
            updateFarmDetails={updateFarmDetails}
            farmDetails={farmDetails}
            handleBackState={handleBackState}
          />
        </StyledFormContent>
      )}
    </StyledFormContainer>
  );
};

export default FormModule;
