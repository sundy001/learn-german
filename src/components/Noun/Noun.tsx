import classNames from "classnames";
import { useState } from "react";

import { Tooltip } from "@/components/Tooltip";
import { textToSpeech } from "@/features/textToSpeech";
import { findArticleFrom } from "@/features/words";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { ArticleType, Case, Gender, Noun as NounType } from "@/types";

type Props = {
  noun: NounType;
  highlightGender?: boolean;
};

const GENDER_COLORS = {
  [Gender.Masculine]: "text-blue-600",
  [Gender.Feminine]: "text-red-600",
  [Gender.Neutral]: "text-green-500",
};

export const Noun = ({ noun, highlightGender = false }: Props) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const buttonRef = useOutsideClick<HTMLButtonElement>(() =>
    setIsTooltipOpen(false)
  );

  return (
    <span className="relative">
      <button
        ref={buttonRef}
        type="button"
        className={classNames({
          [GENDER_COLORS[noun.gender]]: highlightGender,
        })}
        onClick={() => {
          setIsTooltipOpen(true);
          textToSpeech(noun.spell);
        }}
      >
        {noun.spell}
      </button>
      <Tooltip isOpen={isTooltipOpen}>
        {
          findArticleFrom(ArticleType.Definite, Case.Nominativ, noun.gender)
            ?.spell
        }{" "}
        {noun.spell}
      </Tooltip>
    </span>
  );
};
