import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CRM from '../../crm';
import Demos from '../../demos';
import Excellence from '../../excellence';
import Poker from '../../poker';

const Router = () => (
    <Switch>
        <Route exact path='/' component={Demos}/>
        <Route exact path='/crm' component={CRM}/>
        <Route exact path='/poker' component={Poker}/>
        <Route exact path='/performance' component={Excellence}/>
    </Switch>
);

export default Router;