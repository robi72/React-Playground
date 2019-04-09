import React, { CSSProperties } from 'react';
import NavigationItem from './navigationItem';

interface Props {
    detailViews: string[]
}

/** React function component */
export default function MasterView(props: Props) {

    return (
        <div style={container}>
            {props.detailViews.map((view) =>
                <NavigationItem key={view} view={view} />)}
        </div>
    );
}

const container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '0.5em'
}