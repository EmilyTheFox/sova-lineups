import React from 'react';
import classes from './Faq.module.css';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

function Faq() {
    return (
        <div className={classes.container}>
            <Nav />
            <Footer />
        </div>
    );
}

export default Faq;