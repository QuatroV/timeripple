export type ActiveAbility = {
  id: number;
  name: string;
  imgSrc: string;

  description: string;
  target: Unit[];
  initiativeCost: { original: number; current: number };
};

export type Unit = {
  id: number;
  name: string;
  imgSrc: string;

  healthPoints: { original: number; current: number };
  attackPoints: { original: number; current: number };
  activeAbilities: ActiveAbility[];
};
