import React, { CSSProperties } from 'react';
import { centeredContent } from '../css';

/** React function component */
export default function SectionItem(props: Props) {
    const imageSrc = `../assets/${props.id}.jpg`;

    return (
        <div style={{ ...gridItem, ...centeredContent }}>
            <img src={imageSrc} style={fullscreen} />
            <h1 style={{ ...centeredAbsolute, ...appearance}}>{props.id}</h1>
        </div>
    );
}

interface Props {
    id: string
}

const gridItem: CSSProperties = {
    position: 'relative',
    margin: '0.5em',
    background: '#808080',
    height: '100%'
}

const fullscreen: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
}

const centeredAbsolute: CSSProperties = {
    position: 'absolute',
    margin: 0,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
}

const appearance: CSSProperties = {
    color: '#1E1E1E',
    textShadow: '0 0 3px white'
}