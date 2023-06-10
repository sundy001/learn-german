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

export type Word = { word: string; tags: string[] };

export enum PronounsType {
  ich = "ich",
  du = "du",
  er = "er",
  wir = "wir",
  ihr = "ihr",
  Sie = "Sie",
}

export type Pronoun = Word & {
  type: PronounsType;
};

export enum VerbType {
  Transitive = "Transitive",
  Intransitive = "Intransitive",
  Reflexive = "Reflexive",
}

export type Verb = Word & {
  verbType: VerbType[];
  level: Level;
  conjugation: {
    type: ConjugationType;
    present?: {
      [PronounsType.ich]?: string;
      [PronounsType.du]?: string;
      [PronounsType.er]?: string;
      [PronounsType.wir]?: string;
      [PronounsType.ihr]?: string;
      [PronounsType.Sie]?: string;
    };
  };
};

export type Article = Word & {
  type: ArticleType;
  case: Case;
  gender: Gender;
};

export type Noun = Word & {
  gender: Gender;
  plural: string | null;
  postfix: string | null;
};

export type Adjective = Word;

export type Number = Word & {
  number: number;
};
