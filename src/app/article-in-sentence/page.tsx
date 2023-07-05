"use client";

import classNames from "classnames";
import { FormEventHandler, useEffect, useState } from "react";

import { TextInput, TextInputColor } from "@/components/TextInput";
import {
  SENTENCE_TEMPLATES,
  Sentence,
  SentenceType,
  parseSentence,
} from "@/features/sentence";
import { ArticleSentenceWord } from "@/features/sentence/type";
import { ARTICLE_WORDS_MAP } from "@/features/words";
import { getRandomValue } from "@/util/getRandomEnum";

export default function ArticleInSentence() {
  const [input, setInput] = useState("");
  const [shake, setShake] = useState(false);
  const [textInputColor, setTextInputColor] = useState<
    TextInputColor | undefined
  >(undefined);

  const [answer, setAnswer] = useState<ArticleSentenceWord | null>(null);
  const [question, setQuestion] = useState<SentenceType | null>(null);

  const nextQuestion = () => {
    const sentence = parseSentence({
      sentence: getRandomValue(SENTENCE_TEMPLATES).sentence,
      // sentence: SENTENCE_TEMPLATES[11].sentence,
      tags: [],
    });

    const questionIndex = sentence.questionIndex[0];
    if (questionIndex === undefined) {
      throw new Error(`No question index`);
    }

    setAnswer(sentence.words[questionIndex] as ArticleSentenceWord);
    setQuestion(sentence);
  };

  useEffect(() => {
    nextQuestion();
  }, []);

  if (!question) {
    return null;
  }

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const value = input.trim().toLocaleLowerCase();
    const cleanAnswer = answer?.spell.toLocaleLowerCase();

    if (cleanAnswer === value) {
      nextQuestion();
      setInput("");
      setTextInputColor(TextInputColor.Green);
      // textToSpeech(getSentenceQuestionString(question));
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
          <div>{ARTICLE_WORDS_MAP[answer?.word.type!]}</div>
          <Sentence sentence={question} />
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
