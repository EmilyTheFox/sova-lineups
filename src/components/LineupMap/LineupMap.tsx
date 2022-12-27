import React, { useContext, useEffect, useState } from 'react';
import classes from './LineupMap.module.css';
import ImageMarker, { Marker } from './ImageMarker'
import ascent_layout from '../../assets/map_layouts/ascent_layout.svg'
import LineupMapMarker from '../LineupMapMarker/LineupMapMarker';
import { MapContext } from '../../MapContext';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

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

    return (

        <div className={classes.main}>
            <div className={classes.background_text}>{mapContext.mapState.map}</div>
            <div className={classes.main_left}>
                <ImageMarker
                    src={ascent_layout}
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
                        <div className={classes.videoWrapper}>
                            <VideoPlayer
                                className={classes.vimeo}
                                url={mapContext.mapState.mapViewingLineup.video}
                                loop={true}
                                playing={false}
                                playsInline={true}
                                controls={true}
                            />
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