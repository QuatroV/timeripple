import { Unit, ActiveAbility } from "./generalTypes";

export const TEST_ABILITY: ActiveAbility = {
  id: 0,
  name: "",
  imgSrc: "",
  description: "",
  target: [],
  initiativeCost: {
    original: 0,
    current: 0,
  },
};

export const UNIT1: Unit = {
  id: 0,
  name: "unit1",
  imgSrc: "",
  healthPoints: {
    original: 14,
    current: 10,
  },
  attackPoints: {
    original: 2,
    current: 2,
  },
  activeAbilities: [],
};

export const UNIT2: Unit = {
  id: 1,
  name: "unit2",
  imgSrc: "",
  healthPoints: {
    original: 3,
    current: 0,
  },
  attackPoints: {
    original: 3,
    current: 1,
  },
  activeAbilities: [],
};
