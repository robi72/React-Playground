import React, { CSSProperties, Component } from 'react';
import ViewSection from './viewSection';
import ImageLink from './imageLink';
import SearchField from './searchField'
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps{} 

interface Props {
    detailViews: string[]
}
interface State {
    searchItem: string
}
/** React function component */
export default class MasterView extends Component<Props,State> {
    constructor(props: Props)  {
        super(props);
        this.state = {searchItem: ''};
  
  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
     }
     
   handleChange(event:React.ChangeEvent<HTMLInputElement>)  {
     
    this.setState({searchItem: event.target.value});

  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>)  {
   event.preventDefault()

    let searchPath = this.state.searchItem
    let searchTermWritten = this.props.history.push(searchPath)
    return searchTermWritten
  }

    render ()   {
        return(
       <SearchField  handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        )
    };
}

/* 
<div style={container}>
            {props.detailViews.map((view) => (
                <ViewSection key={view}>
                    <ImageLink view={view}/>
                </ViewSection>
            ))}
        </div>
*/


const container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '1em'
}