export interface ISprite {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny_female: string | null;
  other: IOther;
}

interface IOther {
  dream_world: IDreamWorld;
  home: IHome;
  officialArtwork: IOfficialArtwork;
}

interface IDreamWorld {
  front_default: string;
  front_female: string | null;
}

interface IHome {
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

interface IOfficialArtwork {
  front_default: string;
  front_shiny: string;
}
