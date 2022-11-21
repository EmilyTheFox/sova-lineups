import React from 'react';
import { ReconLineupSide } from '../../../interfaces/ReconLineup';
import classes from './Side.module.css';

function Side(props: { side?: ReconLineupSide }) {

    let color;
    switch (props.side) {
        case ReconLineupSide.Attacking:
            color = classes.attacking
            break;
        case ReconLineupSide.Defending:
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