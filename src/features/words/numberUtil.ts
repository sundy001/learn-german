import { Number } from "@/types";

import { NUMBERS } from "./cosntants/Numbers";

export const getRandomNumber = () => {
  const number = Math.floor(Math.random() * 100);
  const numberString = getNumber(number);
  return { word: numberString, number } as Number;
};

export const getNumber = (number: number) => {
  if (number < 0) {
    throw new Error("Number must be greater than 0");
  }

  if (number > 99) {
    throw new Error("Number must be less than 100");
  }

  const secondDigit = Math.floor(number / 10);
  const firstDigit = number % 10;

  if (number <= 12) {
    return NUMBERS[number];
  } else if (number <= 19) {
    const postfix = firstDigit === 6 || firstDigit === 7 ? "-" : "";
    return `${NUMBERS[firstDigit + postfix]}zehn`;
  } else {
    const postfix =
      secondDigit === 2 || secondDigit === 6 || secondDigit === 7 ? "-" : "";
    const secondDigitPart = NUMBERS[secondDigit + postfix] + NUMBERS["0-"];
    if (firstDigit !== 0) {
      const prefix = firstDigit === 1 ? "-" : "";
      return `${NUMBERS[prefix + firstDigit]}und${secondDigitPart}`;
    } else {
      return secondDigitPart;
    }
  }
};
