import React, { Component, CSSProperties } from 'react';
import Navbar from './navbar';
import ViewContainer from './viewContainer/viewContainer';
import { fullScreen } from '../css';

interface Props {}
interface State {
    currentView: string
}

/** React class component */
export default class Layout extends Component<Props, State> {

    state = {
        currentView: ''
    };

    setView = (view: string) => {
        this.setState({ currentView: view });
    }

    render() {
        return (
            <div style={{ ...columnFlex, ...fullScreen, ...background }}>
                <Navbar onViewSelected={this.setView}/>
                <ViewContainer currentView={this.state.currentView} onViewSelected={this.setView}/>
            </div>
        );
    }
}

const columnFlex: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};

const background: CSSProperties = {
    background: '#1f1f1f'
}
