import { NounSentenceWord } from "./features/sentence/type";

export enum Case {
  Nominativ = "Nominativ",
  Akkusativ = "Akkusativ",
  Dativ = "Dativ",
  Genitiv = "Genitiv",
}

export enum Gender {
  Masculine = "Maskuline",
  Feminine = "Feminine",
  Neutral = "Neutral",
}

export enum ArticleType {
  Definite = "Definite",
  Indefinite = "Indefinite",
  Negative = "Negative",
  Demonstrative = "Demonstrative",
}

export enum ConjugationType {
  Weak = "Weak",
  Strong = "Strong",
  Irregular = "Irregular",
}

export enum Level {
  A1 = "A1",
  A2 = "A2",
  B1 = "B1",
  B2 = "B2",
}

export type BaseWord = { spell: string; tags: string[] };

export enum PronounType {
  ich = "ich",
  du = "du",
  er = "er",
  wir = "wir",
  ihr = "ihr",
  Sie = "Sie",
}

export type Pronoun = BaseWord & {
  type: PronounType;
};

export enum VerbType {
  Transitive = "Transitive",
  Intransitive = "Intransitive",
  Reflexive = "Reflexive",
}

export enum Tenses {
  Present = "Present",
}

export type Verb = BaseWord & {
  verbType: VerbType[];
  level: Level;
  conjugation: {
    type: ConjugationType;
    [Tenses.Present]?: {
      [PronounType.ich]?: string;
      [PronounType.du]?: string;
      [PronounType.er]?: string;
      [PronounType.wir]?: string;
      [PronounType.ihr]?: string;
      [PronounType.Sie]?: string;
    };
  };
};

export type Article = BaseWord & {
  type: ArticleType;
  case: Case;
  gender: Gender;
};

export type Noun = BaseWord & {
  gender: Gender;
  plural: string | null;
  postfix: string | null;
};

export type Adjective = BaseWord;

export type Preposition = BaseWord;

export type Number = BaseWord & {
  number: number;
};

export type Word = Verb | Noun | Adjective | Pronoun | Article | Preposition;
