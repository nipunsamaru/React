import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  state={
    count:0
  }

  increase = () => [
    this.setState({count:this.state.count + 2})
  ]

  render(){
    return(
      <div>
        <h1>Click Time {this.state.count}</h1>
        <button onClick={this.increase} >Click Here</button>
      </div>
    )
  }
}


export default App;
