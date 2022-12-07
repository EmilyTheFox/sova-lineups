import React from 'react';
import classes from './Nav.module.css';

import { Link } from 'react-router-dom';
import home_icon from '../../assets/Valorant_logo_white_v.png';

function Nav() {
    return (
        <div className={classes.container}>
            <ul className={classes.nav_buttons}>
                <li className={classes.home_btn}>
                    <Link to={'/'}>
                        <img src={home_icon} alt={'valorant logo'} />
                    </Link>
                </li>
                <li>
                    <div className={classes.dropdown}>
                        <button className={`${classes.dropbtn} ${window.location.pathname === '/maps' ? classes.navactive : ''}`}>
                            <p>Maps</p>
                        </button>
                        <div className={classes.dropdowncontent}>
                            <Link className={classes.link} to={'/ascent'}>
                                <h1>01 &nbsp;//&nbsp; Ascent</h1>
                            </Link>
                            <Link className={classes.link} to={'/bind'}>
                                <h1>02 &nbsp;//&nbsp; Bind</h1>
                            </Link>
                            <Link className={classes.link} to={'/breeze'}>
                                <h1>03 &nbsp;//&nbsp; Breeze</h1>
                            </Link>
                            <Link className={classes.link} to={'/fracture'}>
                                <h1>04 &nbsp;//&nbsp; Fracture</h1>
                            </Link>
                            <Link className={classes.link} to={'/haven'}>
                                <h1>05 &nbsp;//&nbsp; Haven</h1>
                            </Link>
                            <Link className={classes.link} to={'/icebox'}>
                                <h1>06 &nbsp;//&nbsp; Icebox</h1>
                            </Link>
                            <Link className={classes.link} to={'/pearl'}>
                                <h1>07 &nbsp;//&nbsp; Pearl</h1>
                            </Link>
                            <Link className={classes.link} to={'/split'}>
                                <h1>08 &nbsp;//&nbsp; Split</h1>
                            </Link>
                        </div>
                    </div>
                </li>
                <li>
                    <Link className={`${classes.links} ${window.location.pathname === '/logs' ? classes.navactive : ''}`} to={'/logs'}>
                        <div className={classes.links_text}><p>Logs</p></div>
                    </Link>
                </li>
                <li>
                    <Link className={`${classes.links} ${window.location.pathname === '/faq' ? classes.navactive : ''}`} to={'/faq'}>
                        <div className={classes.links_text}><p>Faq</p></div>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;