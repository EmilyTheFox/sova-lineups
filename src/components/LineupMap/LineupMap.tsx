import React, { useContext, useEffect, useState } from 'react';
import classes from './LineupMap.module.css';
import ImageMarker, { Marker } from './ImageMarker'
import LineupMapMarker from '../LineupMapMarker/LineupMapMarker';
import { MapContext } from '../../MapContext';
import { ValorantMap } from '../../interfaces/ValorantMap';
import Difficulty from '../LineupBadges/Difficulty/Difficulty';
import Usecase from '../LineupBadges/Usecase/Usecase';
import { Lineup, LineupUsecase } from '../../interfaces/Lineup';
import Side from '../LineupBadges/Side/Side';

import ascent_layout from '../../assets/map_layouts/ascent_layout.svg'
import bind_layout from '../../assets/map_layouts/bind_layout.svg';
import breeze_layout from '../../assets/map_layouts/breeze_layout.svg';
import fracture_layout from '../../assets/map_layouts/fracture_layout.svg';
import haven_layout from '../../assets/map_layouts/haven_layout.svg';
import icebox_layout from '../../assets/map_layouts/icebox_layout.png';
import pearl_layout from '../../assets/map_layouts/pearl_layout.svg';
import split_layout from '../../assets/map_layouts/split_layout.svg';

function LineupMap() {

    const mapContext = useContext(MapContext);

    useEffect(() => {
        let newMarkers = [];

        for (let i = 0; i < mapContext.mapState.lineups.length; i++) {
            let lineup = mapContext.mapState.lineups[i];

            if (lineup.landsAt) {
                newMarkers.push({
                    left: lineup.landsAt.x,
                    top: lineup.landsAt.y,
                    lineup: lineup
                });
            }
        }

        setMarkers(newMarkers);

    }, [mapContext.mapState.lineups]);

    const [markers, setMarkers] = useState<Marker[]>([]);

    let layout = ascent_layout

    function setLayout() {
        switch (mapContext.mapState.map) {
            case ValorantMap.Ascent:
                layout = ascent_layout;
                break;
            case ValorantMap.Bind:
                layout = bind_layout;
                break;
            case ValorantMap.Breeze:
                layout = breeze_layout;
                break;
            case ValorantMap.Fracture:
                layout = fracture_layout;
                break;
            case ValorantMap.Haven:
                layout = haven_layout;
                break;
            case ValorantMap.Icebox:
                layout = icebox_layout;
                break;
            case ValorantMap.Pearl:
                layout = pearl_layout;
                break;
            case ValorantMap.Split:
                layout = split_layout;
                break;
        }
    }
    setLayout();

    function setActiveLineup(lineup: Lineup) {
        let newState = JSON.parse(JSON.stringify(mapContext.mapState));

        //mapContext.mapState.
        newState.activeLineup = lineup;
        newState.mapViewingLineup = null;

        mapContext.setMapState(newState);

        console.log('Clicked on marker with ID ' + lineup.id)
        console.log(newState.mapViewingLineup);
    }

    return (

        <div className={classes.main}>
            <div className={classes.background_text}>{mapContext.mapState.map}</div>
            <div className={classes.main_left}>
                <ImageMarker
                    src={layout}
                    alt={`${mapContext.mapState.map} lineups map`}
                    markers={markers}
                    markerComponent={LineupMapMarker}
                    extraClass={classes.lineup_map_container}
                    // TO DO: remove this cuz its for testing sake only:
                    onAddMarker={(marker: Marker) => {
                        marker.top = parseFloat(`${marker.top}`) + 1.3
                        marker.left = parseFloat(`${marker.left}`) + 1.3
                        marker.lineup = mapContext.mapState.lineups[0]
                        setMarkers([...markers, marker])
                    }}
                />
            </div>
            <div className={classes.main_right}>
                {
                    mapContext.mapState.mapViewingLineup ? <>
                        <div className={classes.textbox}>
                            <h1 className={classes.title}>{mapContext.mapState.mapViewingLineup.title}</h1>
                            <div className={classes.filter_and_details}>
                                <div className={classes.filterbox}>

                                    <Difficulty difficulty={mapContext.mapState.mapViewingLineup.difficulty} />
                                    {
                                        mapContext.mapState.mapViewingLineup.usecase.essential ? <Usecase usecase={LineupUsecase.Essential} /> : undefined
                                    }
                                    {
                                        mapContext.mapState.mapViewingLineup.usecase.faking ? <Usecase usecase={LineupUsecase.Faking} /> : undefined
                                    }
                                    {
                                        mapContext.mapState.mapViewingLineup.usecase.retake ? <Usecase usecase={LineupUsecase.Retake} /> : undefined
                                    }
                                    <Side side={mapContext.mapState.mapViewingLineup.side} />
                                </div>
                                <div className={classes.bounces}>
                                    <h3 className={classes.bounces_title}>Bounces</h3>
                                    <div className={classes.bounce_container}>
                                        {
                                            [...Array(2)].map((value, i) => (
                                                <div className={`${i < mapContext.mapState.mapViewingLineup!.bounces ? classes.bounce : classes.bounce_empty}`} key={i} />
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className={classes.charges}>
                                    <h3 className={classes.charges_title}>Charges</h3>
                                    <div className={classes.charge_container}>
                                        {
                                            [...Array(3)].map((value, i) => (
                                                <div className={`${i < mapContext.mapState.mapViewingLineup!.charges ? classes.charge : classes.charge_empty}`} key={i} />
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className={classes.info_text_container}>
                                <p className={classes.info_text}>{mapContext.mapState.mapViewingLineup.info}</p>
                            </div>
                            <div className={classes.view_lineup_how_to} onClick={() => {
                                if (mapContext.mapState.mapViewingLineup) {
                                    setActiveLineup(mapContext.mapState.mapViewingLineup);
                                }
                            }}>
                                <h1>View How To</h1>
                            </div>
                        </div>
                        <div className={classes.map_container}>
                            <div className={classes.map_wrapper}>
                                <div className={classes.map_block} />
                                <div className={classes.map_line} />
                                <img src={mapContext.mapState.mapViewingLineup.map} alt="coverage map" className={classes.map} />
                            </div>
                        </div>
                    </> : <></>
                }

            </div>
        </div>
    );
}

export default LineupMap;