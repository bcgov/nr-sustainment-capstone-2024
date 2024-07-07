/**
 * @summary Farm Information Input Module
 * @description A module with input fields to be used in a Form Module
 * @author @GDamaso
 */
import InputModuleInterface from 'src/Interface/InputModuleinterface';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import InputModuleProps from 'src/Interface/InputModuleProps';
import React, { useState } from 'react';
// import initialFarmDetails from '@Constants/InitialFarmDetails';
import ComponentText from '@Constants/ComponentText';
import ButtonGroup from '@Commons/Button/FieldButtonGroup';
import FarmDetailsInterface from 'src/Interface/FarmDetailsInterface';
import CropsListComponent from './CropsList';

const CropsInfoComponent: React.FC<InputModuleProps> = ({
  farmDetails,
  updateFarmDetails,
  handleFormState,
}) => {
  //   const [fieldIndex, setFieldIndex] = useState(0);
  //   const [initialFieldValues, setInitialFieldValues] = useState(
  //     initialFarmDetails.Fields[fieldIndex],
  //   );
  // Only triggered once, it would show list and persists.
  //   const [isSubmitted, setSubmitted] = useState<boolean>(false);
  // Would trigger when new field button is clicked.
  const [, setFieldAdd] = useState<boolean>(false);

  const submitFarmInfo = () => {
    const farmInfo: FarmDetailsInterface = { ...farmDetails };
    updateFarmDetails(farmInfo);
  };
  const addNewField = () => {
    setFieldAdd(true);
  };
  return (
    <>
      <CropsListComponent
        farmDetails={farmDetails}
        updateFarmDetails={updateFarmDetails}
        handleFormState={handleFormState}
      />
      <ButtonGroup
        addNewField={addNewField}
        submitFarmInfo={submitFarmInfo}
        handleFormState={handleFormState}
        buttonText={{
          addField: ComponentText.ADD_CROP,
          back: ComponentText.BACK,
          next: ComponentText.NEXT,
        }}
        disabled // to be changed so I don't forget
      />
    </>
  );
};

const CropsInfoForm: InputModuleInterface = {
  InputModuleComponent: CropsInfoComponent,
  id: 'CropsInformation',
  name: { long: 'Crops Information', short: 'Crops Info' },
  faIcon: faSeedling,
  enable: false,
};

export default CropsInfoForm;
