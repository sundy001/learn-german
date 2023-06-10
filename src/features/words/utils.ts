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
  article: ArticleType,
  theCase: Case,
  theGender: Gender
) => {
  return ARTICLES.find(
    ({ type, case: articleCase, gender }) =>
      article === type && theCase === articleCase && theGender === gender
  );
};
