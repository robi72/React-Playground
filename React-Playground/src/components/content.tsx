import React, { CSSProperties } from 'react';
import SectionItem from './sectionItem';

/** React function component */
export default function Content() {

    const sectionIds = ['forest', 'sky', 'desert'];

    return (
        <div style={container}>
            {sectionIds.map((value) => <SectionItem id={value} />)}
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