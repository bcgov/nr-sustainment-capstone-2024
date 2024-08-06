import LoacalStorageNames from '@Constants/LocalStorageNames';
import FertilizerInterface from '@Interface/FertilizerInterface';

const getLocalFertilizers = () => {
  const fertString = localStorage.getItem(LoacalStorageNames.FERTILIZER_DETAILS);
  try {
    if (fertString) {
      const parsedFertString = JSON.parse(fertString);
      if (Array.isArray(parsedFertString)) {
        return parsedFertString;
      }
    }
  } catch (err) {
    console.error(err);
  }
  return [];
};

const loadFertDetails = (): FertilizerInterface[] => {
  const localFerts: FertilizerInterface[] = getLocalFertilizers();
  const updatedFertDetails: FertilizerInterface[] = [];

  if (localFerts) {
    localFerts.forEach((fertilizer) => updatedFertDetails.push(fertilizer));
  }
  return updatedFertDetails;
};

export { loadFertDetails, getLocalFertilizers };
