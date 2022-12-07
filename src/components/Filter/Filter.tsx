import React, { useContext, useEffect, useState } from 'react';
import { LineupDifficulty, LineupSide, LineupUsecase } from '../../interfaces/Lineup';
import { MapContext } from '../../MapContext';
import classes from './Filter.module.css';

enum filterCategory {
    Difficulty = 'difficulty',
    Side = 'side',
    Usecase = 'usecase'
}

function Filter() {

    function toggleFilter(filter: LineupDifficulty | LineupUsecase | LineupSide, filterCategory: filterCategory) {
        let newState = JSON.parse(JSON.stringify(mapContext.mapState));

        const stateFilterCategory: any[] = newState.filters[filterCategory];

        if (stateFilterCategory.includes(filter)) {
            stateFilterCategory.splice(stateFilterCategory.indexOf(filter), 1);
        } else {
            stateFilterCategory.push(filter);
        }

        newState.filters[filterCategory] = stateFilterCategory;

        mapContext.setMapState(newState)
        setTriggerFilterUpdate(triggerFilterUpdate + 1);
    }

    const mapContext = useContext(MapContext);

    let [filterList, setFilterList] = useState(mapContext.mapState.filters);
    let [triggerFilterUpdate, setTriggerFilterUpdate] = useState(0);

    useEffect(() => {
        setFilterList(mapContext.mapState.filters);
    }, [mapContext.mapState.filters]);

    return (
        <div className={classes.container}>
            <h5 className={classes.title}>
                <span>Filters</span>
            </h5>
            <div className={classes.main}>
                <div className={classes.filterset}>
                    <div className={classes.filterset_title}>
                        <h1>Difficulty</h1>
                    </div>
                    <div className={classes.filterset_filters}>
                        <h1
                            className={classes.filter}
                            style={{ backgroundColor: filterList.difficulty.includes(LineupDifficulty.Easy) ? 'rgb(88, 154, 93)' : 'rgb(88, 88, 88)' }}
                            onClick={() => toggleFilter(LineupDifficulty.Easy, filterCategory.Difficulty)}
                        >
                            Easy
                        </h1>
                        <h1
                            className={classes.filter}
                            style={{ backgroundColor: filterList.difficulty.includes(LineupDifficulty.Medium) ? 'rgb(178, 125, 88)' : 'rgb(88, 88, 88)' }}
                            onClick={() => toggleFilter(LineupDifficulty.Medium, filterCategory.Difficulty)}
                        >
                            Medium
                        </h1>
                        <h1
                            className={classes.filter}
                            style={{ backgroundColor: filterList.difficulty.includes(LineupDifficulty.Hard) ? 'rgb(167, 80, 81)' : 'rgb(88, 88, 88)' }}
                            onClick={() => toggleFilter(LineupDifficulty.Hard, filterCategory.Difficulty)}
                        >
                            Hard
                        </h1>
                    </div>
                </div>
                <div className={classes.filterset}>
                    <div className={classes.filterset_title}>
                        <h1>Usecase</h1>
                    </div>
                    <div className={classes.filterset_filters}>
                        <h1
                            className={classes.filter}
                            style={{ backgroundColor: filterList.usecase.includes(LineupUsecase.Essential) ? 'rgb(184,108,175)' : 'rgb(88, 88, 88)' }}
                            onClick={() => toggleFilter(LineupUsecase.Essential, filterCategory.Usecase)}
                        >
                            Essential
                        </h1>
                        <h1
                            className={classes.filter}
                            style={{ backgroundColor: filterList.usecase.includes(LineupUsecase.Faking) ? 'rgb(179,175,56)' : 'rgb(88, 88, 88)' }}
                            onClick={() => toggleFilter(LineupUsecase.Faking, filterCategory.Usecase)}
                        >
                            Faking
                        </h1>
                        <h1
                            className={classes.filter}
                            style={{ backgroundColor: filterList.usecase.includes(LineupUsecase.Retake) ? 'rgb(108,184,164)' : 'rgb(88, 88, 88)' }}
                            onClick={() => toggleFilter(LineupUsecase.Retake, filterCategory.Usecase)}
                        >
                            Retake
                        </h1>
                    </div>
                </div>
                <div className={classes.filterset}>
                    <div className={classes.filterset_title}>
                        <h1>Side</h1>
                    </div>
                    <div className={classes.filterset_filters}>
                        <h1
                            className={classes.filter}
                            style={{ backgroundColor: filterList.side.includes(LineupSide.Attacking) ? 'rgb(71, 129, 167)' : 'rgb(88, 88, 88)' }}
                            onClick={() => toggleFilter(LineupSide.Attacking, filterCategory.Side)}
                        >
                            Attacking
                        </h1>
                        <h1
                            className={classes.filter}
                            style={{ backgroundColor: filterList.side.includes(LineupSide.Defending) ? 'rgb(116,97,152)' : 'rgb(88, 88, 88)' }}
                            onClick={() => toggleFilter(LineupSide.Defending, filterCategory.Side)}
                        >
                            Defending
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;