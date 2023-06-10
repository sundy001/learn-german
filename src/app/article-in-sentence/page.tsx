"use client";

import classNames from "classnames";
import { FormEventHandler, useState } from "react";

import { Noun } from "@/components/Noun";
import { TextInput, TextInputColor } from "@/components/TextInput";
import { Case } from "@/types";
import { ARTICLE_WORDS_MAP, getNumber } from "@/words";

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
        <h1 className="text-xl mb-4">Article in Sentence</h1>
        <div
          className={classNames("box p-4", {
            "animate-green-offset": textInputColor === TextInputColor.Green,
          })}
        >
          <div>{ARTICLE_WORDS_MAP[articleType]}</div>
          ______ <Noun noun={noun} /> is schön.
          <div>{getNumber(62)}</div>
          <button
            type="button"
            onClick={() => {
              var msg = new SpeechSynthesisUtterance();
              msg.volume = 1;
              msg.text = "Guten Morgen";
              msg.lang = "de-DE";
              speechSynthesis.speak(msg);
            }}
          >
            play
          </button>
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
