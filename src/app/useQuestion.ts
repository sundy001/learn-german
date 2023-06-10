import { useEffect, useState } from "react";

import {
  findArticleFrom,
  getRandomArticleType,
  getRandomCase,
  getRandomNoun,
} from "@/features/words";
import { ArticleType, Case, Noun } from "@/types";

export const useQuestion = (options?: {
  nounTag?: string[] | string;
  targetCase?: Case;
}) => {
  const { nounTag, targetCase } = options ?? {};

  const [noun, setNoun] = useState<Noun | null>(null);
  const [articleType, setArticleType] = useState<ArticleType | null>(null);
  const [questionCase, setQuestionCase] = useState<Case | null>(null);
  const [answer, setAnswer] = useState<string | null>(null);

  const nextQuestion = () => {
    const noun = getRandomNoun(nounTag);
    const article = getRandomArticleType();
    const theCase = targetCase ? targetCase : getRandomCase();
    const answer = findArticleFrom(article, theCase, noun.gender)?.word;

    setNoun(noun);
    setArticleType(article);
    setQuestionCase(theCase);
    setAnswer(answer ?? "error");
  };

  useEffect(() => {
    nextQuestion();
  }, []);

  if (!noun) {
    return null;
  }

  return {
    noun,
    articleType: articleType!,
    theCase: questionCase!,
    answer: answer!,
    nextQuestion: nextQuestion!,
  };
};
