import React from 'react';
import classes from './LineupMap.module.css';
import ascent_layout from '../../assets/map_layouts/ascent_layout.svg'

function LineupMap() {

    return (
        <div className={classes.container}>
            <img height='100%' width='100%' src={ascent_layout} alt="Map layout Ascent" />
        </div>
    );
}

export default LineupMap;