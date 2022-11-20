import React from 'react';
import classes from './LogsContainer.module.css';
import LogItem from '../LogItem/LogItem';
import logs from '../../data/logs';

function LogsContainer() {

    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <div className={classes.left} />
                <div className={classes.middle}>
                    <div className={classes.whiteLine}></div>
                    <div className={classes.header}>Logs</div>
                    <div className={classes.content}>
                        <div className={classes.content_info}>
                            Here you'll find updates and changes to the site regarding content. Any additions of new darts, maps or more content in general (shock darts/guides) will all be listed below. Although many of the darts here avoid relying on the in game HUD, darts that are altered due to this will either be removed/updated accordingly. Site bugs will be listed to a minimum unless they ruin or prevent the UI/UX.
                        </div>
                        <div className={classes.content_logs}>
                            <div className={classes.log_container}>
                                {
                                    logs.map((log, i) => (
                                        <LogItem description={log.description} date={log.date} key={i} />
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                </div>
                <div className={classes.right} />
            </div>
        </div>
    );
}

export default LogsContainer;