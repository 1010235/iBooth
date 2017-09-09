import React, { PureComponent } from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

class routes extends PureComponent{

    render(){
        return(
            <Router history={browserHistory}>
                <Route path='/'>
                    <IndexRoute component={} />
                    <Route path='list' component={} />
                </Route>
            </Router>
        );
    }
}

export default routes;
