import { Case } from "@/types";

import { isInteger } from "./util";

type ModifierParser = (modifier: string) => Record<string, unknown> | undefined;

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
  article: [articleRelatedNounParser],
  verb: [verbRelatedNounParser],
};
