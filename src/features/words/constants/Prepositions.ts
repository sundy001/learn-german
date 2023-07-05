import { Preposition } from "@/types";

export const PREPOSITIONS: Preposition[] = [
  { spell: "in", tags: ["position", "walkable"] },
  { spell: "an", tags: ["position", "walkable"] },
  { spell: "auf", tags: ["position", "jumpable"] },
  { spell: "vor", tags: ["position", "walkable"] },
  { spell: "über", tags: ["position", "jumpable"] },
  { spell: "unter", tags: ["position", "walkable"] },
  { spell: "neben", tags: ["position", "walkable"] },
  { spell: "hinter", tags: ["position", "walkable"] },
  { spell: "zwischen", tags: [] },
];
