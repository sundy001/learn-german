import { ArticleType, Case } from "@/types";

import { Token } from "./type";
import { isInteger } from "./util";

type ModifierParser = (modifier: string) => Partial<Token> | undefined;

const CASE_MAP: Record<string, Case> = {
  nom: Case.Nominativ,
  dat: Case.Dativ,
  akk: Case.Akkusativ,
  gat: Case.Genitiv,
};

const parseWordModifier = (key: string, modifier: string) => {
  const regex = new RegExp(`^!${key}\\(([a-zA-Z0-9]+(\\|[a-zA-Z0-9]+)*)\\)$`);
  const matches = modifier.match(regex);
  if (matches === null) {
    return;
  }

  return matches[1].split("|");
};

const articleRelatedNounParser: ModifierParser = (modifier) => {
  const properties = parseWordModifier("link", modifier);
  if (!properties) {
    return;
  }
  const [theCase, relatedNounIndex] = properties;

  if (properties.length !== 2) {
    throw new Error(`Invalid article modifier parameter: ${modifier}`);
  }

  if (!(theCase in CASE_MAP)) {
    throw new Error(`Invalid case: ${theCase}`);
  }

  if (!isInteger(relatedNounIndex)) {
    throw new Error(`Invalid related noun index: ${relatedNounIndex}`);
  }

  return {
    case: CASE_MAP[theCase],
    relatedNounIndex: parseInt(relatedNounIndex),
  };
};

const ARTICLE_TYPE_MAP: Record<string, ArticleType> = {
  def: ArticleType.Definite,
  ind: ArticleType.Indefinite,
  neg: ArticleType.Negative,
  dem: ArticleType.Demonstrative,
};

export const articleTypeParser: ModifierParser = (modifier) => {
  const properties = parseWordModifier("limit", modifier);
  if (!properties) {
    return;
  }

  properties.forEach((property) => {
    if (!["def", "ind", "neg", "dem"].includes(property)) {
      throw new Error(`Invalid article type: ${property}`);
    }
  });

  return {
    articleTypes: properties.map((property) => ARTICLE_TYPE_MAP[property]),
  };
};

const verbRelatedNounParser: ModifierParser = (modifier) => {
  const properties = parseWordModifier("link", modifier);
  if (!properties) {
    return;
  }

  const [relatedNounIndex] = properties;

  if (!isInteger(relatedNounIndex)) {
    throw new Error(`Invalid related noun index: ${relatedNounIndex}`);
  }

  return {
    relatedNounIndex: parseInt(relatedNounIndex),
  };
};

export const MODIFIER_PARSERS: Record<string, ModifierParser[]> = {
  article: [articleRelatedNounParser, articleTypeParser],
  verb: [verbRelatedNounParser],
};
