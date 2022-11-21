import React from 'react';
import { ReconLineup, ReconLineupDifficulty, ReconLineupSide, ReconLineupUsefulness } from '../../interfaces/ReconLineup';
import Difficulty from '../LineupBadges/Difficulty/Difficulty';
import Usefulness from '../LineupBadges/Usefulness/Usefulness';
import Side from '../LineupBadges/Side/Side';
import classes from './ReconLineupItem.module.css';

function ReconLineupItem(props: { lineup: ReconLineup, isActive: boolean, prefix: string }) {

    return (
        <div className={`${classes.container} ${props.isActive ? classes.active : ''}`}>
            <div className={classes.background}></div>
            <div className={classes.main}>
                <h1 className={classes.title}>{props.prefix.length > 1 ? `${props.prefix}` : `0${props.prefix}`} // {props.lineup.title}</h1>
                <div className={classes.filters}>
                    <Difficulty difficulty={props.lineup.difficulty} />
                    <Usefulness usefulness={props.lineup.usefulness} />
                    <Side side={props.lineup.side} />
                </div>
            </div>
        </div>
    );
}

export default ReconLineupItem;