import React, { CSSProperties} from 'react';
import { PropagateLoader} from 'react-spinner';
import { centeredContent, fullscreen } from '../css';

export default function() {
    return (
        <div style={{ ...centeredContent, ...fullscreen}}>
            <PropagateLoader color="white" size={1.5} sizeUnit="em"/>
        </div>
    );
}

const apperance: CSSProperties = {
    color: 'white',
    fontSize: '1.5em'
}