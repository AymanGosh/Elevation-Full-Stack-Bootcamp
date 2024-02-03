export const addNewProperty = (arr, key, value) => {
  return arr.map((item) => {
    return { ...item, [key]: value };
  });
};
