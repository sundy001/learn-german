import { Adjective, BaseWord, Noun, Verb } from "@/types";

import { ADJECTIVES } from "./constants/Adjectives";
import { NOUNS } from "./constants/Nouns";
import { Verbs } from "./constants/Verbs";

const findWord = (words: BaseWord[], word: string) => {
  return words.find(({ spell: w }) => w === word);
};

export const findNoun = (word: string) => {
  return findWord(NOUNS, word) as Noun;
};

export const findAdjective = (word: string) => {
  return findWord(ADJECTIVES, word) as Adjective;
};

export const findVerb = (word: string) => {
  return findWord(Verbs, word) as Verb;
};
