import React, { PureComponent } from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import {BeeperContainer} from './containers';

class routes extends PureComponent{

    render(){
        return(
            <Router history={browserHistory}>
                <Route path='/'>
                    <IndexRoute component={BeeperContainer} />
                </Route>
            </Router>
        );
    }
}

export default routes;

/*

<Route path='list' component={} />
*/
