import { ArticleType, Case, Gender } from "@/types";
import { getRandomEnum } from "@/util/getRandomEnum";

import { ARTICLES } from "./constants/Articles";

export const getRandomCase = () => getRandomEnum(Case);

export const getRandomArticleType = () => getRandomEnum(ArticleType);

export const findArticleFrom = (
  articleType: ArticleType,
  theCase: Case,
  theGender: Gender
) => {
  return ARTICLES.find(
    ({ type, case: articleCase, gender }) =>
      articleType === type && theCase === articleCase && theGender === gender
  );
};
