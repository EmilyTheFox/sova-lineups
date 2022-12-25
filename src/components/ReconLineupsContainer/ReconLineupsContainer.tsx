import React, { useContext, useEffect } from 'react';
import { Lineup } from '../../interfaces/Lineup';
import { ValorantMap } from '../../interfaces/ValorantMap';
import Filter from '../Filter/Filter';
import ReconLineupItem from '../ReconLineupItem/ReconLineupItem';
import classes from './ReconLineupsContainer.module.css';
import gsap, { Expo } from 'gsap';

import ascent_data from '../../data/reconLineups/ascent';
import bind_data from '../../data/reconLineups/bind';
import { MapContext } from '../../MapContext';
import ReconLineupDetails from '../ReconLineupDetails/ReconLineupDetails';
import LineupMapHeader from '../LineupMapHeader/LineupMapHeader';
import LineupMap from '../LineupMap/LineupMap';

function ReconLineupsContainer(props: { map: ValorantMap }) {

    let [sideLineupsOpen, setSideLineupsOpen] = React.useState(false);

    const mapContext = useContext(MapContext);

    function showLineupMap() {
        let newState = JSON.parse(JSON.stringify(mapContext.mapState));

        newState.activeLineup = null;

        mapContext.setMapState(newState);
    }

    function setLineups() {
        let newState = mapContext.mapState;

        newState.map = props.map;

        switch (props.map) {
            case ValorantMap.Ascent:
                newState.lineups = ascent_data;
                break;
            case ValorantMap.Bind:
                newState.lineups = bind_data;
                break;
            default:
                newState.lineups = []
                break;
        }

        if (newState.activeLineup !== null && !newState.lineups.includes(newState.activeLineup)) {
            newState.activeLineup = newState.lineups.length > 0 ? newState.lineups[0] : null;
        }

        mapContext.setMapState(newState);
    }
    setLineups();

    useEffect(() => {
        fadeInLineupsList(document.getElementById('lineupsList'));
        fadeInFilterList(document.getElementById('filterList'));
        fadeInFilterList(document.getElementById('viewMap'));
    }, [props.map]);

    const fadeInLineupsList = (element: GSAPTweenTarget) => {
        gsap.fromTo(element, {
            x: -200,
            opacity: 0
        }, {
            duration: 1,
            x: 0,
            opacity: 1,
            ease: Expo.easeOut,
            delay: 1
        });
    }

    const fadeInFilterList = (element: GSAPTweenTarget) => {
        gsap.fromTo(element, {
            y: -130,
            opacity: 0,
        }, {
            duration: 1,
            y: 0,
            ease: Expo.easeOut,
            opacity: 1,
            delay: 0.5,
        });
    }

    let backdrop;
    let sideLineups;

    if (sideLineupsOpen) {
        // backdrop = <Backdrop onClick={() => sideLineupsOpen.backdropClickHandler()} />
        // sideLineups = (
        //     <div className={classes.lineup_selector} style={{ display: "block", zIndex: '5000' }}>
        //         <div ref={(div) => (this.filterList = div)} className={classes.filter}>
        //             <Filter />
        //         </div>

        //         <div ref={(div) => (this.lineupList = div)} className={classes.lineup_selector_main}>
        //                     return value.lineups.map((lineup) => {
        //                         return (
        //                             <LineupItem
        //                                 className={classes.lineupItem}
        //                                 key={lineup.id}
        //                                 lineup={lineup}
        //                             />
        //                         );
        //                     });
        //         </div>
        //     </div>
        // )
    }
    return (
        <div className={classes.container}>
            {backdrop}
            {sideLineups}
            <div className={classes.main}>
                <div className={classes.lineup_selector}>
                    <div id="viewMap" onClick={() => { showLineupMap() }} className={`${classes.lineup_map_button}`}>
                        <h1 className={classes.lineup_map_view_text}>View Map</h1>
                    </div>

                    <div className={classes.filter} id="filterList">
                        <Filter />
                    </div>

                    <div className={classes.lineup_selector_main} id="lineupsList">
                        {
                            mapContext.mapState.lineups.length > 0 ? (
                                mapContext.mapState.lineups.map((lineup: Lineup, i) => (
                                    <ReconLineupItem lineup={lineup} isActive={lineup === mapContext.mapState.activeLineup} prefix={`${i + 1}`} key={i} />
                                ))
                            ) : (
                                <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <h1 style={{ color: 'whitesmoke', fontWeight: '600', fontSize: '3rem', padding: '5%' }}>There aren't any lineups here yet for <span style={{ textTransform: 'capitalize', color: 'rgb(255, 70, 85)' }}>{props.map}</span>. We will add some soon!</h1>
                                </div>
                            )
                        }
                    </div>
                </div>

                <div className={classes.lineup_detail}>
                    <LineupMapHeader map={mapContext.mapState.map}></LineupMapHeader>
                    {
                        mapContext.mapState.activeLineup !== null ? (
                            <ReconLineupDetails lineup={mapContext.mapState.activeLineup}></ReconLineupDetails>
                        ) : (
                            <LineupMap></LineupMap>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default ReconLineupsContainer;