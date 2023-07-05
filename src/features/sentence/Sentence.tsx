import { Fragment, ReactElement } from "react";

import { Noun } from "@/components/Noun";

import { SentenceType } from "./type";

type Props = {
  sentence: SentenceType;
};

export const Sentence = ({ sentence }: Props) => {
  const elements = sentence.words.map((word, index) => {
    let component: ReactElement;

    if (word.type === "noun") {
      component = <Noun noun={word.word} highlightGender={false} />;
    } else {
      const spell = sentence.questionIndex[0] === index ? "_____" : word.spell;
      component = <span>{spell}</span>;
    }

    return <Fragment key={index}>{component} </Fragment>;
  });

  return <>{elements}</>;
};
