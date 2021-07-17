import React from 'react';

export default Header = () => {
    return(
        <header class="header">
                <img src="img/logo.svg" alt="Logo Space X" class="logo" />
                <nav class="main-nav nav">
                    <ul class="list">
                        <li class="item">
                            <a href="#" class="item-link">
                                Falcon 1
                            </a>
                        </li>
                        <li class="item">
                            <a href="#" class="item-link">
                                Falcon 9
                            </a>
                        </li>
                        <li class="item">
                            <a href="#" class="item-link">
                                Falcon Heavy
                            </a>
                        </li>
                        <li class="item">
                            <a href="#" class="item-link">
                                Updates
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav class="secondary-nav">
                    <ul class="list">
                        <li class="item">
                            <a href="#" class="item-link">
                                Home
                            </a>
                        </li>
                        <li class="item">
                            <a href="calendar.html" class="item-link">
                                Calendar
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}