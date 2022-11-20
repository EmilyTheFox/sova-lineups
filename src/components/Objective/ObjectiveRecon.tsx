import React, { useRef } from 'react';
import classes from './ObjectiveRecon.module.css';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

import ObjectiveBow from './ObjectiveBow';

import reconIcon from '../../assets/reconIcon.png';
import { useIntersection } from 'react-use';
import gsap from 'gsap';


function ObjectiveRecon() {

    const primaryReconHeaderThreshold: number = 0.75;
    const secondaryReconHeaderThreshold: number = 0.75;

    const sectionRefReconPrimaryHeader = useRef(null);
    const intersectionReconPrimaryHeader = useIntersection(sectionRefReconPrimaryHeader, {
        root: null,
        rootMargin: '0px',
        threshold: primaryReconHeaderThreshold
    });

    const fadeInPrimaryHeader = (element: GSAPTweenTarget) => {
        gsap.to(element, {
            duration: 1.5,
            opacity: 1,
            ease: 'power2.out'
        });
    }

    const fadeOutPrimaryHeader = (element: GSAPTweenTarget) => {
        gsap.to(element, {
            duration: 1.5,
            opacity: 0,
            ease: 'power2.out'
        });
    }

    intersectionReconPrimaryHeader && intersectionReconPrimaryHeader.intersectionRatio < primaryReconHeaderThreshold ? fadeOutPrimaryHeader('.fadeInPrimaryHeader') : fadeInPrimaryHeader('.fadeInPrimaryHeader');

    const sectionRefReconSecondaryHeader = useRef(null);
    const intersectionReconSecondaryHeader = useIntersection(sectionRefReconSecondaryHeader, {
        root: null,
        rootMargin: '0px',
        threshold: secondaryReconHeaderThreshold
    });

    const fadeInSecondaryHeader = (element: GSAPTweenTarget) => {
        gsap.to(element, {
            duration: 1.5,
            opacity: 1,
            ease: 'power2.out'
        });
    }

    const fadeOutSecondaryHeader = (element: GSAPTweenTarget) => {
        gsap.to(element, {
            duration: 1.5,
            opacity: 0,
            ease: 'power2.out'
        });
    }

    intersectionReconSecondaryHeader && intersectionReconSecondaryHeader.intersectionRatio < secondaryReconHeaderThreshold ? fadeOutSecondaryHeader('.fadeInSecondaryHeader') : fadeInSecondaryHeader('.fadeInSecondaryHeader');


    return (
        <div className={classes.container}>
            <div className={classes.background_text}>охотник</div>
            <div className={classes.block}>
                <div className={classes.block_text}>&#47;&#47; DEFY THE LIMITS</div>
            </div>
            <div className={classes.main}>
                <div className={classes.header}>
                    <div className={classes.logo_block}>
                        <img src={reconIcon} alt="recon ability icon" className={classes.dart} />
                    </div>
                </div>
                <div className={classes.main_wrapper}>
                    <div className={classes.whiteline_left} />
                    <div className={classes.whiteline_right} />
                    <div className={classes.title}>
                        <div ref={sectionRefReconPrimaryHeader} className={`${classes.title_text_1} fadeInPrimaryHeader`}>Wherever they run...</div>
                        <div ref={sectionRefReconSecondaryHeader} className={`${classes.title_text_2} fadeInSecondaryHeader`}>
                            I will find them
                        </div>
                    </div>
                    <div className={classes.first_section}>
                        <div className={classes.first_section_left}>
                            <div className={classes.first_text}>
                                Ever since release Sova has been the best agent for gathering information for his team. In a coordinated push, a well placed recon dart will tip the scales in your team's favor; it'll either disclose multiple enemy locations, or show you exactly where they can't be and limit the angles you'll need to check. A poorly placed dart however will not only reveal little area, but also potentially bait your team into thinking an area is clear. The purpose of this site is to teach you all the quality darts you'll need to help your team to victory.
                            </div>
                        </div>
                        <div className={classes.first_section_right}>
                            <div className={classes.first_section_image}>
                                <div className={classes.first_section_redbox} />
                            </div>
                        </div>
                    </div>
                    <div className={classes.second_section}>
                        <div className={classes.video_player}>
                            <div className={classes.video_block} />
                            <Link
                                style={{ textDecoration: 'none' }}
                                className={classes.video_textblock}
                                to={'/haven'}
                            >
                                <div className={classes.video_text}>Learn this lineup... </div>
                                <div className={classes.arrow} />
                            </Link>
                            <ReactPlayer
                                className={classes.video}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    top: '1px'
                                }}
                                url="https://i.imgur.com/LyUfcpQ.mp4"
                                muted={true}
                                loop={true}
                                playing={true}
                                volume={0}
                                controls={false}
                                playsinline={true}
                            />
                        </div>
                    </div>
                    <ObjectiveBow />
                </div>
                <div className={classes.right} />
            </div>
        </div>
    );
}

export default ObjectiveRecon;