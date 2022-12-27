import { Filters } from "./Filters";
import { Lineup } from "./Lineup";
import { ValorantMap } from "./ValorantMap";

export interface MapState {
    lineups: Lineup[],
    activeLineup: Lineup | null,
    sideSelectorOpen: boolean,
    map: ValorantMap,
    filters: Filters
}