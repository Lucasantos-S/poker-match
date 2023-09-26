import React from "react";
import { IIconProps, IIcons } from "./Icons.structure";

import VisibilityIcon from "./VisibilityIcon";
import VisibilityOfIcon from "./VisibilityOfIcon";
import MailIcon from "./MailIcon";
import LockIcon from "./LockIcon";
import Water from "./Water";
import Dragon from "./Dragon";
import Electric from "./Electric";
import Fairy from "./Fairy";
import Ghost from "./Ghost";
import Fire from "./Fire";
import Ice from "./Ice";
import Grass from "./Grass";
import Bug from "./Bug";
import Fighting from "./Fighting";
import Normal from "./Normal";
import Dark from "./Dark";
import Steel from "./Steel";
import Rock from "./Rock";
import Psychic from "./Psychic";
import Ground from "./Ground";
import Poison from "./Poison";
import Flying from "./Flying";
import CloseIcon from "./CloseIcon";
import WeightIcon from "./WeightIcon";
import MatchIcon from "./Match";
import NotMatchIcon from "./NotMatch";
import ControlIcon from "./Control";
import CheckIcon from "./checkIcon";

/**
 * @description Component to render all svg icons
 * @example ````tsx
 * <Icons name="arrow-down" size={20} color="#F4F4F4" />
 
 *
 * @param size - size of icon
 * @param color - color of icon
 * @param name - name of icon
 */

export default function Icons({ size, color, name, onClick }: IIconProps) {
  const iconsProps = {
    onClick,
    size,
    color,
  };

  const iconsHashmap: IIcons = {
    "Visibility-Icon": <VisibilityIcon {...iconsProps} />,
    "Visibility-Of-Icon": <VisibilityOfIcon {...iconsProps} />,
    "Mail-Icon": <MailIcon {...iconsProps} />,
    "Lock-Icon": <LockIcon {...iconsProps} />,
    "Close-Icon": <CloseIcon {...iconsProps} />,
    "Weight-Icon": <WeightIcon {...iconsProps} />,
    "Match-Icon": <MatchIcon {...iconsProps} />,
    "NotMatch-Icon": <NotMatchIcon {...iconsProps} />,
    "Control-Icon": <ControlIcon {...iconsProps} />,
    "Check-Icon": <CheckIcon {...iconsProps} />,
    water: <Water {...iconsProps} />,
    dragon: <Dragon {...iconsProps} />,
    electric: <Electric {...iconsProps} />,
    fairy: <Fairy {...iconsProps} />,
    ghost: <Ghost {...iconsProps} />,
    fire: <Fire {...iconsProps} />,
    ice: <Ice {...iconsProps} />,
    grass: <Grass {...iconsProps} />,
    bug: <Bug {...iconsProps} />,
    fighting: <Fighting {...iconsProps} />,
    normal: <Normal {...iconsProps} />,
    dark: <Dark {...iconsProps} />,
    steel: <Steel {...iconsProps} />,
    rock: <Rock {...iconsProps} />,
    psychic: <Psychic {...iconsProps} />,
    ground: <Ground {...iconsProps} />,
    poison: <Poison {...iconsProps} />,
    flying: <Flying {...iconsProps} />,
  };

  return iconsHashmap[name as keyof typeof iconsHashmap] || null;
}
