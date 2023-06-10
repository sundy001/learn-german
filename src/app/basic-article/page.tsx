"use client";

import { FormEventHandler, useState } from "react";
import { ARTICLE_WORDS_MAP } from "@/words";
import { Checkbox } from "@/components/Checkbox";
import { ArticleGenderTable } from "@/components/ArticleTable";
import { TextInput } from "@/components/TextInput";

import { useQuestion } from "../useQuestion";

import cn from "classnames";
import { Noun } from "@/components/Noun";

export default function BasicArticle() {
  const question = useQuestion();
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [isCorrect, setIsCorrect] = useState(true);
  const [useGenderColor, setUseGenderColor] = useState(false);

  if (!question) {
    return null;
  }

  const { noun, articleType, theCase, answer, nextQuestion } = question;

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    if (userInput === answer) {
      nextQuestion();
      setMessage("");
      setIsCorrect(true);
    } else {
      setMessage("Your answer is incorrect.");
      setIsCorrect(false);
    }
    setUserInput("");
  };

  return (
    <main className={"__tw_text-blue __tw_text-red __tw_text-gray"}>
      <div className="box mb-4 p-4 flex gap-3">
        <Checkbox
          label="Gender Color"
          checked={useGenderColor}
          onChange={(event) => {
            setUseGenderColor(event.target.checked);
          }}
        />
        <Checkbox
          label="Show Table"
          checked={showTable}
          onChange={(event) => {
            setShowTable(event.target.checked);
          }}
        />
      </div>

      <form className="box p-4" onSubmit={handleSubmit}>
        <div className="mt-1 font-bold">
          <div>
            {theCase}
            <span className="invisible">A</span>
          </div>
          <div className="text-blue">
            {ARTICLE_WORDS_MAP[articleType!]}
            <span className="invisible">A</span>
          </div>
          <Noun noun={noun} highlightGender={useGenderColor} />
          <span className="invisible">A</span>
        </div>
        <TextInput
          value={userInput}
          errorMessageLine={false}
          onChange={(event) => {
            setUserInput(event.target.value);
          }}
        />
        <div className={cn("p-1", "mb-2", { "bg-red-50": !isCorrect })}>
          {message}
          <span className="invisible">A</span>
        </div>
        {showTable && (
          <ArticleGenderTable
            gender={noun.gender}
            highlight={{
              article: articleType,
              theCase,
            }}
          />
        )}
      </form>
    </main>
  );
}