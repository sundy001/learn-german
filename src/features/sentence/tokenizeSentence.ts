import { Word } from "@/types";

import { findAdjective, findNoun, findVerb } from "../words";
import { MODIFIER_PARSERS } from "./modifierParsers";
import { KeywordType, Token } from "./type";
import { isInteger } from "./util";

const VALID_TOKEN_REGEX = /^(~[a-zA-Z\d]|\*[a-zäöä]|\!).+$/;

const isKeywordType = (type: string): type is KeywordType => {
  const keywordTypes = ["article", "noun", "adj", "pronoun", "verb"];
  return keywordTypes.includes(type);
};

const TYPE_FINDERS: Record<string, (word: string) => Word> = {
  verb: findVerb,
  noun: findNoun,
  ajd: findAdjective,
};

// clean up common modifiers
const breakdownCommonModifiers = (
  type: KeywordType,
  rawModifiers: string[]
) => {
  let word: Word | undefined;
  let tags: string[] = [];
  const modifiers = rawModifiers.filter((modifier) => {
    if (!VALID_TOKEN_REGEX.test(modifier)) {
      throw new Error(`Invalid modifier: ${modifier}`);
    }

    const cleanModifier = modifier.slice(1);
    if (modifier.startsWith("~")) {
      tags.push(cleanModifier);
    } else if (modifier.startsWith("*")) {
      const find = TYPE_FINDERS[type];
      if (!find) {
        throw new Error(`${type} does not support * modifier`);
      }

      word = find(cleanModifier);
      if (!word) {
        throw new Error(`Invalid word: ${cleanModifier}`);
      }
    } else {
      return true;
    }

    return false;
  });

  return { word, tags, modifiers };
};

const getExtraProps = (type: KeywordType, modifiers: string[]) => {
  let extraProps = {};

  modifiers.forEach((modifier) => {
    console.debug(modifier, MODIFIER_PARSERS[type]);
    let isParsed = false;

    if (!MODIFIER_PARSERS[type]) {
      throw new Error(`No modifier parser for type: ${type}`);
    }

    for (const parser of MODIFIER_PARSERS[type]) {
      const props = parser(modifier);

      if (props && Object.keys(props).length > 0) {
        isParsed = true;
        extraProps = { extraProps, ...props };
        break;
      }
    }

    if (!isParsed) {
      throw new Error(`Modifier not parsed: ${type} ${modifier}`);
    }
  });

  return extraProps;
};

export const tokenizeSentence = (sentence: string) => {
  const stringTokens = sentence.split(" ");
  const tokens: Token[] = [];
  const tokenMap = new Map<number, Token>();

  stringTokens.forEach((stringToken, index) => {
    let token: Token;
    const matches = stringToken.match(/^{([^}]+)}$/);
    if (matches) {
      const [idString, type, ...rawModifiers] = matches[1].split(",");

      if (!isKeywordType(type)) {
        throw new Error(`Invalid keyword type: ${type}`);
      }
      if (!isInteger(idString)) {
        throw new Error(`Invalid id: ${idString}`);
      }

      const id = parseInt(idString);
      const { word, tags, modifiers } = breakdownCommonModifiers(
        type,
        rawModifiers
      );

      token = {
        id,
        index,
        type,
        tags,
        word,
        ...getExtraProps(type, modifiers),
      } as Token;

      if (tokenMap.has(id)) {
        throw new Error(`Duplicate id: ${id}`);
      }

      tokenMap.set(id, token);
    } else {
      token = {
        id: -1,
        index,
        type: "literal",
        value: stringToken,
        tags: [],
      };
    }

    tokens.push(token);
  });

  return { tokens: tokens.sort((a, b) => a.id - b.id), tokenMap };
};
