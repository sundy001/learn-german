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

export enum VerbType {
  Transitive = "Transitive",
  Intransitive = "Intransitive",
  Reflexive = "Reflexive",
}

export type Verb = {
  word: string;
  verbType: VerbType[];
  conjugation: ConjugationType;
  level: Level;
  tags: string[];
};

export type Article = {
  word: string;
  type: ArticleType;
  case: Case;
  gender: Gender;
};

export type Noun = {
  word: string;
  gender: Gender;
  plural: string | null;
  postfix: string | null;
  tags: string[];
};

export type Number = {
  word: string;
  number: number;
};
