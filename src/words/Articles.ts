import { Article, ArticleType, Case, Gender } from "@/types";

// prettier-ignore
export const ARTICLES: Article[] = [
    // der, die, das
    {word: 'der', type:ArticleType.Definite, case: Case.Nominativ, gender: Gender.Masculine},
    {word: 'den', type:ArticleType.Definite, case: Case.Akkusativ, gender: Gender.Masculine},
    {word: 'dem', type:ArticleType.Definite, case: Case.Dativ, gender: Gender.Masculine},
    {word: 'des', type:ArticleType.Definite, case: Case.Genitiv, gender: Gender.Masculine},
    {word: 'die', type:ArticleType.Definite, case: Case.Nominativ, gender: Gender.Feminine},
    {word: 'die', type:ArticleType.Definite, case: Case.Akkusativ, gender: Gender.Feminine},
    {word: 'der', type:ArticleType.Definite, case: Case.Dativ, gender: Gender.Feminine},
    {word: 'der', type:ArticleType.Definite, case: Case.Genitiv, gender: Gender.Feminine},
    {word: 'das', type:ArticleType.Definite, case: Case.Nominativ, gender: Gender.Neutral},
    {word: 'das', type:ArticleType.Definite, case: Case.Akkusativ, gender: Gender.Neutral},
    {word: 'dem', type:ArticleType.Definite, case: Case.Dativ, gender: Gender.Neutral},
    {word: 'des', type:ArticleType.Definite, case: Case.Genitiv, gender: Gender.Neutral},
    // ein
    {word: 'ein', type:ArticleType.Indefinite, case: Case.Nominativ, gender: Gender.Masculine},
    {word: 'einen', type:ArticleType.Indefinite, case: Case.Akkusativ, gender: Gender.Masculine},
    {word: 'einem', type:ArticleType.Indefinite, case: Case.Dativ, gender: Gender.Masculine},
    {word: 'eines', type:ArticleType.Indefinite, case: Case.Genitiv, gender: Gender.Masculine},
    {word: 'eine', type:ArticleType.Indefinite, case: Case.Nominativ, gender: Gender.Feminine},
    {word: 'eine', type:ArticleType.Indefinite, case: Case.Akkusativ, gender: Gender.Feminine},
    {word: 'einer', type:ArticleType.Indefinite, case: Case.Dativ, gender: Gender.Feminine},
    {word: 'einer', type:ArticleType.Indefinite, case: Case.Genitiv, gender: Gender.Feminine},
    {word: 'ein', type:ArticleType.Indefinite, case: Case.Nominativ, gender: Gender.Neutral},
    {word: 'ein', type:ArticleType.Indefinite, case: Case.Akkusativ, gender: Gender.Neutral},
    {word: 'einem', type:ArticleType.Indefinite, case: Case.Dativ, gender: Gender.Neutral},
    {word: 'eines', type:ArticleType.Indefinite, case: Case.Genitiv, gender: Gender.Neutral},
    // kein
    {word: 'kein', type:ArticleType.Negative, case: Case.Nominativ, gender: Gender.Masculine},
    {word: 'keinen', type:ArticleType.Negative, case: Case.Akkusativ, gender: Gender.Masculine},
    {word: 'keinem', type:ArticleType.Negative, case: Case.Dativ, gender: Gender.Masculine},
    {word: 'keines', type:ArticleType.Negative, case: Case.Genitiv, gender: Gender.Masculine},
    {word: 'keine', type:ArticleType.Negative, case: Case.Nominativ, gender: Gender.Feminine},
    {word: 'keine', type:ArticleType.Negative, case: Case.Akkusativ, gender: Gender.Feminine},
    {word: 'keiner', type:ArticleType.Negative, case: Case.Dativ, gender: Gender.Feminine},
    {word: 'keiner', type:ArticleType.Negative, case: Case.Genitiv, gender: Gender.Feminine},
    {word: 'kein', type:ArticleType.Negative, case: Case.Nominativ, gender: Gender.Neutral},
    {word: 'kein', type:ArticleType.Negative, case: Case.Akkusativ, gender: Gender.Neutral},
    {word: 'keinem', type:ArticleType.Negative, case: Case.Dativ, gender: Gender.Neutral},
    {word: 'keines', type:ArticleType.Negative, case: Case.Genitiv, gender: Gender.Neutral},
    // dies
    {word: 'dieser', type:ArticleType.Demonstrative, case: Case.Nominativ, gender: Gender.Masculine},
    {word: 'diesen', type:ArticleType.Demonstrative, case: Case.Akkusativ, gender: Gender.Masculine},
    {word: 'diesem', type:ArticleType.Demonstrative, case: Case.Dativ, gender: Gender.Masculine},
    {word: 'dieses', type:ArticleType.Demonstrative, case: Case.Genitiv, gender: Gender.Masculine},
    {word: 'diese', type:ArticleType.Demonstrative, case: Case.Nominativ, gender: Gender.Feminine},
    {word: 'diese', type:ArticleType.Demonstrative, case: Case.Akkusativ, gender: Gender.Feminine},
    {word: 'dieser', type:ArticleType.Demonstrative, case: Case.Dativ, gender: Gender.Feminine},
    {word: 'dieser', type:ArticleType.Demonstrative, case: Case.Genitiv, gender: Gender.Feminine},
    {word: 'dieses', type:ArticleType.Demonstrative, case: Case.Nominativ, gender: Gender.Neutral},
    {word: 'dieses', type:ArticleType.Demonstrative, case: Case.Akkusativ, gender: Gender.Neutral},
    {word: 'diesem', type:ArticleType.Demonstrative, case: Case.Dativ, gender: Gender.Neutral},
    {word: 'dieses', type:ArticleType.Demonstrative, case: Case.Genitiv, gender: Gender.Neutral},
  ];

export const ARTICLE_WORDS_MAP = {
  [ArticleType.Definite]: "d-",
  [ArticleType.Indefinite]: "ein-",
  [ArticleType.Negative]: "kein-",
  [ArticleType.Demonstrative]: "dies-",
};
