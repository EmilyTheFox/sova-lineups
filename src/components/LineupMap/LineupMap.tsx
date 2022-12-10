import React, { useState } from 'react';
import classes from './LineupMap.module.css';
import ImageMarker, { Marker } from 'react-image-marker';
import ascent_layout from '../../assets/map_layouts/ascent_layout.svg'
import LineupMapMarker from '../LineupMapMarker/LineupMapMarker';

function LineupMap() {
    const [markers, setMarkers] = useState<Marker[]>([
        {
            top: 50,
            left: 50
        }
    ]);

    return (
        <div className={classes.container}>
            <ImageMarker
                src={ascent_layout}
                markers={markers}
                markerComponent={LineupMapMarker}
            // onAddMarker={(marker: Marker) => setMarkers([...markers, marker])}
            />
        </div>
    );
}

export default LineupMap;