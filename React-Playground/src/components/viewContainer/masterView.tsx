import React, { CSSProperties } from 'react';
import NavigationItem from './navigationItem';

interface Props {
    detailViews: string[]
    onDetaltViewSelected: (view: string) => void;
}

/** React function component */
export default function MasterView(props: Props) {

    return (
        <div style={container}>
            {props.detailViews.map((value) => <NavigationItem id={value} onClick={props.onDetaltViewSelected} />)}
        </div>
    );
}

const container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '0.5em',
    justifyItems: 'stretch',
    alignItems: 'stretch',
    gridTemplateColumns: '50% 50%',
}