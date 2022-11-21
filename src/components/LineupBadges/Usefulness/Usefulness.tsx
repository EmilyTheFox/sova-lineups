import React from 'react';
import { ReconLineupUsefulness } from '../../../interfaces/ReconLineup';
import classes from './Usefulness.module.css';

function Usefulness(props: { usefulness?: ReconLineupUsefulness }) {

    let color;
    switch (props.usefulness) {
        case ReconLineupUsefulness.Essential:
            color = classes.essential
            break;
    }

    return (
        <>
            {props.usefulness ? (
                <div className={classes.container}>
                    <h1 className={`${classes.usefulness_badge} ${color}`}>{props.usefulness}</h1>
                </div>
            ) : null}
        </>
    );
}

export default Usefulness;