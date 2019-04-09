import React, { CSSProperties } from 'react';
import Header from './header';
import Content from './content';
import { fullScreen } from '../css';

/** React function component */
export default function Layout() {

    return (
        <div style={{ ...columnFlex, ...fullScreen, ...background }}>
            <Header/>
            <Content/>
        </div>
    );
}

const columnFlex: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};

const background: CSSProperties = {
    background: '#1f1f1f'
}
