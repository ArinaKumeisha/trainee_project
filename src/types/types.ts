export type ResponseItems = {
  success: true;
  count: number;
  total: number;
  data: Items[];
};

export type ResponseItem = {
  data: Items;
  success: boolean;
};

export type DataItem = {
  id: string;
  name: string;
  image: string;
  description: string;
  type: string;
};

export type Items = {
  id: string;
  name: string;
  image: string;
  description: string;
  type: string;
  effect: string;
  attackPower: Common[];
  passive: string;
  category: string;
  DmgNegationType: Common[];
  resistance: Common[];
  weight: number;
  affinity: string;
  skill: string;
  region: string;
  location: string;
  drops: string[];
  healthPoints: string;
  stats: Stats;
  cost: number;
  slots: number;
  effects: string;
  requires: Resistance;
  quote: string;
  role: string;
  attack: Common[];
  defence: Common[];
  scalesWith: Scales[];
  requiredAttributes: Common[];
  dmgNegation: Common[];
};

type Common = {
  name: string;
  amount: number;
};

type Scales = {
  name: string;
  scaling: string;
};

type Resistance = {
  name: string;
  amount: number;
};

type Stats = {
  level: string;
  vigor: string;
  mind: string;
  endurance: string;
  strength: string;
  dexterity: string;
  inteligence: string;
  faith: string;
  arcane: string;
};
