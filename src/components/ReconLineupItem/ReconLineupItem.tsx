import React, { useContext, useEffect, useRef } from 'react';
import { Lineup, LineupDifficulty, LineupUsecase } from '../../interfaces/Lineup';
import Difficulty from '../LineupBadges/Difficulty/Difficulty';
import Usefulness from '../LineupBadges/Usecase/Usecase';
import Side from '../LineupBadges/Side/Side';
import classes from './ReconLineupItem.module.css';
import { MapContext } from '../../MapContext';
import Usecase from '../LineupBadges/Usecase/Usecase';

function ReconLineupItem(props: { lineup: Lineup, isActive: boolean, prefix: string }) {

    let hidden = false;

    const mapContext = useContext(MapContext);
    const filters = mapContext.mapState.filters;

    // difficulty
    if (filters.difficulty.length !== 0) {
        if (!filters.difficulty.includes(props.lineup.difficulty)) {
            hidden = true;
        }
    }

    // use case
    if (filters.usecase.length !== 0) {
        let hasAtLeastOneUseCase = false;
        for (let i = 0; i < filters.usecase.length; i++) {
            switch (filters.usecase[i]) {
                case LineupUsecase.Essential:
                    if (props.lineup.usecase.essential) {
                        hasAtLeastOneUseCase = true;
                    }
                    break;
                case LineupUsecase.RoundStart:
                    if (props.lineup.usecase.roundStart) {
                        hasAtLeastOneUseCase = true;
                    }
                    break;
                case LineupUsecase.Retake:
                    if (props.lineup.usecase.retake) {
                        hasAtLeastOneUseCase = true;
                    }
                    break;
            }
        }
        if (!hasAtLeastOneUseCase) {
            hidden = true;
        }
    }

    // side
    if (filters.side.length !== 0) {
        if (!filters.side.includes(props.lineup.side)) {
            hidden = true;
        }
    }


    // function toggleFilter(filter: LineupDifficulty | LineupUsecase | LineupSide, filterCategory: filterCategory) {
    //     let newState = mapContext.mapState;

    //     const stateFilterCategory: any[] = newState.filters[filterCategory];

    //     if (stateFilterCategory.includes(filter)) {
    //         stateFilterCategory.splice(stateFilterCategory.indexOf(filter), 1);
    //     } else {
    //         stateFilterCategory.push(filter);
    //     }

    //     newState.filters[filterCategory] = stateFilterCategory;

    //     mapContext.setMapState(newState)
    //     setTriggerFilterUpdate(triggerFilterUpdate + 1);
    // }



    return (
        <>
            {
                !hidden ?
                    <div className={`${classes.container} ${props.isActive ? classes.active : ''} ${hidden ? classes.hidden : ''}`}>
                        <div className={classes.background}></div>
                        <div className={classes.main}>
                            <h1 className={classes.title}>{props.prefix.length > 1 ? `${props.prefix}` : `0${props.prefix}`} // {props.lineup.title}</h1>
                            <div className={classes.filters}>
                                <Difficulty difficulty={props.lineup.difficulty} />
                                {
                                    props.lineup.usecase.essential ? <Usecase usecase={LineupUsecase.Essential} /> : undefined
                                }
                                {
                                    props.lineup.usecase.roundStart ? <Usecase usecase={LineupUsecase.RoundStart} /> : undefined
                                }
                                {
                                    props.lineup.usecase.retake ? <Usecase usecase={LineupUsecase.Retake} /> : undefined
                                }
                                <Side side={props.lineup.side} />
                            </div>
                        </div>
                    </div>
                    : <></>
            }
        </>


    );
}

export default ReconLineupItem;