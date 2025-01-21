export interface IAbility {
  ability: IInnerAbility;
  is_hidden: boolean;
  slot: number;
}

interface IInnerAbility {
  name: string;
  url: string;
}
