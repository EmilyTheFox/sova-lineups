import React from 'react';
import classes from './Map.module.css';

function Map(props: { title: string, location: string, map: string }) {

    let style = {
        backgroundImage: `url(${props.map})`
    };
    return (
        <div
            className={classes.container}
            style={style}
        >
            <div className={classes.main}>
                <div className={classes.info}>
                    <h1 className={classes.map_location}>{props.location}</h1>
                    <h1 data-content={props.title} className={classes.map_title}>
                        {props.title}
                    </h1>
                </div>
            </div>
            <div className={classes.box} />
        </div>
    );
}

export default Map;