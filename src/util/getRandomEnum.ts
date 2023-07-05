export const getRandomValue = <T extends any>(values: T[]): T => {
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
};

export const getRandomEnum = <T extends any>(enumeration: T): T[keyof T] => {
  const enumValues = Object.values(enumeration!) as unknown as T[keyof T][];
  return getRandomValue(enumValues);
};
