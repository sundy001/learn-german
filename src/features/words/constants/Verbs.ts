import { ConjugationType, Level, Tenses, Verb } from "@/types";

export const Verbs: Verb[] = [
  {
    spell: "sein",
    verbType: [],
    conjugation: {
      type: ConjugationType.Strong,
      [Tenses.Present]: {
        ich: "bin",
        du: "bist",
        er: "ist",
        wir: "sind",
        ihr: "seid",
        Sie: "sind",
      },
    },
    level: Level.A1,
    tags: [],
  },
  {
    spell: "haben",
    verbType: [],
    conjugation: {
      type: ConjugationType.Strong,
      [Tenses.Present]: {
        ich: "habe",
        du: "hast",
        er: "hat",
        wir: "haben",
        ihr: "habt",
        Sie: "haben",
      },
    },
    level: Level.A1,
    tags: [],
  },
  {
    spell: "fahren",
    verbType: [],
    conjugation: {
      type: ConjugationType.Strong,
      [Tenses.Present]: {
        ich: "fahre",
        du: "fährst",
        er: "fährt",
        wir: "fahren",
        ihr: "fahrt",
        Sie: "fahren",
      },
    },
    level: Level.A1,
    tags: [],
  },

  // { word: '', verbType: [VerbType.], conjugation: ConjugationType., level: Level.A1, tags: [] },
];
