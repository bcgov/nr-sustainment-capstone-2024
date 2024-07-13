import FarmDetailsInterface from '@Interface/FarmDetailsInterface';
import NmpInterface from '@Interface/NmpInterface';
import NmpFieldInterface from '@Interface/NmpFieldInterface';
import { templateFieldNMP } from '@Constants/templateNMP';
import FieldDetailInterface from '@Interface/FieldDetailsInterface';

/**
 * @desc    Convert the FarmDetailsInterface to the NmpInterface structure.
 * @param   newDetails: FarmDetailsInterface => Our main data object in our own data structure
 * @param   prevDetails: NmpInterface => Previous NMP data from local storage
 * @return  Updated NmpInterface with the new details
 */
const convertToNMP = (
  newDetails: FarmDetailsInterface,
  prevDetails: NmpInterface,
): NmpInterface => {
  const newFields: NmpFieldInterface[] = newDetails.Fields.map((field: FieldDetailInterface) => ({
    ...templateFieldNMP,
    Id: field.Id,
    Area: field.Area,
    Comment: field.Comment || templateFieldNMP.Comment,
    FieldName: field.FieldName,
    HasSoilTest: field.HasSoilTest || templateFieldNMP.HasSoilTest,
    SoilTest: {
      ...templateFieldNMP.SoilTest,
      valNO3H: field.SoilTest?.valNO3H || templateFieldNMP.SoilTest.valNO3H,
      ValP: field.SoilTest?.ValP || templateFieldNMP.SoilTest.ValP,
      valK: field.SoilTest?.valK || templateFieldNMP.SoilTest.valK,
      valPH: field.SoilTest?.valPH || templateFieldNMP.SoilTest.valPH,
    },
    LeafTest: field.LeafTest || templateFieldNMP.LeafTest,
  }));

  return {
    ...prevDetails,
    farmDetails: {
      ...prevDetails.farmDetails,
      FarmName: newDetails.FarmName,
      Year: newDetails.Year,
    },
    years: [{ ...prevDetails.years[0], Year: newDetails.Year, Fields: newFields }],
  };
};

export default convertToNMP;