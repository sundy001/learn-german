import { SentenceTemplate } from "./type";

export const SENTENCES_TEMPLATES: SentenceTemplate[] = [
  {
    sentence: "{2,article,!link(nom|0)} {0,noun,~animal} ist {1,adj}",
    tags: [],
  },
  {
    sentence:
      "{4,article,!link(nom|0)} {0,noun,~relative} hast {3,article,!link(akk|1)} {1,noun,~relative}",
    tags: [],
  },
  {
    sentence:
      "{2,pronoun} {3,verb,*haben,!link(2)} {1,article,!link(akk|0)} {0,noun,~animal}",
    tags: [],
  },
  {
    sentence:
      "{3,article,!link(nom|2),!limit(def)} {2,noun,~relative} {4,verb,*haben,!link(2)} {1,article,!link(akk|0)} {0,noun,~animal}",
    tags: [],
  },
];
