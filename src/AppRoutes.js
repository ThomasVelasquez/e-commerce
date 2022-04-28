import React, {Suspense, Fragment} from 'react';
import { Spinner } from 'react-bootstrap';
import { HashRouter, Switch, Route } from "react-router-dom"
import routes from './routes';
import Store from './Screens/Store';

const AppRoutes = () => {
    return(
           <HashRouter>
                <Suspense fallback={<Spinner animation='border' />} >
                    <Switch>
                        {routes.map((route, idx) => {
                            return(
                                <Route key={idx} path={route.path} exact={route.exact} name={route.name}
                                render={props => (
                                    <route.component {...props} />
                                )}/>
                            );                    
                        })}

                        <Route path="/" name="home" component={Store} />
                    </Switch>
                </Suspense>
            </HashRouter> 
    );
}

export default AppRoutes;