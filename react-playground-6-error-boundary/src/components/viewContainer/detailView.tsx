import React, { CSSProperties } from 'react';
import { fullscreenAbsolute } from '../../css';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
    id: string
}

export default function DetailView(props: Props) {
    const view = props.match.url.substr(1);
    const imageSrc = `../assets/${view}.jpg`;

    return (
        <div style={container}>
             <img src={imageSrc} style={fullscreenAbsolute}/>
        </div>
    );
}

    
const container: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%'
}