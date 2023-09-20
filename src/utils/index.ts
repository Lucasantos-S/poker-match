export type SupportedTypes = keyof typeof types;

export const types = {
  water: {
    color: "#5090D6",
  },
  dragon: {
    color: "#0B6DC3",
  },
  electric: {
    color: "#F4D23C",
  },
  fairy: {
    color: "#EC8FE6",
  },
  ghost: {
    color: "#5269AD",
  },
  fire: {
    color: "#FF9D55",
  },
  ice: {
    color: "#73CEC0",
  },
  grass: {
    color: "#63BC5A",
  },
  bug: {
    color: "#91C12F",
  },
  fighting: {
    color: "#CE416B",
  },
  normal: {
    color: "#919AA2",
  },
  dark: {
    color: "#5A5465",
  },
  steel: {
    color: "#5A8EA2",
  },
  rock: {
    color: "#C5B78C",
  },
  psychic: {
    color: "#FA7179",
  },
  ground: {
    color: "#D97845",
  },
  flying: {
    color: "#89AAE3",
  },
};

export function formatId(id: string) {
  if (id.length === 1) {
    return `00${id}`;
  }

  if (id.length === 2) {
    return `0${id}`;
  }
  return id;
}


