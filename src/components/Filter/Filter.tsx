import React from 'react';
import classes from './Filter.module.css';
function Filter() {

    enum FilterValue {
        EASY,
        MEDIUM,
        HARD,
        ESSENTIAL,
        ATTACKER,
        DEFENDER
    }

    function toggleFilter(filter: FilterValue) {
        switch (filter) {
            case FilterValue.EASY:
                break;
            case FilterValue.MEDIUM:
                break;
            case FilterValue.HARD:
                break;
            case FilterValue.ESSENTIAL:
                break;
            case FilterValue.ATTACKER:
                break;
            case FilterValue.DEFENDER:
                break;
        }
    }

    let [filterList, setFilterList] = React.useState({
        easy: null,
        medium: null,
        hard: null,
        essential: null,
        attacker: null,
        defender: null
    });

    return (
        <div className={classes.container}>
            <h5 className={classes.title}>
                <span>Filters</span>
            </h5>
            <div className={classes.main}>
                <h1
                    className={classes.filter}
                    style={{ backgroundColor: filterList.easy ? 'rgb(98, 163, 29)' : 'rgb(88, 88, 88)' }}
                    onClick={() => toggleFilter(FilterValue.EASY)}
                >
                    Easy
                </h1>
                <h1
                    className={classes.filter}
                    style={{ backgroundColor: filterList.medium ? 'rgb(163, 157, 94)' : 'rgb(88, 88, 88)' }}
                    onClick={() => toggleFilter(FilterValue.MEDIUM)}
                >
                    Medium
                </h1>
                <h1
                    className={classes.filter}
                    style={{ backgroundColor: filterList.hard ? 'rgb(175, 41, 41)' : 'rgb(88, 88, 88)' }}
                    onClick={() => toggleFilter(FilterValue.HARD)}
                >
                    Hard
                </h1>
                <h1
                    className={classes.filter}
                    style={{ backgroundColor: filterList.essential ? 'rgb(53,142,197)' : 'rgb(88, 88, 88)' }}
                    onClick={() => toggleFilter(FilterValue.ESSENTIAL)}
                >
                    Essential
                </h1>
                <h1
                    className={classes.filter}
                    style={{ backgroundColor: filterList.attacker ? 'rgb(255, 123, 0)' : 'rgb(88, 88, 88)' }}
                    onClick={() => toggleFilter(FilterValue.ATTACKER)}
                >
                    Attacking
                </h1>
                <h1
                    className={classes.filter}
                    style={{ backgroundColor: filterList.defender ? 'rgb(99,56,126)' : 'rgb(88, 88, 88)' }}
                    onClick={() => toggleFilter(FilterValue.DEFENDER)}
                >
                    Defending
                </h1>
            </div>
        </div>
    );
}

export default Filter;