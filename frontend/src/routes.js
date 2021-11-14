import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Mapa from './pages/Mapa';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Mapa} />
            </Switch>
        </BrowserRouter>
    )
}