import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Features from './components/Features';
import Footer from './components/Footer';
import Calendar from './pages/Calendar';

import FetchData from './service/FetchData';

function App() {
    const fetchData = new FetchData();

    const [state, setState] = useState({
        rocket: 'Falcon 1',
        rocketFeatures: null,
        rockets: [],
        company: null,
    });

    const updateRocket = () => {
        fetchData
            .getRocket()
            .then((data) => {
                setState((prev) => ({
                    ...prev,
                    rockets: data.map((item) => item.name),
                }));
                return data;
            })
            .then((data) => data.find((item) => item.name === state.rocket))
            .then((rocketFeatures) => {
                setState((prev) => ({ ...prev, rocketFeatures }));
            });
    };

    const changeRocket = (rocket) => {
        setState((prev) => ({ ...prev, rocket }));
    };

    const updateCompany = () => {
        fetchData
            .getCompany()
            .then((company) => setState((prev) => ({ ...prev, company })));
    };

    useEffect(() => {
        updateRocket();
        updateCompany();
    }, []);

    useEffect(() => {
        updateRocket();
    }, [state.rocket]);

    return (
        <>
            <Header rockets={state.rockets} changeRocket={changeRocket} />

            <Switch>
                <Route path="/calendar">
                    <Main name={'Calendar SpaceX'} />
                    <Calendar />
                </Route>
                <Route path="/users"></Route>
                <Route path="/">
                    <Main name={state.rocket} isVideo />
                    {state.rocketFeatures && (
                        <Features {...state.rocketFeatures} />
                    )}
                </Route>
            </Switch>

            {state.company && <Footer {...state.company} />}
        </>
    );
}

export default App;
