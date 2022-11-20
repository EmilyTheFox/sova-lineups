import React from 'react';
import classes from './Home.module.css';
import Nav from '../../components/Nav/Nav';
import Intro from '../../components/Intro/Intro';
import ObjectiveRecon from '../../components/Objective/ObjectiveRecon';
import Maps from '../../components/Maps/Maps';
import Footer from '../../components/Footer/Footer';

function Home() {
    return (
        <div className={classes.container}>
            <Nav />
            <Intro />
            <ObjectiveRecon />
            <Maps withDescription={false} />
            <Footer />
        </div>
    );
}

export default Home;