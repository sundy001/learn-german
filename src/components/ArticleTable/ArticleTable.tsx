import { ArticleType, Case, Gender } from "@/types";

import { ArticleGenderTable } from "./ArticleGenderTable";

type Props = {
  highlight?: {
    gender: Gender;
    article: ArticleType;
    theCase: Case;
  };
};

export const ArticleTable = ({ highlight }: Props) => {
  return (
    <div className="flex gap-5">
      {Object.values(Gender).map((gender) => (
        <ArticleGenderTable
          key={gender}
          gender={gender}
          highlight={gender === highlight?.gender ? highlight : undefined}
        />
      ))}
    </div>
  );
};
