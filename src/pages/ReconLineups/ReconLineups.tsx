import React, { useState } from 'react';
import classes from './ReconLineups.module.css';
import Nav from '../../components/Nav/Nav';
import { ValorantMap } from '../../interfaces/ValorantMap';
import ReconLineupsContainer from '../../components/ReconLineupsContainer/ReconLineupsContainer';
import { MapContext } from '../../MapContext';
import { MapState } from '../../interfaces/MapState';

function ReconLineups(props: { map: ValorantMap }) {

    const [mapState, setMapState] = useState<MapState>({
        lineups: [],
        activeLineup: null,
        map: props.map,
        filters: {
            difficulty: [],
            usecase: [],
            side: [],
        }
    });

    return (
        <div className={classes.container}>
            <Nav />
            <MapContext.Provider value={{ mapState, setMapState }}>
                <ReconLineupsContainer map={props.map} />
            </MapContext.Provider>
        </div>
    );
}

export default ReconLineups;