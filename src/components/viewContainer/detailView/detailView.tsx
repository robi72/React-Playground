import React, { Component, CSSProperties } from 'react';
import { fullscreenAbsolute, fullScreen, centeredContent } from '../../../css';
import { RouteComponentProps } from 'react-router-dom';
import HeaderSection from './headerSection';
import TextSection from './textSection';
import { ImageSection } from './imageSection';

interface Props extends RouteComponentProps {
    id: string
}



export default class DetailView extends Component<Props> {

    

    private get view() {
        return this.props.match.url.substr(1);
    }

    private get imageSrc() {
        return `../assets/${this.view}.jpg`;
    }

    

    render() {
        return (
            <div style={container}>
                <img src={this.imageSrc} style={{ ...fullscreenAbsolute }}/>
                <div style={{ ...fullscreenAbsolute }}>
                    
                    <div style={content}>
                        <HeaderSection view={this.view}/>
                        <TextSection/>
                        <ImageSection/>
                    </div>

                </div>
                
            </div>
        );
    }
}



const content: CSSProperties = {
    margin: 10
}
    
const container: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%'
}