import React, { CSSProperties } from 'react';
import { centeredContent, fullScreen } from '../css';

export default function Monkey() {
    return (
        <div style={{ ...centeredContent, ...fullScreen}}>
            <p>😊😊</p> 
        </div>
    );
}

