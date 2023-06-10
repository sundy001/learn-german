import { Adjective, Noun, Pronoun, Verb, Word } from "@/types";

import { Verbs } from "./Verbs";
import { ADJECTIVES } from "./cosntants/Adjectives";
import { NOUNS } from "./cosntants/Nouns";
import { PRONOUNS } from "./cosntants/Pronouns";

// get words by tag
const getWordsByTag = (words: Word[], tag: string[] | string) => {
  const tagSet = new Set(typeof tag === "string" ? [tag] : tag);
  return words.filter(({ tags }) => tags.some((tag) => tagSet.has(tag)));
};

const getRandomWord = (words: Word[], tag?: string[] | string) => {
  const nouns =
    tag === undefined || tag?.length === 0 ? words : getWordsByTag(words, tag);
  return nouns[Math.floor(Math.random() * nouns.length)];
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
