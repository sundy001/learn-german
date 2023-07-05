import { SentenceType } from "./type";

export const getSentenceQuestionString = (sentence: SentenceType) =>
  sentence.words.map((word) => word.word.spell).join(" ");
