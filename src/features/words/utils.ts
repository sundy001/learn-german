import {
  Adjective,
  ArticleType,
  Case,
  Gender,
  Noun,
  Number,
  Word,
} from "@/types";
import { getRandomEnum } from "@/util/getRandomEnum";

import { ADJECTIVES } from "./cosntants/Adjectives";
import { ARTICLES } from "./cosntants/Articles";
import { NOUNS } from "./cosntants/Nouns";
import { NUMBERS } from "./cosntants/Numbers";

export const getRandomCase = () => getRandomEnum(Case);

export const getRandomArticleType = () => getRandomEnum(ArticleType);

export const findArticleFrom = (
  article: ArticleType | ArticleType[],
  theCase: Case,
  theGender: Gender
) => {
  const types = Array.isArray(article) ? article : [article];

  return ARTICLES.find(
    ({ type, case: articleCase, gender }) =>
      types.includes(type) && theCase === articleCase && theGender === gender
  );
};
