import React, { useContext } from 'react';
import classes from './ReconLineupDetails.module.css';
import { MapContext } from '../../MapContext';
import { Lineup, LineupImage, LineupUsecase } from '../../interfaces/Lineup';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import TextScramble from '@skits/react-text-scramble';
import LineupImageContainer from '../LineupImageContainer/LineupImageContainer'
import Difficulty from '../LineupBadges/Difficulty/Difficulty';
import Usecase from '../LineupBadges/Usecase/Usecase';
import Side from '../LineupBadges/Side/Side';

function ReconLineupDetails(props: { lineup: Lineup }) {

    const mapContext = useContext(MapContext);

    let lineup = props.lineup;

    return (
        <div className={classes.main}>
            <div className={classes.background_text}>{mapContext.mapState.map}</div>
            <div className={classes.main_left}>
                <div className={classes.info}>
                    <div className={classes.block} />
                    <div className={classes.textbox}>
                        <h1 className={classes.title}>
                            <TextScramble text={lineup.title} autostart revealSpeed={20} revealDelay={1} revealText revealMode={'typewriter'} characters={"!@#$%^&*zxcvbnmasdfghjklqwertyuiop,./;'<>?:"} />
                        </h1>
                        <div className={classes.filter_and_details}>
                            <div className={classes.filterbox}>

                                <Difficulty difficulty={lineup.difficulty} />
                                {
                                    lineup.usecase.essential ? <Usecase usecase={LineupUsecase.Essential} /> : undefined
                                }
                                {
                                    lineup.usecase.faking ? <Usecase usecase={LineupUsecase.Faking} /> : undefined
                                }
                                {
                                    lineup.usecase.retake ? <Usecase usecase={LineupUsecase.Retake} /> : undefined
                                }
                                <Side side={lineup.side} />
                            </div>
                            <div className={classes.bounces}>
                                <h3 className={classes.bounces_title}>Bounces</h3>
                                <div className={classes.bounce_container}>
                                    {
                                        [...Array(2)].map((value, i) => (
                                            <div className={`${i < lineup!.bounces ? classes.bounce : classes.bounce_empty}`} />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={classes.charges}>
                                <h3 className={classes.charges_title}>Charges</h3>
                                <div className={classes.charge_container}>
                                    {
                                        [...Array(3)].map((value, i) => (
                                            <div className={`${i < lineup!.charges ? classes.charge : classes.charge_empty}`} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={classes.info_text_container}>
                            <p className={classes.info_text}>{lineup.info}</p>
                        </div>
                    </div>
                    <div className={classes.images}>
                        <h1 className={classes.guide_title}>Result</h1>
                        <LineupImageContainer link={lineup.result} info={''}></LineupImageContainer>
                        <h1 className={classes.guide_title}>How To</h1>
                        {
                            lineup.images.map((lineupImage: LineupImage, i) => (
                                <LineupImageContainer link={lineupImage.link} info={lineupImage.info || ''} key={i}></LineupImageContainer>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={classes.main_right}>
                <div className={classes.videoWrapper}>
                    <VideoPlayer
                        className={classes.vimeo}
                        url={lineup.video}
                        loop={true}
                        playing={false}
                        playsInline={true}
                        controls={true}
                    />
                </div>
                <div className={classes.map_container}>
                    <div className={classes.map_wrapper}>
                        <div className={classes.map_block} />
                        <div className={classes.map_line} />
                        <img src={lineup.map} alt="coverage map" className={classes.map} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReconLineupDetails;