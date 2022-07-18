import { DICE_ABILITIES } from "../constants/cards";

export type CardColor = "red" | "green" | "blue" | "none";

export type CardType = "hero" | "spell";

export type CommonCardFields = {
  id: number;
  color: CardColor;
  name: string;
  type: CardType;
};

export type DiceAbility = typeof DICE_ABILITIES[keyof typeof DICE_ABILITIES];

export type DiceValue = Record<string, DiceAbility>;

export type DiceMap = Record<number, DiceValue>;

export type HeroCard = CommonCardFields & {
  diceMap: DiceMap;
  health: number;
};

export type SpellCard = CommonCardFields & {
  cost: number;
  description: string;
};

export type Card = HeroCard | SpellCard;
