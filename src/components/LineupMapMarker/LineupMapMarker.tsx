import React from 'react';
import classes from './LineupMapMarker.module.css';
import ImageMarker, { MarkerComponentProps } from 'react-image-marker';

function LineupMapMarker(props: MarkerComponentProps) {

    function showLineup() {
        console.log('Clicked on a marker!')
    }

    return (
        <div className={classes.lineup_marker}
            onClick={() => showLineup()} />
    )
}

export default LineupMapMarker;