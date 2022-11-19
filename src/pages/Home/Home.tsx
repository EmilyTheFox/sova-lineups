import React from 'react';
import classes from './Home.module.css';
import Intro from '../../components/Intro/Intro';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <div className={classes.container}>
      <Intro />
      <Footer />
    </div>
  );
}

export default Home;