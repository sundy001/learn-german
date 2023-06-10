import { Gender, Noun } from "@/types";

// prettier-ignore
export const NOUNS: Noun[] = [
  { word: "Eule", gender: Gender.Feminine, plural: "Eulen", postfix: null, tags: [] },
  { word: "Foto", gender: Gender.Neutral, plural: "Fotos", postfix: "o", tags: [] },
  { word: "Kasten", gender: Gender.Masculine, plural: "", postfix: null, tags: [] },
  { word: "Essen", gender: Gender.Neutral, plural: "", postfix: null, tags: [] },
  { word: "Arbeit", gender: Gender.Feminine, plural: "", postfix: null, tags: [] },
  { word: "Lineal", gender: Gender.Neutral, plural: "", postfix: null, tags: [] },
  { word: "Buch", gender: Gender.Neutral, plural: "", postfix: null, tags: [] },

  { word: "Stadt", gender: Gender.Feminine, plural: "", postfix: null, tags: ['place'] },
  { word: "Schule", gender: Gender.Feminine, plural: "", postfix: null, tags: ['place'] },
  
  { word: "Apfel", gender: Gender.Masculine, plural: "Äpfel", postfix: null, tags: ['food', 'fruit'] },
  { word: "Brot", gender: Gender.Neutral, plural: "", postfix: null, tags: ['food'] },
  { word: "Wurst", gender: Gender.Feminine, plural: "", postfix: null, tags: ['food'] },
  
  { word: "Tochter", gender: Gender.Feminine, plural: "Töchter", postfix: null, tags: ['relative'] },
  { word: "Bruder", gender: Gender.Masculine, plural: "", postfix: null, tags: ['relative'] },
  { word: "Muter", gender: Gender.Feminine, plural: "", postfix: null, tags: ['relative'] },
  { word: "Vater", gender: Gender.Masculine, plural: "", postfix: null, tags: ['relative'] },
  { word: "Schwester", gender: Gender.Feminine, plural: "", postfix: null, tags: ['relative'] },

  { word: "Haus", gender: Gender.Neutral, plural: "Hauser", postfix: null, tags: ['place'] },
  { word: "Kaufhaus", gender: Gender.Neutral, plural: "", postfix: null, tags: ['place'] },

  { word: "Löwe", gender: Gender.Masculine, plural: "", postfix: null, tags: ['animal'] },
  { word: "Schwein", gender: Gender.Neutral, plural: "", postfix: null, tags: ['animal'] },
  { word: "Kuh", gender: Gender.Feminine, plural: "", postfix: null, tags: ['animal'] },
  { word: "Maus", gender: Gender.Feminine, plural: "", postfix: null, tags: ['animal'] },
  { word: "Hase", gender: Gender.Masculine, plural: "", postfix: null, tags: ['animal'] },

  { word: "Schüler", gender: Gender.Masculine, plural: "", postfix: null, tags: ['professional', '-in'] },
  { word: "Lehrer", gender: Gender.Masculine, plural: null, postfix: null, tags: ['profession', '-in'] },
  { word: "Künstler", gender: Gender.Masculine, plural: "", postfix: null, tags: ['professional', '-in'] },
  { word: "Polizist", gender: Gender.Masculine, plural: "", postfix: null, tags: ['professional', '-in'] },
  { word: "Anwalt", gender: Gender.Masculine, plural: "", postfix: null, tags: ['professional', '-in'] },
  { word: "Anwältin", gender: Gender.Feminine, plural: "", postfix: null, tags: ['professional', '-in'] },
  { word: "Kellner", gender: Gender.Masculine, plural: "", postfix: null, tags: ['professional'] },
  { word: "Professor", gender: Gender.Masculine, plural: "", postfix: null, tags: ['professional', '-in'] },
  { word: "Schauspieler", gender: Gender.Masculine, plural: "", postfix: null, tags: ['professional', '-in'] },
  { word: "Arzt", gender: Gender.Masculine, plural: "", postfix: null, tags: ['professional'] },
  { word: "Ärztin", gender: Gender.Feminine, plural: "", postfix: null, tags: ['professional'] },
  { word: "Student", gender: Gender.Masculine, plural: "", postfix: null, tags: ['professional', '-in'] },
  // { noun: "", gender: Gender.Neutral, plural: "", postfix: null },
];
