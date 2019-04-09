import React, { Fragment } from 'react';
import DetialView from './detailView';
import MasterView from './masterView';
import { Route } from 'react-router-dom';

/** React function component */
export default function ViewContainer() {

    const detailViews = ['forest', 'sky', 'desert'];

    return (
        <Fragment>
            <Route exact path="/" render={() => 
                <MasterView detailViews={detailViews}/>
            }/>
            <Route path="/forest" component={DetialView}/>
            <Route path="/sky" component={DetialView}/>
            <Route path="/desert" component={DetialView}/>
        </Fragment>
    );
}