import LoacalStorageNames from '@Constants/LocalStorageNames';
import FarmDetailsInterface from '@Interface/FarmDetailsInterface';
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

const loadFertDetails = (farmDetails: FarmDetailsInterface): FertilizerInterface[] => {
  const localFerts = getLocalFertilizers();
  const updatedFertDetails = [...localFerts];

  // Check for ferts in farmDetails, which is the main data object loaded/constructed
  farmDetails.Fields.forEach((field) => {
    field.Nutrients.nutrientFertilizers.forEach((fertilizer) => {
      if (!updatedFertDetails.find((f) => f.fertilizerId === fertilizer.fertilizerId)) {
        updatedFertDetails.push({
          ...fertilizer,
          fertilizerTypeId: fertilizer.fertilizerTypeId.toString(),
          fertilizerId: fertilizer.fertilizerId.toString(),
        });
      }
    });
  });

  return updatedFertDetails;
};

export { loadFertDetails, getLocalFertilizers };
