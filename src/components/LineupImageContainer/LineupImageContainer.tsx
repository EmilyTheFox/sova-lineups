import React from 'react';
import classes from './LineupImageContainer.module.css';
import gsap, { Expo } from 'gsap';


function LineupImageContainer(props: { link: string, info: string }) {

    const onHover = () => {
        gsap.to(document.getElementById(`background-${props.link}`), {
            left: 0,
            duration: 1.5,
            ease: Expo.easeOut
        });
        gsap.to(document.getElementById(`box-${props.link}`), {
            duration: 0,
            backgroundSize: "100% 100%"
        });
    }

    const onLeave = () => {
        gsap.to(document.getElementById(`background-${props.link}`), {
            left: '-170%',
            duration: 1.5,
            ease: Expo.easeOut
        });
        gsap.to(document.getElementById(`box-${props.link}`), {
            duration: 0,
            backgroundSize: "0 0"
        });
    }

    return (
        <div className={classes.container}>
            <div className={classes.info_text_container}>
                <p className={classes.info_text}>{props.info}</p>
            </div>
            <div className={classes.image_container} >
                <div className={classes.main} onMouseEnter={() => onHover()} onMouseLeave={() => onLeave()} onClick={() => window.open(props.link, '_blank')}>
                    <div id={`background-${props.link}`} className={classes.image_wrapper}></div>
                    <img className={classes.image} alt='visualization of the lineup' src={props.link} />
                    <div id={`box-${props.link}`} className={classes.box} />
                </div>
            </div>
        </div>
    );
}

export default LineupImageContainer;