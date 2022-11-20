import React from 'react';
import classes from './Home.module.css';
import Nav from '../../components/Nav/Nav';
import Intro from '../../components/Intro/Intro';
import Footer from '../../components/Footer/Footer';

function Home() {
    return (
        <div className={classes.container}>
            <Nav />
            <Intro />
            <Footer />
        </div>
    );
}

export default Home;