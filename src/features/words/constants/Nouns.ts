import { Gender, Noun } from "@/types";

// prettier-ignore
export const NOUNS: Noun[] = [
  { spell: "Eule", gender: Gender.Feminine, plural: "Eulen", postfix: null, tags: [] },
  { spell: "Foto", gender: Gender.Neutral, plural: "Fotos", postfix: "o", tags: ['givable'] },
  { spell: "Kasten", gender: Gender.Masculine, plural: "", postfix: null, tags: [] },
  { spell: "Essen", gender: Gender.Neutral, plural: "", postfix: null, tags: [] },
  { spell: "Arbeit", gender: Gender.Feminine, plural: "", postfix: null, tags: [] },
  { spell: "Lineal", gender: Gender.Neutral, plural: "", postfix: null, tags: ['givable'] },
  { spell: "Buch", gender: Gender.Neutral, plural: "", postfix: null, tags: ['givable'] },

  { spell: "Stadt", gender: Gender.Feminine, plural: "", postfix: null, tags: ['place', 'through'] },
  { spell: "Schule", gender: Gender.Feminine, plural: "", postfix: null, tags: ['place'] },
  
  { spell: "Apfel", gender: Gender.Masculine, plural: "Äpfel", postfix: null, tags: ['food', 'fruit', 'givable'] },
  { spell: "Brot", gender: Gender.Neutral, plural: "", postfix: null, tags: ['food'] },
  { spell: "Wurst", gender: Gender.Feminine, plural: "", postfix: null, tags: ['food', 'topping'] },
  
  { spell: "Tochter", gender: Gender.Feminine, plural: "Töchter", postfix: null, tags: ['relative', 'person'] },
  { spell: "Bruder", gender: Gender.Masculine, plural: "", postfix: null, tags: ['relative', 'person'] },
  { spell: "Muter", gender: Gender.Feminine, plural: "", postfix: null, tags: ['relative', 'person'] },
  { spell: "Vater", gender: Gender.Masculine, plural: "", postfix: null, tags: ['relative', 'person'] },
  { spell: "Schwester", gender: Gender.Feminine, plural: "", postfix: null, tags: ['relative', 'person'] },

  { spell: "Haus", gender: Gender.Neutral, plural: "Hauser", postfix: null, tags: ['place'] },
  { spell: "Kaufhaus", gender: Gender.Neutral, plural: "", postfix: null, tags: ['place'] },
  { spell: "Schule", gender: Gender.Feminine, plural: "", postfix: null, tags: ['place'] },
  { spell: "Bank", gender: Gender.Feminine, plural: "", postfix: null, tags: ['place'] },
  { spell: "Market", gender: Gender.Masculine, plural: "", postfix: null, tags: ['place'] },
  { spell: "Bäckerei", gender: Gender.Feminine, plural: "", postfix: null, tags: ['place'] },

  { spell: "Zug", gender: Gender.Masculine, plural: "", postfix: null, tags: ['public-transport'] },
  { spell: "Bus", gender: Gender.Masculine, plural: "", postfix: null, tags: ['public-transport'] },
  { spell: "Taxi", gender: Gender.Neutral, plural: "", postfix: null, tags: ['public-transport'] },
  { spell: "Fahrrad", gender: Gender.Neutral, plural: "", postfix: null, tags: ['public-transport'] },
  { spell: "U-Bhan", gender: Gender.Feminine, plural: "", postfix: null, tags: ['public-transport'] },

  { spell: "Löwe", gender: Gender.Masculine, plural: "", postfix: null, tags: ['animal'] },
  { spell: "Schwein", gender: Gender.Neutral, plural: "", postfix: null, tags: ['animal'] },
  { spell: "Kuh", gender: Gender.Feminine, plural: "", postfix: null, tags: ['animal'] },
  { spell: "Maus", gender: Gender.Feminine, plural: "", postfix: null, tags: ['animal'] },
  { spell: "Hase", gender: Gender.Masculine, plural: "", postfix: null, tags: ['animal'] },

  { spell: "Schüler", gender: Gender.Masculine, plural: "", postfix: null, tags: ['professional', '-in'] },
  { spell: "Lehrer", gender: Gender.Masculine, plural: null, postfix: null, tags: ['profession', '-in'] },
  { spell: "Künstler", gender: Gender.Masculine, plural: "", postfix: null, tags: ['professional', '-in'] },
  { spell: "Polizist", gender: Gender.Masculine, plural: "", postfix: null, tags: ['professional', '-in'] },
  { spell: "Anwalt", gender: Gender.Masculine, plural: "", postfix: null, tags: ['professional', '-in'] },
  { spell: "Anwältin", gender: Gender.Feminine, plural: "", postfix: null, tags: ['professional', '-in'] },
  { spell: "Kellner", gender: Gender.Masculine, plural: "", postfix: null, tags: ['professional'] },
  { spell: "Professor", gender: Gender.Masculine, plural: "", postfix: null, tags: ['professional', '-in'] },
  { spell: "Schauspieler", gender: Gender.Masculine, plural: "", postfix: null, tags: ['professional', '-in'] },
  { spell: "Arzt", gender: Gender.Masculine, plural: "", postfix: null, tags: ['professional'] },
  { spell: "Ärztin", gender: Gender.Feminine, plural: "", postfix: null, tags: ['professional'] },
  { spell: "Student", gender: Gender.Masculine, plural: "", postfix: null, tags: ['professional', '-in'] },

  // home
  { spell: "Tür", gender: Gender.Feminine, plural: "", postfix: null, tags: ['through'] },
  { spell: "Tunnel", gender: Gender.Masculine, plural: "", postfix: null, tags: ['through'] },
  { spell: "Park", gender: Gender.Masculine, plural: "", postfix: null, tags: ['through'] },
  // { noun: "", gender: Gender.Neutral, plural: "", postfix: null },
];
