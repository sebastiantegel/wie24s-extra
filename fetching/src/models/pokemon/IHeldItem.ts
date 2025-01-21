export interface IHeldItem {
  item: IItem;
  version_details: IVersionDetail[];
}

interface IItem {
  name: string;
  url: string;
}

interface IVersionDetail {
  rarity: number;
  version: IVersion;
}

interface IVersion {
  name: string;
  url: string;
}
