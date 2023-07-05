import { SentenceTemplate } from "./type";

export const SENTENCE_TEMPLATES: SentenceTemplate[] = [
  {
    sentence: "{2,article,!link(nom|0),q} {0,noun,~animal} ist {1,adj}",
    tags: [],
  },
  {
    sentence:
      "{4,article,!link(nom|0)} {0,noun,~relative} hast {3,article,!link(akk|1),q} {1,noun,~relative}",
    tags: [],
  },
  {
    sentence:
      "{2,pronoun} {3,verb,*haben,!link(2)} {1,article,!link(akk|0),q} {0,noun,~animal}",
    tags: [],
  },
  {
    sentence:
      "{3,article,!link(nom|2),!limit(def),q} {2,noun,~relative} {4,verb,*haben,!link(2)} {1,article,!link(akk|0)} {0,noun,~animal}",
    tags: [],
  },
  {
    sentence:
      "{0,pronoun} {1,verb,*fahren,!link(0)} mit {3,article,!link(dat|2),q} {2,noun,~public-transport} zu {4,noun,~place}",
    tags: [],
  },
  {
    sentence:
      "{1,article,!link(nom|0),!limit(def|dem)} {0,noun,~givable} {4,verb,*sein,!link(0)} für {6,article,!link(akk|5),!limit(def),q} {5,noun,~animal}",
    tags: [],
  },
  {
    sentence:
      "{1,article,!link(nom|0),!limit(def|dem)} {0,noun,~givable} {4,verb,*sein,!link(0)} für {6,article,!link(akk|5),!limit(def),q} {5,noun,~animal}",
    tags: [],
  },
  {
    sentence:
      "{1,article,!link(nom|0),!limit(def|dem)} {0,noun,~animal} seizt {7,preposition,~position} {6,article,!link(dat|5),q} {5,noun,~place}",
    tags: [],
  },
  {
    sentence:
      "{1,article,!link(nom|0),!limit(def|dem)} {0,noun,~animal} läuft {7,preposition,~position} {6,article,!link(akk|5),q} {5,noun,~place}",
    tags: [],
  },
  {
    sentence:
      "{1,article,!link(nom|0),!limit(def|dem)} {0,noun,~animal} gehe durch {6,article,!link(akk|5),!limit(def|dem),q} {5,noun,~through}",
    tags: [],
  },
  {
    sentence:
      "{1,article,!link(nom|0),!limit(def|dem)} {0,noun,~animal} ißt Pizza ohne {6,article,!link(akk|5),!limit(def|dem),q} {5,noun,~topping}",
    tags: [],
  },
  {
    sentence:
      "{1,pronoun} {2,verb,*fahren,!link(1)} zu {6,article,!link(dat|5),!limit(def|dem),q} {5,noun,~animal}",
    tags: [],
  },
  {
    sentence:
      "{1,pronoun} {2,verb,*fahren,!link(1)} nach {6,article,!link(dat|5),!limit(def|dem),q} {5,noun,~place}",
    tags: [],
  },
];
