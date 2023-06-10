"use client";

import classNames from "classnames";
import { FormEventHandler, useEffect, useState } from "react";

import { TextInput, TextInputColor } from "@/components/TextInput";
import { textToSpeech } from "@/features/textToSpeech";
import { Number } from "@/types";
import { getRandomNumber } from "@/words";

export default function NumberListening() {
  const [input, setInput] = useState("");
  const [questionNumber, setQuestionNumber] = useState<Number | null>(null);
  const [shake, setShake] = useState(false);
  const [textInputColor, setTextInputColor] = useState<
    TextInputColor | undefined
  >(undefined);

  const nextQuestion = () => {
    const number = getRandomNumber();
    setQuestionNumber(number);
    textToSpeech(number.word);
  };

  useEffect(() => {
    nextQuestion();
  }, []);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    const cleanInput = input.trim().toLowerCase();
    if (cleanInput === questionNumber?.number + "") {
      setTextInputColor(TextInputColor.Green);
      setInput("");
      nextQuestion();
      setTimeout(() => {
        setTextInputColor(undefined);
      }, 1000);
    } else {
      setTextInputColor(TextInputColor.Red);
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 100);
    }
  };

  if (!questionNumber) {
    return null;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="text-xl mb-4">Article in Sentence</h1>
        <div
          className={classNames("box p-4", {
            "animate-green-offset": textInputColor === TextInputColor.Green,
          })}
        >
          <button
            type="button"
            onClick={() => {
              textToSpeech(questionNumber.word);
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
