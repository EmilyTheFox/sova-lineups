import React from 'react';
import classes from './Logs.module.css';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

function Logs() {
    return (
        <div className={classes.container}>
            <Nav />
            <Footer />
        </div>
    );
}

export default Logs;