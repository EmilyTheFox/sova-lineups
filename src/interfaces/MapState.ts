import { Filters } from "./Filters";
import { Lineup } from "./Lineup";
import { ValorantMap } from "./ValorantMap";

export interface MapState {
    lineups: Lineup[],
    map: ValorantMap,
    filters: Filters
}