import React from 'react';
import classes from './LogItem.module.css';

function LogItem(props: { description: string, date: string }) {

    return (
        <div className={classes.container}>
            <h1 className={classes.log}>{props.date}</h1>
            <h2 className={classes.log}>{props.description}</h2>
        </div>
    );
}

export default LogItem;