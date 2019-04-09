import React, { CSSProperties } from 'react';
import { centeredContent, fullscreenAbsolute } from '../../css';
import { Link } from 'react-router-dom';

interface Props {
    view: string
}

/** React function component */
export default function NavigationItem(props: Props) {
    
    const url = `${props.view}`;
    const imageSrc = `../assets/${props.view}.jpg`;

    return (
        <Link to={url} style={{ ...gridItem, ...centeredContent }}>
            <img src={imageSrc} style={fullscreenAbsolute} />
            <h1 style={{ ...centeredAbsolute, ...appearance}}>{props.view}</h1>
        </Link>
    );
}

const gridItem: CSSProperties = {
    position: 'relative',
    margin: '0.5em',
    background: '#808080',
    height: '100%',
    borderRadius: '10px',
    overflow: 'hidden',
    cursor: 'pointer'
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