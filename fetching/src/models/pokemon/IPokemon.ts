import { IAbility } from "./IAbility";
import { ICry } from "./ICry";
import { IForm } from "./IForm";
import { IGame } from "./IGame";
import { IHeldItem } from "./IHeldItem";
import { IMove } from "./IMove";
import { INameUrl } from "./INameUrl";
import { ISprite } from "./ISprite";
import { IStat } from "./IStat";
import { IType } from "./IType";

export interface IPokemon {
  abilities: IAbility[];
  base_experience: number;
  cries: ICry;
  forms: IForm[];
  game_indices: IGame[];
  height: number;
  held_items: IHeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IMove[];
  name: string;
  order: number;
  species: INameUrl;
  sprites: ISprite;
  stats: IStat[];
  types: IType;
  weight: number;
}
