import { Adjective, BaseWord, Noun, Preposition, Pronoun, Verb } from "@/types";
import { getRandomValue } from "@/util/getRandomEnum";

import { ADJECTIVES } from "./constants/Adjectives";
import { NOUNS } from "./constants/Nouns";
import { PREPOSITIONS } from "./constants/Prepositions";
import { PRONOUNS } from "./constants/Pronouns";
import { Verbs } from "./constants/Verbs";

// get words by tag
const getWordsByTag = (words: BaseWord[], tag: string[] | string) => {
  const tagSet = new Set(typeof tag === "string" ? [tag] : tag);
  return words.filter(({ tags }) => tags.some((tag) => tagSet.has(tag)));
};

const getRandomWord = (words: BaseWord[], tag?: string[] | string) => {
  const theWords =
    tag === undefined || tag?.length === 0 ? words : getWordsByTag(words, tag);
  return getRandomValue(theWords);
};

export const getRandomNoun = (tag?: string[] | string) => {
  return getRandomWord(NOUNS, tag) as Noun;
};

export const getRandomVerb = (tag?: string[] | string) => {
  return getRandomWord(Verbs, tag) as Verb;
};

export const getRandomAdjective = (tag?: string[] | string) => {
  return getRandomWord(ADJECTIVES, tag) as Adjective;
};

export const getRandomPronouns = () => {
  return getRandomWord(PRONOUNS) as Pronoun;
};

export const getRandomPreposition = (tag?: string[] | string) => {
  return getRandomWord(PREPOSITIONS, tag) as Preposition;
};
