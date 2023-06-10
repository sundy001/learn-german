"use client";

import classNames from "classnames";
import { FormEventHandler, useState } from "react";

import { Noun } from "@/components/Noun";
import { TextInput, TextInputColor } from "@/components/TextInput";
import { parseSentence } from "@/features/sentence";
import { SENTENCES_TEMPLATES } from "@/features/sentence/Sentence";
import { ARTICLE_WORDS_MAP } from "@/features/words";
import { Case } from "@/types";

import { useQuestion } from "../useQuestion";

export default function ArticleInSentence() {
  const [input, setInput] = useState("");
  const [shake, setShake] = useState(false);
  const [textInputColor, setTextInputColor] = useState<
    TextInputColor | undefined
  >(undefined);
  const question = useQuestion({
    nounTag: ["animal"],
    targetCase: Case.Nominativ,
  });

  const sentence = parseSentence({
    sentence: SENTENCES_TEMPLATES[3].sentence,
    tags: [],
  });

  console.debug(sentence);

  if (!question) {
    return null;
  }

  const { noun, articleType, answer, nextQuestion } = question;

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const value = input.trim().toLocaleLowerCase();

    if (answer === value) {
      nextQuestion();
      setInput("");
      setTextInputColor(TextInputColor.Green);
      setTimeout(() => {
        setTextInputColor(undefined);
      }, 500);
    } else {
      setTextInputColor(TextInputColor.Red);
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 100);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="mb-4 text-xl">Article in Sentence</h1>
        <div
          className={classNames("box p-4", {
            "animate-green-offset": textInputColor === TextInputColor.Green,
          })}
        >
          <div>{ARTICLE_WORDS_MAP[articleType]}</div>
          ______ <Noun noun={noun} /> ist schön.
          <TextInput
            errorMessageLine={false}
            color={textInputColor}
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
              setTextInputColor(undefined);
            }}
          />
        </div>
      </form>
    </>
  );
}
