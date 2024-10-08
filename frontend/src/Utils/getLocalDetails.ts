import initialFarmDetails from '@Constants/InitialFarmDetails';
import LoacalStorageNames from '@Constants/LocalStorageNames';
import FarmDetailsInterface from '@Interface/FarmDetailsInterface';
import FieldDetailInterface from '@Interface/FieldDetailsInterface';

const getLocalDetails = () => {
  const nmpString = localStorage.getItem(LoacalStorageNames.FARM_DETAILS);
  try {
    if (nmpString) return JSON.parse(nmpString);
  } catch (err) {
    console.error(err);
  }
  return null;
};

/**
 * @desc      Load an .nmp string object from localStorage to the MainPage,
 *            converting it to JSON and making some basic .nmp to bb mapping.
 * @author    @GDamaso
 */
const loadFarmDetails = (): FarmDetailsInterface => {
  const localDetails = getLocalDetails();
  const updatedFarmDetails = { ...initialFarmDetails };

  if (localDetails) {
    const nmpFarmDetails = localDetails.farmDetails;
    const fieldsJSON: FieldDetailInterface[] = localDetails.years[0].Fields;

    updatedFarmDetails.FarmName = nmpFarmDetails.FarmName;
    updatedFarmDetails.Year = nmpFarmDetails.Year;
    updatedFarmDetails.FarmRegion = nmpFarmDetails.FarmRegion ?? 0;

    fieldsJSON.forEach((field) => {
      const updateField: FieldDetailInterface = {
        ...field,
        HasLeafTest:
          (field.LeafTest?.leafTissueK >= 0 && field.LeafTest?.leafTissueP >= 0) ?? false,
      };
      updatedFarmDetails.Fields.push(updateField);
    });
    updatedFarmDetails.Fields = localDetails.years[0].Fields;
  }

  return updatedFarmDetails;
};

export { getLocalDetails, loadFarmDetails };
