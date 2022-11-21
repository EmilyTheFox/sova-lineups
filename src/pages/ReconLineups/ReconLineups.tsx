import React from 'react';
import classes from './ReconLineups.module.css';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import { ValorantMap } from '../../interfaces/ValorantMap';
import ReconLineupsContainer from '../../components/ReconLineupsContainer/ReconLineupsContainer';

function ReconLineups(props: { map: ValorantMap }) {
    return (
        <div className={classes.container}>
            <Nav />
            <ReconLineupsContainer map={props.map} />
            <Footer />
        </div>
    );
}

export default ReconLineups;