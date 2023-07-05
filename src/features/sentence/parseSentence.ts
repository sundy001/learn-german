import {
  findArticleFrom,
  getConjugationVerb,
  getRandomAdjective,
  getRandomNoun,
  getRandomPreposition,
  getRandomPronouns,
  getRandomVerb,
} from "@/features/words";
import { ArticleType, BaseWord, PronounType, Tenses, Word } from "@/types";
import { getRandomValue } from "@/util/getRandomEnum";

import { tokenizeSentence } from "./tokenizeSentence";
import {
  NounToken,
  PronounToken,
  SentenceTemplate,
  SentenceWord,
  Token,
} from "./type";
import { capitalizeFirstLetter } from "./util";

export const parseSentence = (sentence: SentenceTemplate) => {
  const { tokens, tokenMap } = tokenizeSentence(sentence.sentence);

  console.debug(tokens);

  const getKeyword = <T>(
    id: number,
    type: Token["type"] | Token["type"][]
  ): T => {
    const keyword = tokenMap.get(id);

    if (keyword === undefined) {
      throw new Error(`reference id [${id}] not found`);
    }

    const types = Array.isArray(type) ? type : [type];
    if (types.indexOf(keyword.type) === -1) {
      throw new Error(
        `[${keyword.id}] article limit reference id ${
          keyword.id
        } is not a ${types.join(",")}`
      );
    }

    return keyword as T;
  };

  const words: SentenceWord[] = [];
  const questionIndex: number[] = [];
  tokens.forEach((keyword) => {
    let word: SentenceWord["word"];
    let spell: string | undefined;

    if (keyword.questionable) {
      questionIndex.push(keyword.index);
    }

    if (keyword.type === "noun") {
      let noun = keyword.word;
      if (!noun) {
        noun = getRandomNoun(keyword.tags);

        if (!noun) {
          throw new Error("No noun found for tags: " + keyword.tags);
        }
      }

      word = noun;
    } else if (keyword.type === "adj") {
      const adj = getRandomAdjective(keyword.tags);

      word = adj;
    } else if (keyword.type === "article") {
      const nounKeyword = getKeyword<NounToken>(
        keyword.relatedNounIndex,
        "noun"
      );

      const availableArticleTypes = keyword.articleTypes
        ? keyword.articleTypes
        : [ArticleType.Definite, ArticleType.Indefinite];

      const article = findArticleFrom(
        getRandomValue(availableArticleTypes),
        keyword.case,
        nounKeyword.word!.gender
      );

      if (!article) {
        throw new Error(`No article found for ${keyword.id}`);
      }

      word = article;
    } else if (keyword.type === "pronoun") {
      const pronoun = getRandomPronouns();
      word = pronoun;
    } else if (keyword.type === "verb") {
      let verb = keyword.word;
      if (!verb) {
        verb = getRandomVerb(keyword.tags);
      }

      const nounKeyword = getKeyword<PronounToken | NounToken>(
        keyword.relatedNounIndex,
        ["noun", "pronoun"]
      );
      const nounType =
        nounKeyword.type === "pronoun"
          ? nounKeyword.word!.type
          : PronounType.er;

      word = verb;
      spell = getConjugationVerb(verb, Tenses.Present, nounType);
    } else if (keyword.type === "preposition") {
      let noun = keyword.word;
      if (!noun) {
        noun = getRandomPreposition(keyword.tags);

        if (!noun) {
          throw new Error("No noun found for tags: " + keyword.tags);
        }
      }

      word = noun;
    } else if (keyword.type === "literal") {
      word = { spell: keyword.value, tags: [] };
    } else {
      throw new Error(`Invalid keyword type: ${(keyword as any).type}`);
    }

    if (!spell) {
      spell = word.spell;
    }

    keyword.word = word;
    words[keyword.index] = { spell, type: keyword.type, word } as SentenceWord;
  });

  words[0].spell = capitalizeFirstLetter(words[0].spell);

  return {
    words,
    questionIndex,
  };
};
``;
