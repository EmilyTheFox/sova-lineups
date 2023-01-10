import React, { useContext } from 'react';
import classes from './LineupMapHeader.module.css';
import { ValorantMap } from '../../interfaces/ValorantMap';

import map_ascent from '../../assets/map_headers/map_ascent.webp';
import map_bind from '../../assets/map_headers/map_bind.webp';
import map_breeze from '../../assets/map_headers/map_breeze.webp';
import map_fracture from '../../assets/map_headers/map_fracture.webp';
import map_haven from '../../assets/map_headers/map_haven.webp';
import map_icebox from '../../assets/map_headers/map_icebox.webp';
import map_lotus from '../../assets/map_headers/map_lotus.webp';
import map_pearl from '../../assets/map_headers/map_pearl.webp';
import map_split from '../../assets/map_headers/map_split.webp';
import { MapContext } from '../../MapContext';

function LineupMapHeader(props: { map: ValorantMap }) {

    let map;
    let location;

    switch (props.map) {
        case ValorantMap.Ascent:
            map = map_ascent;
            location = 'Venice, Italy';
            break;
        case ValorantMap.Bind:
            map = map_bind;
            location = 'Rebat, Morocco';
            break;
        case ValorantMap.Breeze:
            map = map_breeze;
            location = 'Bermuda Triangle';
            break;
        case ValorantMap.Fracture:
            map = map_fracture;
            location = 'Santa Fe, New Mexico';
            break;
        case ValorantMap.Haven:
            map = map_haven;
            location = 'Thimphu, Bhutan';
            break;
        case ValorantMap.Icebox:
            map = map_icebox;
            location = 'Bennett Island, Russia';
            break;
        case ValorantMap.Lotus:
            map = map_lotus;
            location = 'Western Ghats, India';
            break;
        case ValorantMap.Pearl:
            map = map_pearl;
            location = 'Lisbon, Portugal';
            break;
        case ValorantMap.Split:
            map = map_split;
            location = 'Tokyo, Japan';
            break;
    }

    let background = {
        backgroundImage: `url(${map})`
    };

    const mapContext = useContext(MapContext);

    const dropdownClickHandler = () => {
        let newState = JSON.parse(JSON.stringify(mapContext.mapState));

        newState.sideSelectorOpen = !newState.sideSelectorOpen;

        mapContext.setMapState(newState);
    }

    return (
        <div style={background} className={classes.container}>
            <div className={classes.main}>
                <div className={classes.button} onClick={() => dropdownClickHandler()}>
                    <div className={classes.icon} />
                    <div className={classes.icon} />
                    <div className={classes.icon} />
                </div>
                <div className={classes.line}>
                    <h2 className={classes.title}>{props.map}<span className={classes.location}>{location}</span></h2>
                </div>
            </div>
        </div>
    );
}

export default LineupMapHeader;