import React,{ Component } from 'react';
import axios from 'axios';

export default class profile extends Component {
     state={
          title:'',
          body:''
     }
     formSubmit = (e)=> {
          e.preventDefault();
          axios.post('/user', { // Where this url will be redirect
               title:this.state.title,  // All that value which its will take 
               body:this.state.body
             })
             .then(function (response) { // use for success
               console.log(response);
             })
             .catch(function (error) {  // use for error
               console.log(error);
             });
     }

     render() {
          return (
               <center>
     <div>
          <div class="jumbotron col-lg-4">

      <form onSubmit={this.formSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Title   </label>
    <input type="text" class="form-control" id="title" name="titel" required 
     onChange={event => {this.setState({title:event.target.value})}} />
     
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Details  </label>
   <textarea class="form-control" name="body" onChange={event => {this.setState({body:event.target.value})}}> Write Here</textarea>
  </div>
  
  <button type="submit" class="btn btn-primary">Publish</button>
</form>  

               
          </div>

     </div>
     </center>
          );
     }
}