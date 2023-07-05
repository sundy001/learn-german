import { type } from "os";

import {
  Adjective,
  Article,
  ArticleType,
  BaseWord,
  Case,
  Noun,
  Preposition,
  Pronoun,
  Verb,
} from "@/types";

export type SentenceTemplate = {
  sentence: string;
  tags: string[];
};

export type BaseToken = {
  id: number;
  index: number;
  tags: string[];
  word?: BaseWord;
  questionable: boolean;
};

export type LiteralToken = BaseToken & {
  type: "literal";
  value: string;
};

export type ArticleToken = BaseToken & {
  type: "article";
  word?: Article;
  case: Case;
  articleTypes?: ArticleType[];
  relatedNounIndex: number;
};

export type NounToken = BaseToken & {
  type: "noun";
  word?: Noun;
};

export type AdjectiveToken = BaseToken & {
  type: "adj";
  word?: Adjective;
};

export type PronounToken = BaseToken & {
  type: "pronoun";
  word?: Pronoun;
};

export type VerbToken = BaseToken & {
  type: "verb";
  word?: Verb;
  relatedNounIndex: number;
};

export type PrepositionToken = BaseToken & {
  type: "preposition";
  word?: Preposition;
};

export type Token =
  | LiteralToken
  | ArticleToken
  | NounToken
  | AdjectiveToken
  | PronounToken
  | VerbToken
  | PrepositionToken;

export type KeywordType = Token["type"];

export type BaseSentenceWord = {
  spell: string;
};

export type LiteralSentenceWord = BaseSentenceWord & {
  type: "literal";
  word: BaseWord;
};

export type VerbSentenceWord = BaseSentenceWord & {
  type: "verb";
  word: Verb;
};

export type NounSentenceWord = BaseSentenceWord & {
  type: "noun";
  word: Noun;
};

export type AdjectiveSentenceWord = BaseSentenceWord & {
  type: "adj";
  word: Adjective;
};

export type PronounSentenceWord = BaseSentenceWord & {
  type: "pronoun";
  word: Pronoun;
};

export type ArticleSentenceWord = BaseSentenceWord & {
  type: "article";
  word: Article;
};

export type PrepositionSentenceWord = BaseSentenceWord & {
  type: "preposition";
  word: Preposition;
};

export type SentenceWord =
  | LiteralSentenceWord
  | VerbSentenceWord
  | NounSentenceWord
  | AdjectiveSentenceWord
  | PronounSentenceWord
  | ArticleSentenceWord
  | PrepositionSentenceWord;

export type SentenceType = {
  words: SentenceWord[];
  questionIndex: number[];
};
