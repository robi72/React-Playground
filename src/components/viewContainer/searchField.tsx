import React, {CSSProperties, Component} from 'react';


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
     )
   }
  }


  const container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    padding: '1em',
    margin: 'auto'
  }