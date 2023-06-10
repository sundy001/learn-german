import { Gender, Noun as NounType } from "@/types";
import classNames from "classnames";

type Props = {
  noun: NounType;
  highlightGender?: boolean;
};

const GENDER_COLORS = {
  [Gender.Masculine]: "text-blue-600",
  [Gender.Feminine]: "text-red-600",
  [Gender.Neutral]: "text-gray-500",
};

export const Noun = ({ noun, highlightGender = false }: Props) => {
  return (
    <span
      className={classNames({ [GENDER_COLORS[noun.gender]]: highlightGender })}
    >
      {noun.word}
    </span>
  );
};
