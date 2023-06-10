import { ArticleType, Case, Gender, Number } from "@/types";
import { getRandomEnum } from "@/util/getRandomEnum";

import { ARTICLES } from "./Articles";
import { NOUNS } from "./Nouns";
import { NUMBERS } from "./Number";

export const getRandomCase = () => getRandomEnum(Case);

export const getRandomArticleType = () => getRandomEnum(ArticleType);

export const findArticleFrom = (
  article: ArticleType,
  theCase: Case,
  theGender: Gender
) => {
  return ARTICLES.find(
    ({ type, case: articleCase, gender }) =>
      article === type && theCase === articleCase && theGender === gender
  );
};

export const getNouns = (tag: string[] | string) => {
  const tagSet = new Set(typeof tag === "string" ? [tag] : tag);
  return NOUNS.filter(({ tags }) => tags.some((tag) => tagSet.has(tag)));
};

export const getRandomNoun = (tag?: string[] | string) => {
  const nouns = tag === undefined ? NOUNS : getNouns(tag);
  return nouns[Math.floor(Math.random() * nouns.length)];
};

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
    const postfix = secondDigit === 6 || secondDigit === 7 ? "-" : "";
    const secondDigitPart = NUMBERS[secondDigit + postfix] + NUMBERS["0-"];
    if (firstDigit !== 0) {
      return `${NUMBERS[firstDigit]}und${secondDigitPart}`;
    } else {
      return secondDigitPart;
    }
  }
};
