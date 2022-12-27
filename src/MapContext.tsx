import { createContext } from 'react';
import { ValorantMap } from './interfaces/ValorantMap';
import { MapState } from './interfaces/MapState';

const mapState: MapState = {
    lineups: [],
    activeLineup: null,
    sideSelectorOpen: false,
    map: ValorantMap.Ascent,
    filters: {
        difficulty: [],
        side: [],
        usecase: []
    }
}

export const MapContext = createContext({ mapState, setMapState: (mapState: any) => { } });