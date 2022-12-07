import React from 'react';
import classes from './LineupImageContainer.module.css';

function LineupImageContainer(props: { link: string, info: string }) {
    return (
        <div className={classes.container}>
            <div className={classes.info_text_container}>
                <p className={classes.info_text}>{props.info}</p>
            </div>
            <div className={classes.image_container} >
                <div className={classes.main}/**  onMouseEnter={() => onHover2()} onMouseLeave={() => onLeave2()}  */ onClick={() => window.open(props.link, '_blank')}>
                    <div ref={el => { /** background2 = el */ }} className={classes.image_wrapper}></div>
                    <img className={classes.image} alt='image2' src={props.link} />
                    <div ref={el => { /** box2 = el */ }} className={classes.box} />
                </div>
            </div>
        </div>
    );
}

export default LineupImageContainer;