import React from 'react';
import classes from './Maps.module.css';
import Nav from '../../components/Nav/Nav';
import Maps from '../../components/Maps/Maps';
import Footer from '../../components/Footer/Footer';

function Faq() {
    return (
        <div className={classes.container}>
            <Nav />
            <Maps />
            <Footer />
        </div>
    );
}

export default Faq;