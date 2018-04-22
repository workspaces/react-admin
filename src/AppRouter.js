import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './modules/home';
import MyTable from './modules/table';
import Show from './modules/button';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/show" component={Show} />
            <Route path="/table" component={MyTable} />
        </Switch>
    );
};

export default AppRouter();