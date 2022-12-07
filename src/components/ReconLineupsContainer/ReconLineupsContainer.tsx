import React, { useContext, useEffect, useRef } from 'react';
import { Lineup } from '../../interfaces/Lineup';
import { ValorantMap } from '../../interfaces/ValorantMap';
import Filter from '../Filter/Filter';
import ReconLineupItem from '../ReconLineupItem/ReconLineupItem';
import classes from './ReconLineupsContainer.module.css';
import gsap, { Expo } from 'gsap';

import ascent_data from '../../data/reconLineups/ascent';
import { MapContext } from '../../MapContext';

function ReconLineupsContainer(props: { map: ValorantMap }) {

    let [sideLineupsOpen, setSideLineupsOpen] = React.useState(false);

    const mapContext = useContext(MapContext);

    const setLineups = () => {
        let newState = mapContext.mapState;

        newState.lineups = ascent_data;

        switch (props.map) {
            case ValorantMap.Ascent:
                newState.lineups = ascent_data;
                break;

            default:
                break;
        }

        mapContext.setMapState(newState);
    }
    setLineups();

    useEffect(() => {
        setLineups();

        fadeInLineupsList(document.getElementById('lineupsList'));
        fadeInFilterList(document.getElementById('filterList'));
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
            y: -100,
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
                    <div className={classes.filter} id="filterList">
                        <Filter />
                    </div>

                    <div className={classes.lineup_selector_main} id="lineupsList">
                        {
                            mapContext.mapState.lineups.map((lineup: Lineup, i) => (
                                <ReconLineupItem lineup={lineup} isActive={false} prefix={`${i + 1}`} key={i} />
                            ))
                        }
                    </div>
                </div>

                <div className={classes.lineup_detail}>
                    {/* <AppConsumer>
                        {(value) => {
                            return (
                                <MapHeader
                                    mapTitle={value.currentMap}
                                />
                            );
                        }}
                    </AppConsumer>
                    <AppConsumer>
                        {(value) => {
                            return (
                                <div ref={(div) => (this.detailItem = div)} className={classes.lineupDetailItem}>
                                    <LineupDetail lineupdetails={value.detailLineup} />
                                </div>
                            );
                        }}
                    </AppConsumer> */}
                </div>
            </div>
        </div>
    );
}

export default ReconLineupsContainer;