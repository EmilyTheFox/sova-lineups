import React, { useContext } from 'react';
import classes from './LineupMapMarker.module.css';
import { MarkerComponentProps } from '../LineupMap/ImageMarker';
import { MapContext } from '../../MapContext';
import { Lineup, LineupUsecase } from '../../interfaces/Lineup';

function LineupMapMarker(props: MarkerComponentProps) {

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
                case LineupUsecase.Faking:
                    if (props.lineup.usecase.faking) {
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

    function setActiveMapLineup(lineup: Lineup) {
        let newState = JSON.parse(JSON.stringify(mapContext.mapState));

        newState.mapViewingLineup = lineup;

        mapContext.setMapState(newState);

        console.log('Clicked on marker with ID ' + lineup.id)
    }

    return (
        <>
            {
                !hidden ?
                    <div className={classes.lineup_marker} key={`${props.lineup.id}`} onClick={() => setActiveMapLineup(props.lineup)} />
                    : <></>
            }
        </>
    )
}

export default LineupMapMarker;