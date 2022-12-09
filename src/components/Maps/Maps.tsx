import React from 'react';
import classes from './Maps.module.css';
import Map from '../Map/Map';
import { Link } from 'react-router-dom';

import map_ascent from '../../assets/map_icons/map_ascent.png';
import map_bind from '../../assets/map_icons/map_bind.png';
import map_breeze from '../../assets/map_icons/map_breeze.png';
import map_fracture from '../../assets/map_icons/map_fracture.png';
import map_haven from '../../assets/map_icons/map_haven.png';
import map_icebox from '../../assets/map_icons/map_icebox.png';
import map_pearl from '../../assets/map_icons/map_pearl.png';
import map_split from '../../assets/map_icons/map_split.png';

function Maps(props: { withDescription?: boolean }) {
    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <div className={classes.right} />

                <div className={classes.map_selection}>
                    <div className={classes.whiteline_left} />
                    <div className={classes.whiteline_right} />
                    <div className={classes.map_container}>
                        {
                            props.withDescription
                                ? <div className={classes.map_title} >
                                    <h1 className={`${classes.title_with_description} ${classes.title}`}>Maps</h1>
                                    <p className={classes.maps_description}>Select a map below to start learning any of it's dozens of lineups. Lineups are ordered from most essential to most specific so it's recommended learn them from top to bottom.</p>
                                </div>
                                : <div className={classes.map_title} >
                                    <h1 className={classes.title}>Maps</h1>
                                </div>
                        }
                        <div className={classes.map_wrapper}>
                            <Link className={classes.link} to={'/ascent'}>
                                <Map title={'Ascent'} location={'Venice, Italy'} map={map_ascent} />
                            </Link>
                            <Link className={classes.link} to={'/bind'}>
                                <Map title={'Bind'} location={'Rabat, Morocco'} map={map_bind} />
                            </Link>
                            <Link className={classes.link} to={'/breeze'}>
                                <Map title={'Breeze'} location={'Bermuda Triangle'} map={map_breeze} />
                            </Link>
                            <Link className={classes.link} to={'/fracture'}>
                                <Map title={'Fracture'} location={'Santa Fe, New Mexico'} map={map_fracture} />
                            </Link>
                            <Link className={classes.link} to={'/haven'}>
                                <Map title={'Haven'} location={'Thimphu, Bhutan'} map={map_haven} />
                            </Link>
                            <Link className={classes.link} to={'/icebox'}>
                                <Map title={'Icebox'} location={'Bennett Island, Russia'} map={map_icebox} />
                            </Link>
                            <Link className={classes.link} to={'/pearl'}>
                                <Map title={'Pearl'} location={'Lisbon, Portugal'} map={map_pearl} />
                            </Link>
                            <Link className={classes.link} to={'/split'}>
                                <Map title={'Split'} location={'Tokyo, Japan'} map={map_split} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={classes.right} />
            </div>
        </div>
    );
}

export default Maps;