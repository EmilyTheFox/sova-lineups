import React from 'react';
import { LineupDifficulty } from '../../../interfaces/Lineup';
import classes from './Difficulty.module.css';

function Difficulty(props: { difficulty: LineupDifficulty }) {

    let color;
    switch (props.difficulty) {
        case LineupDifficulty.Easy:
            color = classes.easy
            break;
        case LineupDifficulty.Medium:
            color = classes.medium
            break;
        case LineupDifficulty.Hard:
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