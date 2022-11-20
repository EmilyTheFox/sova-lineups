import React from 'react';
import classes from './Footer.module.css';

function Footer() {
    return (
        <div className={classes.container}>
            <h1 className={classes.line1}>Designed and developed by <a target="_blank" className={classes.line2} rel="noopener noreferrer" href="https://brandonjoe.com/">Brandon Joe</a> & <span className={classes.line2}>EmilyTheFox#3720</span></h1>
            <h2 className={classes.line2}>Inspiration was can be found at <a  target="_blank" className={classes.line2} rel="noopener noreferrer" href="https://playvalorant.com/en-us/">playValorant.com</a></h2>
        </div>
    );
}

export default Footer;