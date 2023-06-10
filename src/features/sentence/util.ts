export const capitalizeFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const isInteger = (value: string) => {
  return /^(0|[1-9]\d*)$/.test(value);
};
