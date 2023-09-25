import { IIcons } from "@/assets/icons/Icons.structure";

export interface IPokemonModalDescriptionProps {
  icon: keyof IIcons;
  title: string;
  description: string;
}
