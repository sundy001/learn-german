import { Adjective, Noun, Verb, Word } from "@/types";

import { Verbs } from "./Verbs";
import { ADJECTIVES } from "./cosntants/Adjectives";
import { NOUNS } from "./cosntants/Nouns";

const findWord = (words: Word[], word: string) => {
  return words.find(({ word: w }) => w === word);
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
