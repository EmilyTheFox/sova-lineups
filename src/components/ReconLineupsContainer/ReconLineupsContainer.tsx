import React, { useEffect, useRef } from 'react';
import { ReconLineup } from '../../interfaces/ReconLineup';
import { ValorantMap } from '../../interfaces/ValorantMap';
import Filter from '../Filter/Filter';
import ReconLineupItem from '../ReconLineupItem/ReconLineupItem';
import classes from './ReconLineupsContainer.module.css';
import gsap, { Expo } from 'gsap';

import ascent_data from '../../data/reconLineups/ascent';
import { useEffectOnce, useIntersection } from 'react-use';

function ReconLineupsContainer(props: { map: ValorantMap }) {

    let [sideLineupsOpen, setSideLineupsOpen] = React.useState(false);
    let [lineupList, setLineupsList] = React.useState<ReconLineup[]>([]);

    useEffect(() => {
        switch (props.map) {
            case ValorantMap.Ascent:
                setLineupsList(ascent_data);
                break;

            default:
                break;
        }

        fadeInLineupsList(document.getElementById('lineupsList'));
        fadeInFilterList(document.getElementById('filterList'));
    }, [])

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
                            lineupList.map((lineup: ReconLineup, i) => (
                                <ReconLineupItem lineup={lineup} isActive={false} key={i} />
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