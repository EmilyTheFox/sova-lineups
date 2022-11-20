import React from 'react';
import ReactPlayer from 'react-player';
import classes from './Intro.module.css';
import sova_character_image from '../../assets/sova_character_image.png';

function Home() {
    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <div className={classes.right_line} />
                <div className={classes.background_text}>vALORANT</div>
                <div className={classes.header}>
                    <h1 className={classes.title}>
                        <span>AGENT 03/20 &nbsp;&nbsp; //</span>
                        <span>INITIATOR</span>{' '}
                    </h1>
                </div>
                <div className={classes.main_wrapper}>
                    <div className={classes.left}>
                        <h1 className={classes.main_title}>
                            SOVA
                        </h1>
                        <div className={classes.info}>
                            <div className={classes.origin}> Origin: &nbsp; Russia</div>
                            <div className={classes.origin}> Codename: &nbsp; Hunter</div>
                            <p className={classes.info_text}>
                                Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.<br />
                                <br />
                                An archery expert, he can equip his bow with different bolts that reveal enemy
                                locations or shock nearby adversaries. He can also deploy a recon drone to survey
                                the battlefield, while his ultimate lets him fire three deadly arrow shots through
                                walls.
                            </p>
                            <div className={classes.video_player}>
                                <ReactPlayer
                                    width="300"
                                    className={classes.video}
                                    url={"https://i.imgur.com/Uqp8GCX.mp4"}
                                    muted={true}
                                    loop={true}
                                    playing={true}
                                    playsinline={true}
                                    controls={false}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={classes.right}>
                        <div className={classes.sova_image_container}>
                            <div className={classes.block} />
                            <div className={classes.block2} />
                            Yoo
                            <img className={classes.sova_image} alt={'sova'} src={sova_character_image} />
                        </div>
                        <div className={classes.sova_text}>SOVA</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;