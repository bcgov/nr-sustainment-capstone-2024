const dryFertValues: { [key: string]: { N: number; P: number; K: number } } = {
  '1': { N: 46, P: 0, K: 0 }, // Urea (46-0-0)
  '35': { N: 15, P: 15, K: 17 }, // 15-15-17
  '33': { N: 15, P: 8, K: 11 }, // 15-8-11
  '41': { N: 16, P: 16, K: 16 }, // 16-16-16
  '34': { N: 20, P: 10, K: 6 }, // 20-10-6
  '36': { N: 6, P: 20, K: 14 }, // 6-20-14
  '37': { N: 8, P: 10, K: 20 }, // 8-10-20
  '31': { N: 8, P: 18, K: 22 }, // 8-18-22
  '32': { N: 8, P: 24, K: 24 }, // 8-24-24
  '6': { N: 34, P: 0, K: 0 }, // Ammonium nitrate (34-0-0)
  '28': { N: 16, P: 20, K: 0 }, // Ammonium phosphate-sulfate (16-20-0)
  '7': { N: 21, P: 0, K: 0 }, // Ammonium sulphate (21-0-0-24S)
  '17': { N: 82, P: 0, K: 0 }, // Anhydrous ammonia (82-0-0)
  '29': { N: 16, P: 0, K: 0 }, // Calcium nitrate (15.5-0-0-18Ca)
  '10': { N: 18, P: 46, K: 0 }, // Diammonium phosphate (DAP, 18-46-0)
  '14': { N: 11, P: 52, K: 0 }, // Monoammonium phosphate (MAP, 11-52-0)
  '15': { N: 0, P: 0, K: 62 }, // Muriate of potash (0-0-62)
  '16': { N: 0, P: 0, K: 50 }, // Sulphate of potash (0-0-50-17S)
  '30': { N: 40, P: 0, K: 0 }, // Sulphur coated urea (40-0-0)
  '2': { N: 10, P: 16, K: 18 }, // 10-16-18
  '3': { N: 18, P: 18, K: 18 }, // 18-18-18
  '4': { N: 18, P: 9, K: 9 }, // 18-9-9
  '5': { N: 30, P: 10, K: 0 }, // 30-10-0-7S
  '8': { N: 12, P: 1, K: 1 }, // Blood meal (12-1-1)
  '9': { N: 3, P: 20, K: 0 }, // Bone meal (3-20-0)
  '11': { N: 12, P: 0, K: 0 }, // Feather meal (12-0-0)
  '12': { N: 10, P: 6, K: 2 }, // Fish meal (10-6-2)
  '13': { N: 0, P: 1, K: 6 }, // Greensand (0-1-6)
  '22': { N: 10, P: 34, K: 0 }, // Ammonium polyphosphate (10-34-0)
  '24': { N: 23, P: 0, K: 0 }, // Liquid urea (23-0-0)
};

export default dryFertValues;
