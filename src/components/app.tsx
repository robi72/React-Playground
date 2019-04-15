import React, { Suspense } from 'react';
import Layout from './layout';
import { BrowserRouter as Router } from 'react-router-dom';
import Spinner from './spinner';
import ErrorBoundary from './errorBoundary';
import Monkey from './monkey';

/**
 * Application top level component. This is a good place for future
 * top level components - ErrorBoundary, Provider & Suspense, etc.
 */
export default function App() {

    return (
        <Suspense fallback={<Spinner/>}>
            <Router>
                <ErrorBoundary>
                    <Suspense fallback = {<Monkey/>}>
                        <Layout/>
                    </Suspense>   
                </ErrorBoundary>
            </Router>
        </Suspense>
    );
}