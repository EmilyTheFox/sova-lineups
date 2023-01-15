import React, { useContext, useEffect } from 'react';
import { Lineup } from '../../interfaces/Lineup';
import { ValorantMap } from '../../interfaces/ValorantMap';
import Filter from '../Filter/Filter';
import ReconLineupItem from '../ReconLineupItem/ReconLineupItem';
import classes from './ReconLineupsContainer.module.css';
import gsap, { Expo } from 'gsap';
import { MapContext } from '../../MapContext';
import ReconLineupDetails from '../ReconLineupDetails/ReconLineupDetails';
import LineupMapHeader from '../LineupMapHeader/LineupMapHeader';
import LineupMap from '../LineupMap/LineupMap';

import view_ascent from '../../assets/view_map_buttons/map_ascent.webp';
import view_bind from '../../assets/view_map_buttons/map_bind.webp';
import view_breeze from '../../assets/view_map_buttons/map_breeze.webp';
import view_fracture from '../../assets/view_map_buttons/map_fracture.webp';
import view_haven from '../../assets/view_map_buttons/map_haven.webp';
import view_icebox from '../../assets/view_map_buttons/map_icebox.webp';
import view_pearl from '../../assets/view_map_buttons/map_pearl.webp';
import view_split from '../../assets/view_map_buttons/map_split.webp';

import ascent_data from '../../data/reconLineups/ascent';
import bind_data from '../../data/reconLineups/bind';
import breeze_data from '../../data/reconLineups/breeze';
import fracture_data from '../../data/reconLineups/fracture';
import haven_data from '../../data/reconLineups/haven';
import icebox_data from '../../data/reconLineups/icebox';
import lotus_data from '../../data/reconLineups/lotus';
import pearl_data from '../../data/reconLineups/pearl';
import split_data from '../../data/reconLineups/split';


function ReconLineupsContainer(props: { map: ValorantMap }) {

    const mapContext = useContext(MapContext);

    function showLineupMap() {
        let newState = JSON.parse(JSON.stringify(mapContext.mapState));

        newState.activeLineup = null;

        newState.sideSelectorOpen = false;

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
            case ValorantMap.Breeze:
                newState.lineups = breeze_data;
                break;
            case ValorantMap.Fracture:
                newState.lineups = fracture_data;
                break;
            case ValorantMap.Haven:
                newState.lineups = haven_data;
                break;
            case ValorantMap.Icebox:
                newState.lineups = icebox_data;
                break;
            case ValorantMap.Lotus:
                newState.lineups = lotus_data;
                break;
            case ValorantMap.Pearl:
                newState.lineups = pearl_data;
                break;
            case ValorantMap.Split:
                newState.lineups = split_data;
                break;
            default:
                newState.lineups = []
                break;
        }

        if (newState.activeLineup !== null) {
            if (!newState.lineups.some((lineup, i) => {
                return lineup.title === newState.activeLineup?.title && lineup.result === newState.activeLineup?.result;
            })) {
                newState.activeLineup = newState.lineups.length > 0 ? newState.lineups[0] : null;
            }
        }

        if (newState.activeLineup === null) {
            if (newState.mapViewingLineup === null || !newState.lineups.some((lineup, i) => {
                return lineup.title === newState.mapViewingLineup?.title && lineup.result === newState.mapViewingLineup?.result;
            })) {
                newState.mapViewingLineup = newState.lineups.length > 0 ? newState.lineups[0] : null;
            }
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

    const backdropClickHandler = () => {
        let newState = JSON.parse(JSON.stringify(mapContext.mapState));

        newState.sideSelectorOpen = false;

        mapContext.setMapState(newState);
    }


    let map;

    switch (props.map) {
        case ValorantMap.Ascent:
            map = view_ascent;
            break;
        case ValorantMap.Bind:
            map = view_bind;
            break;
        case ValorantMap.Breeze:
            map = view_breeze;
            break;
        case ValorantMap.Fracture:
            map = view_fracture;
            break;
        case ValorantMap.Haven:
            map = view_haven;
            break;
        case ValorantMap.Icebox:
            map = view_icebox;
            break;
        case ValorantMap.Pearl:
            map = view_pearl;
            break;
        case ValorantMap.Split:
            map = view_split;
            break;
    }

    let view_map_button_background = {
        backgroundImage: `url(${map})`
    };

    return (
        <div className={classes.container}>
            {
                mapContext.mapState.sideSelectorOpen ? (
                    <div className={classes.backdrop} onClick={() => backdropClickHandler()} />
                ) : (
                    <></>
                )
            }
            <div className={classes.main}>
                <div className={`${classes.lineup_selector} ${mapContext.mapState.sideSelectorOpen ? classes.mobile_expanded : ''}`}>
                    <div id="viewMap" onClick={() => { showLineupMap() }} className={`${classes.lineup_map_button}`} style={view_map_button_background}>
                        <h1 className={classes.lineup_map_view_text}>View Map</h1>
                    </div>

                    <div className={classes.filter} id="filterList">
                        <Filter />
                    </div>

                    <div className={classes.lineup_selector_main} id="lineupsList">
                        {
                            mapContext.mapState.lineups.length > 0 ? (
                                mapContext.mapState.lineups.map((lineup: Lineup, i) => (
                                    <ReconLineupItem lineup={lineup} isActive={lineup.id === mapContext.mapState.activeLineup?.id} prefix={`${i + 1}`} key={i} />
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