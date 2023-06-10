"use client";

import classNames from "classnames";
import { FormEventHandler, useEffect, useState } from "react";

import { TextInput, TextInputColor } from "@/components/TextInput";
import { Number } from "@/types";
import { getRandomNumber } from "@/words";

export default function NumberReading() {
  const [input, setInput] = useState("");
  const [questionNumber, setQuestionNumber] = useState<Number | null>(null);
  const [shake, setShake] = useState(false);
  const [textInputColor, setTextInputColor] = useState<
    TextInputColor | undefined
  >(undefined);

  const nextQuestion = () => {
    const number = getRandomNumber();
    setQuestionNumber(number);
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
        <h1 className="mb-4 text-xl">Number Reading</h1>
        <div
          className={classNames("box p-4", {
            "animate-green-offset": textInputColor === TextInputColor.Green,
          })}
        >
          <div>{questionNumber.word}</div>
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
