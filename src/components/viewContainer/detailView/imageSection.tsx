import React, { Component, CSSProperties } from "react";

export class ImageSection extends Component {


    render()    {
        return(  
        
            <div style = {container}>
                <div style={imageContainer}></div>
                <div style={imageContainer}></div>
                <div style={imageContainer}></div>
                <div style={imageContainer}></div>
                <div style={imageContainer}></div>
                <div style={imageContainer}></div>
                <div style={imageContainer}></div>
                <div style={imageContainer}></div>
                <div style={imageContainer}></div>
                <div style={imageContainer}></div>
                <div style={imageContainer}></div>
                <div style={imageContainer}></div>
                <div style={imageContainer}></div>
                <div style={imageContainer}></div>
                
            </div>
        
        
        )
      
    }
}

const container: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0em -1em',
    justifyContent:'space-between'
}
const imageContainer: CSSProperties = {
    width: '10em',
    height: '12em',
    backgroundColor: 'blue',
    margin: '1em'    

}