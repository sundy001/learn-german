import { ConjugationType, Level, Verb } from "@/types";

export const Verbs: Verb[] = [
  {
    word: "sein",
    verbType: [],
    conjugation: {
      type: ConjugationType.Strong,
      present: {
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
    word: "haben",
    verbType: [],
    conjugation: {
      type: ConjugationType.Strong,
      present: {
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

  // { word: '', verbType: [VerbType.], conjugation: ConjugationType., level: Level.A1, tags: [] },
];
