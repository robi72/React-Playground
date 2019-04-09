import React, { CSSProperties } from 'react';

interface Props {
    onViewSelected: (view: string) => void
}
/** React function component */
export default function Navbar(props: Props) {

    const onClickHeader = () => {
        props.onViewSelected('');
    }

    return (
        <div style={navbar}>
            <h1 onClick={onClickHeader} style={navbarItem}>React Playground</h1>
        </div>
    );
}

const navbar: CSSProperties = {
    height: '4em',
    background: 'black',
    color: '#E1E1E1',
    display: 'flex',
    alignItems: 'stretch',
    padding: '0 1em'
};

const navbarItem: CSSProperties = {
    fontSize: '1.7em',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
};