import { PronounType, Tenses, Verb } from "@/types";

export const getConjugationVerb = (
  verb: Verb,
  tenses: Tenses,
  pronounType: PronounType
) => {
  return verb.conjugation[tenses]![pronounType]!;
};
