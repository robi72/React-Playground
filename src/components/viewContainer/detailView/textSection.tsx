import React, { Component, CSSProperties } from "react";

export default function TextSection() {
    return (
        <div style={textSection}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus leo, bibendum et feugiat et, tincidunt quis mi. Phasellus dictum turpis quis fringilla elementum. Sed dolor neque, venenatis a magna quis, imperdiet gravida magna. Pellentesque facilisis nulla a metus pretium blandit. Fusce elementum sem et magna accumsan, vitae tincidunt eros lobortis. Ut et auctor ex. Etiam ut faucibus nisl.
        </div>
    )
}


const textSection: CSSProperties = {
    backgroundColor: 'white',
    margin: '1em 0em'
}