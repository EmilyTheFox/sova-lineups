import React from 'react';
import { LineupSide } from '../../../interfaces/Lineup';
import classes from './Side.module.css';

function Side(props: { side?: LineupSide }) {

    let color;
    switch (props.side) {
        case LineupSide.Attacking:
            color = classes.attacking
            break;
        case LineupSide.Defending:
            color = classes.defending
            break;
    }

    return (
        <>
            {props.side ? (
                <div className={classes.container}>
                    <h1 className={`${classes.side_badge} ${color}`}>{props.side}</h1>
                </div>
            ) : null}
        </>
    );
}

export default Side;