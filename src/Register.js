import axios from "axios";
import  React from "react";
import ShouldRender from "./utils/ShouldRender";
class Register extends React.Component{
  state={
    firstName:'',
     lastName:'',
     email:'',
     password:'',
     success:false 

  };
  onRegister=()=>{
axios.post('https://fsa-jobs-api.herokuapp.com/api/users/signup',this.state)
.then(res=>this.setState({firstName:'',lastName:'',email:'',password:'',success:true}))
.catch(err=>console.log(err)) 
   console.log(this.state);
}
OnFirstNameChange=(evt)=>{
 // console.log(evt.target.value);
  this.setState({firstName:evt.target.value});
}
onLastNameChange=(evt)=>
{
  this.setState({lastName:evt.target.value});

}
onEmailChange=(evt)=>{
  this.setState({email:evt.target.value});

}
onPasswordChange=(evt)=>{
  this.setState({password:evt.target.value});

}

render(){ 
return <div className="m-3  col-md-4">
<ShouldRender cond={this.state.success}>
<div class="mb-3 alert alert-success">
successfully registered
</div>
</ShouldRender>

<div className="mb-3 ">
    <h3>Register</h3>
    <hr/>
  <label for="fname" class="form-label">FirstName </label>
  <input value={this.state.firstName}  onChange={this.OnFirstNameChange}  type="text"    className="form-control" />
</div>

<div className="mb-3">
  <label for="Lname" class="form-label">LastName </label>
  <input value={this.state.lastName} onChange={this.onLastNameChange}id="Lname"   type="text" className="form-control" />
</div>
<div className="mb-3">  
  <label for="email" class="form-label">Email </label>
  <input value={this.state.email} onChange={this.onEmailChange}id="email" type="email" className="form-control" />
</div>
<div className="mb-3">
  <label for="pwd" className="form-label">password </label>
  <input value={this.state.password} onChange={this.onPasswordChange}id="pwd"  type="password" className="form-control" />
</div>
<div className="mb-3">
<button onClick={this.onRegister} className="btn btn-danger">Register</button>
</div>
</div>
}
}
export default Register;