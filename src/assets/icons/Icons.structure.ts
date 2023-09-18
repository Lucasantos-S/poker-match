export interface IProps {
  onClick?: () => void;
  color?: string;
  size: number;
}

export interface IHelperProps extends IProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export interface IIconProps extends IProps {
  name: keyof IIcons;
}

export interface ICloseIcon extends IProps {
  isAbsolute?: boolean;
}

export interface IIcons {
  "Visibility-Icon": JSX.Element;
  "Visibility-Of-Icon": JSX.Element;
  "Mail-Icon": JSX.Element;
  "Lock-Icon": JSX.Element;
  water: JSX.Element;
  dragon: JSX.Element;
  electric: JSX.Element;
  fairy: JSX.Element;
  ghost: JSX.Element;
  fire: JSX.Element;
  ice: JSX.Element;
  grass: JSX.Element;
  bug: JSX.Element;
  fighting: JSX.Element;
  normal: JSX.Element;
  dark: JSX.Element;
  steel: JSX.Element;
  rock: JSX.Element;
  psychic: JSX.Element
  ground: JSX.Element
poison:JSX.Element;
}
