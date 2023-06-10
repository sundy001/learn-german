export const getRandomEnum = <T extends any>(enumeration: T): T[keyof T] => {
  const enumValues = Object.values(enumeration!) as unknown as T[keyof T][];
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  return enumValues[randomIndex];
};
