import React from 'react';
import classes from './LineupMapMarker.module.css';
import { MarkerComponentProps } from '../LineupMap/ImageMarker';

function LineupMapMarker(props: MarkerComponentProps) {

    function showLineup() {
        console.log('Clicked on marker with ID ' + props.id)
    }

    return (
        <div className={classes.lineup_marker} key={`${props.id}`} onClick={() => showLineup()} />
    )
}

export default LineupMapMarker;