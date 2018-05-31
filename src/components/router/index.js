import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CRM from '../../crm';
import Demos from '../../demos';
import Excellence from '../../excellence';
import Spades from '../../spades';

const Router = () => (
    <Switch>
        <Route exact path='/' component={Demos}/>
        <Route exact path='/crm' component={CRM}/>
        <Route exact path='/spades' component={Spades}/>
        <Route exact path='/performance' component={Excellence}/>
    </Switch>
);

export default Router;