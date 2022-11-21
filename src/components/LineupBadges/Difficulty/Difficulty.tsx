import React from 'react';
import { ReconLineupDifficulty } from '../../../interfaces/ReconLineup';
import classes from './Difficulty.module.css';

function Difficulty(props: { difficulty: ReconLineupDifficulty }) {

    let color;
    switch (props.difficulty) {
        case ReconLineupDifficulty.Easy:
            color = classes.easy
            break;
        case ReconLineupDifficulty.Medium:
            color = classes.medium
            break;
        case ReconLineupDifficulty.Hard:
            color = classes.hard
            break;
    }

    return (
        <div className={classes.container}>
            <h1 className={`${classes.difficulty_badge} ${color}`}>{props.difficulty}</h1>
        </div>
    );
}

export default Difficulty;