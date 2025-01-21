import { INameUrl } from "./INameUrl";

export interface IMove {
  move: IInnerMove;
  version_group_details: IVersionGroupDetail[];
}

interface IInnerMove {
  name: string;
  url: string;
}

interface IVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: INameUrl;
  version_group: INameUrl;
}
