import cn from "classnames";

import {
  ARTICLE_WORDS_MAP,
  CASES_NAMES,
  findArticleFrom,
} from "@/features/words";
import { ArticleType, Case, Gender } from "@/types";

import styles from "./ArticleGenderTable.module.css";

type Props = {
  gender: Gender;
  highlight?: {
    article: ArticleType;
    theCase: Case;
  };
};

const DefiniteWords = {
  [Gender.Masculine]: "der",
  [Gender.Feminine]: "die",
  [Gender.Neutral]: "das",
};

export const ArticleGenderTable = ({ gender, highlight }: Props) => {
  return (
    <div>
      <h3 className="mb-1 text-left">{gender}</h3>
      <table
        className={cn(
          "rounded border-hidden shadow-none shadow-slate-300",
          styles.table
        )}
      >
        <thead>
          <tr className="border-b">
            <th></th>
            {Object.values(ArticleType).map((type) => (
              <th
                key={type}
                className={cn("p-3 font-normal", {
                  ["bg-yellow-50"]: highlight?.article === type,
                })}
              >
                {ARTICLE_WORDS_MAP[type] ?? DefiniteWords[gender]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {CASES_NAMES.map(({ name: theCase, shortForm }) => (
            <tr key={theCase}>
              <td
                className={cn("p-3", {
                  ["bg-red-50"]: highlight?.theCase === theCase,
                })}
              >
                {shortForm}
              </td>
              {Object.values(ArticleType).map((articleType) => (
                <td
                  key={articleType}
                  className={cn("p-3", {
                    ["bg-yellow-50"]: highlight?.article === articleType,
                    ["bg-red-50"]: highlight?.theCase === theCase,
                    ["bg-green-50 font-bold"]:
                      highlight?.theCase === theCase &&
                      highlight?.article === articleType,
                  })}
                >
                  {findArticleFrom(articleType, theCase, gender)?.spell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
