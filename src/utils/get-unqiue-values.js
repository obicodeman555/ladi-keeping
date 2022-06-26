export const getUniqueValues = (array, property) => {
  const propertyValues = array.map((element) => element[property]);

  const uniqueValues = new Set(propertyValues);
  const uniqueValuesArray = [...uniqueValues];

  return uniqueValuesArray;
};
