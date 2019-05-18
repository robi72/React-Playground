import React, {CSSProperties, Component} from 'react';
import { ThemedCSSProperties, ThemeContext } from '../../contexts/themeContext';


interface Props {
  handleChange:(event:React.ChangeEvent<HTMLInputElement>)=> void
  handleSubmit:(event: React.FormEvent<HTMLFormElement>)=> void
}

interface State {
     
}

export default class SearchField extends Component<Props, State>  {
  constructor(props: Props)  {
      super(props);
    }  

 


   render() {
     return (
      <ThemeContext.Consumer>
        {({ theme }) => (
        <div style = {container}>
          <form onSubmit={this.props.handleSubmit}>
          <div>
              <label>
                <input 
                    type="text"
                
                    onChange = {this.props.handleChange}
                />
              </label>
              <input type="submit" value="submit"/>
              {/* <button onClick={this.handleSubmit}>Sök</button> */}
              </div>
          </form>
        </div>
      )}
     </ThemeContext.Consumer>
     )
   }
}


  const container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    padding: '1em',
    margin: 'auto'
  }

  const content: ThemedCSSProperties = (theme) => ({
    zIndex: 10,
    background: `${theme.background.primary}B3`,
    overflowY: 'auto'
})