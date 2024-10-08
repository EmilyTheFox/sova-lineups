import React from 'react';
import classes from './Faq.module.css';
import Nav from '../../components/Nav/Nav';
import FAQContainer from '../../components/FAQContainer/FAQContainer';
import Footer from '../../components/Footer/Footer';

function Faq() {
    return (
        <div className={classes.container}>
            <Nav />
            <FAQContainer />
            <Footer />
        </div>
    );
}

export default Faq;