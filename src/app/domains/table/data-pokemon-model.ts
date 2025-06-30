export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: NamedAPIResource[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  past_types: PokemonTypePast[];
  past_abilities: PokemonAbilityPast[];
  sprites: PokemonSprites;
  cries: PokemonCries;
  species: NamedAPIResource;
  stats: PokemonStat[];
  types: PokemonType[];
}

interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}

interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

interface PokemonTypePast {
  generation: NamedAPIResource;
  types: PokemonType[];
}

interface PokemonAbilityPast {
  generation: NamedAPIResource;
  abilities: (PokemonAbility | null)[];
}

interface PokemonHeldItem {
  item: NamedAPIResource;
  version_details: PokemonHeldItemVersion[];
}

interface PokemonHeldItemVersion {
  version: NamedAPIResource;
  rarity: number;
}

interface PokemonMove {
  move: NamedAPIResource;
  version_group_details: PokemonMoveVersion[];
}

interface PokemonMoveVersion {
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
  level_learned_at: number;
  order?: number;
}

interface VersionGameIndex {
  game_index: number;
  version: NamedAPIResource;
}

interface PokemonStat {
  stat: NamedAPIResource;
  effort: number;
  base_stat: number;
}

interface PokemonSprites {
  front_default: string | null;
  front_shiny: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  back_shiny_female: string | null;
}

interface PokemonCries {
  latest: string | null;
  legacy: string | null;
}

interface NamedAPIResource {
  name: string;
  url: string;
}

export interface NamedAPIResourceList {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedAPIResource[];
}
