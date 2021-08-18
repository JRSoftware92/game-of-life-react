import React from 'react';
import './HomePage.css'

const HomePage = () => (
    <div id="home-content">
        <p>The <b><i><a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Game of Life</a></i></b>, also known simply as <b>Life</b>,
            is a cellular automaton devised by the British mathematician John Horton Conway in 1970. <i>[1]</i></p>

        <p>The game is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input.
            One interacts with the Game of Life by creating an initial configuration and observing how it evolves, or, for advanced players,
            by creating patterns with particular properties.</p>

        <div>
            <h3>References</h3>
            <ol id="references">
                <li>
                    <p><i>
                        Gardner, Martin (October 1970). "Mathematical Games – The fantastic combinations of John Conway's new solitaire game "life"". Scientific American.
                        223: 120–123. ISBN 0-89454-001-7. Archived from the original on 2009-06-03. Retrieved 2011-06-26.
                    </i></p>
                </li>
            </ol>
        </div>
    </div>
)

export default HomePage;
