import React, { Suspense } from 'react';
import Layout from './layout';
import { BrowserRouter as Router } from 'react-router-dom';
import Spinner from './spinner';
import ErrorBoundary from './errorBoundary';

/**
 * Application top level component. This is a good place for future
 * top level components - ErrorBoundary, Provider & Suspense, etc.
 */
export default function App() {

    return (
        <Suspense fallback={<Spinner/>}>
            <Router>
                <ErrorBoundary>
                    <Layout/>
                </ErrorBoundary>
            </Router>
        </Suspense>
    );
}