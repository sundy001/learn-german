import { Adjective, Article, Case, Noun, Pronoun, Verb, Word } from "@/types";

export type SentenceTemplate = {
  sentence: string;
  tags: string[];
};

export type BaseToken = {
  id: number;
  index: number;
  tags: string[];
  word?: Word;
};

export type LiteralToken = BaseToken & {
  type: "literal";
  value: string;
};

export type ArticleToken = BaseToken & {
  type: "article";
  word?: Article;
  case: Case;
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

export type VerToken = BaseToken & {
  type: "verb";
  word?: Verb;
  relatedNounIndex: number;
};

export type Token =
  | LiteralToken
  | ArticleToken
  | NounToken
  | AdjectiveToken
  | PronounToken
  | VerToken;

export type KeywordType = Token["type"];
