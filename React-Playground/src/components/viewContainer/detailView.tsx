import React, { CSSProperties } from 'react';
import { fullscreenAbsolute } from '../../css';

interface Props {
    id: string
}

export default function DetailView(props: Props) {
    
    const imageSrc = `../assets/${props.id}.jpg`;

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