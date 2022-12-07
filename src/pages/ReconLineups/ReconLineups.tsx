import React, { useEffect, useState } from 'react';
import classes from './ReconLineups.module.css';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import { ValorantMap } from '../../interfaces/ValorantMap';
import ReconLineupsContainer from '../../components/ReconLineupsContainer/ReconLineupsContainer';
import { MapContext } from '../../MapContext';
import { MapState } from '../../interfaces/MapState';
import { LineupDifficulty } from '../../interfaces/Lineup';

function ReconLineups(props: { map: ValorantMap }) {

    const [mapState, setMapState] = useState<MapState>({
        lineups: [],
        map: ValorantMap.Ascent,
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
            <button onClick={() => {
                setMapState({
                    lineups: [],
                    map: ValorantMap.Bind,
                    filters: {
                        difficulty: [LineupDifficulty.Easy],
                        usecase: [],
                        side: [],
                    }
                })
            }}>

            </button>
            <Footer />
        </div>
    );
}

export default ReconLineups;