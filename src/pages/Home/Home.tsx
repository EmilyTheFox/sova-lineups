import React from 'react';
import classes from './Home.module.css';
import Nav from '../../components/Nav/Nav';
import Intro from '../../components/Intro/Intro';
import Footer from '../../components/Footer/Footer';
import ObjectiveRecon from '../../components/Objective/ObjectiveRecon';

function Home() {
    return (
        <div className={classes.container}>
            <Nav />
            <Intro />
            <ObjectiveRecon />
            <Footer />
        </div>
    );
}

export default Home;