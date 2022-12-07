import React, { useRef } from 'react';
import classes from './ObjectiveBow.module.css';

import bow from '../../assets/bow.png'
import { useIntersection } from 'react-use';
import gsap from 'gsap';


function ObjectiveBow() {

    const bowTextThreshold: number = 0.75;

    const sectionRefBowText = useRef(null);
    const intersectionBowText = useIntersection(sectionRefBowText, {
        root: null,
        rootMargin: '0px',
        threshold: bowTextThreshold
    });

    const fadeInBowText = (element: GSAPTweenTarget) => {
        gsap.to(element, {
            duration: 1.5,
            opacity: 1,
            x: 0,
            ease: 'power2.out',
            stagger: {
                amount: 0.7
            }
        });
    }

    const fadeOutBowText = (element: GSAPTweenTarget) => {
        gsap.to(element, {
            duration: 1.5,
            opacity: 0,
            x: -20,
            ease: 'power2.out'
        });
    }

    intersectionBowText && intersectionBowText.intersectionRatio < bowTextThreshold ? fadeOutBowText('.fadeInBowText') : fadeInBowText('.fadeInBowText');

    return (
        <div className={classes.container}>
            <div className={classes.background_text}>huntEr</div>
            <div className={classes.main}>
                <div className={classes.left}>
                    <div className={`${classes.bow_text} fadeInBowText`}>
                        &#47;&#47;&#47; You'll have your intel, I promise<span style={{ color: 'rgb(255, 70, 85)' }}> _</span>
                    </div>
                    <div className={classes.block} />
                    <img src={bow} alt="Sova's Bow" className={classes.bow} />
                </div>
                <div className={classes.right}>
                    <p ref={sectionRefBowText} className={classes.text}>
                        Sova's recon dart is your most important ability and should be used as often as possible. Therefore
                        lineups should be easily replicable. They should wedge you into a corner and align your crosshair or HUD
                        to execute quick, repeatable and reliable shots. Recon darts should scan as many potential hiding spots while
                        not exposing you to enemy fire as you shoot them.
                        <br /><br />
                        But scanning important angles isn't everything. What's the point of scanning an area where someone holding can
                        easily lose line of sight of your dart before it lands? Or worse, shoot the dart before it scans with little effort.
                        <br /><br />
                        The collection of darts you'll find here does its best to meet all these criteria. These darts are used by even the best Sova players
                        Select a map below and start learning how to use your recon dart to its fullest potential in matches.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ObjectiveBow;