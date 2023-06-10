import {
  findArticleFrom,
  getRandomAdjective,
  getRandomNoun,
  getRandomPronouns,
  getRandomVerb,
} from "@/features/words";
import { ArticleType, PronounsType, Word } from "@/types";

import { tokenizeSentence } from "./tokenizeSentence";
import { NounToken, PronounToken, SentenceTemplate, Token } from "./type";
import { capitalizeFirstLetter } from "./util";

export const parseSentence = (sentence: SentenceTemplate) => {
  const { tokens, tokenMap } = tokenizeSentence(sentence.sentence);

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

  const result: string[] = [];
  tokens.forEach((keyword) => {
    let resultWord: Word;

    if (keyword.type === "noun") {
      const noun = getRandomNoun(keyword.tags);
      if (!noun) {
        throw new Error("No noun found for tags: " + keyword.tags);
      }

      resultWord = noun;
      result[keyword.index] = noun.word;
    } else if (keyword.type === "adj") {
      const adj = getRandomAdjective(keyword.tags);

      resultWord = adj;
      result[keyword.index] = adj.word;
    } else if (keyword.type === "article") {
      const nounKeyword = getKeyword<NounToken>(
        keyword.relatedNounIndex,
        "noun"
      );

      const article = findArticleFrom(
        ArticleType.Definite,
        keyword.case,
        nounKeyword.word!.gender
      );

      if (!article) {
        throw new Error(`No article found for ${keyword.id}`);
      }

      resultWord = article;
      result[keyword.index] = article.word;
    } else if (keyword.type === "pronoun") {
      const pronoun = getRandomPronouns();
      resultWord = pronoun;
      result[keyword.index] = pronoun.word;
    } else if (keyword.type === "verb") {
      let word = keyword.word;
      if (!word) {
        word = getRandomVerb(keyword.tags);
      }

      const nounKeyword = getKeyword<PronounToken | NounToken>(
        keyword.relatedNounIndex,
        ["noun", "pronoun"]
      );
      const nounType =
        nounKeyword.type === "pronoun"
          ? nounKeyword.word!.type
          : PronounsType.er;
      result[keyword.index] = word.conjugation.present![nounType]!;
      resultWord = word;
    } else if (keyword.type === "literal") {
      result[keyword.index] = keyword.value;
      resultWord = { word: keyword.value, tags: [] };
    } else {
      throw new Error(`Invalid keyword type: ${(keyword as any).type}`);
    }

    keyword.word = resultWord;
  });

  result[0] = capitalizeFirstLetter(result[0]);
  return result.join(" ");
};
