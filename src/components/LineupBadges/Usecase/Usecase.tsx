import React from 'react';
import { LineupUsecase } from '../../../interfaces/Lineup';
import classes from './Usecase.module.css';

function Usecase(props: { usecase?: LineupUsecase }) {

    let color;
    switch (props.usecase) {
        case LineupUsecase.Essential:
            color = classes.essential;
            break;
        case LineupUsecase.RoundStart:
            color = classes.roundstart;
            break;
        case LineupUsecase.Retake:
            color = classes.retake;
            break;
    }

    return (
        <>
            {props.usecase ? (
                <div className={classes.container}>
                    <h1 className={`${classes.usecase_badge} ${color}`}>{props.usecase === LineupUsecase.RoundStart ? 'Start' : props.usecase}</h1>
                </div>
            ) : null}
        </>
    );
}

export default Usecase;