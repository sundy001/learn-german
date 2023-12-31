"use client";

import classNames from "classnames";
import { FormEventHandler, useEffect, useState } from "react";

import { TextInput, TextInputColor } from "@/components/TextInput";
import { textToSpeech } from "@/features/textToSpeech";
import { getRandomNumber } from "@/features/words";
import { Number } from "@/types";

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
    textToSpeech(number.spell);
  };

  useEffect(() => {
    nextQuestion();
  }, []);

  if (!questionNumber) {
    return null;
  }

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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="mb-4 text-xl">Number Listening</h1>
        <div
          className={classNames("box p-4", {
            "animate-green-offset": textInputColor === TextInputColor.Green,
          })}
        >
          <button
            type="button"
            onClick={() => {
              textToSpeech(questionNumber.spell);
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
