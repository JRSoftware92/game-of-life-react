import React from 'react';

import { Container } from '@material-ui/core';

import GridContainer from '../../containers/GridContainer/GridContainer'
import ControlSection from "../ControlSection/ControlSection";

import './GamePage.css';

const GamePage = () => (
    <div className="game-content">
        <Container className="grid-section">
            <GridContainer/>
        </Container>
        <ControlSection/>
    </div>
);

export default GamePage;