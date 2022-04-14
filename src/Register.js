import axios from "axios";
import  React from "react";
import ShouldRender from "./utils/ShouldRender";
import Error from "./utils/Error";

class Register extends React.Component{
  state={
    user: {

      firstName:'',
      lastName:'',
      email:'',
      password:'',
    },
      success:false,
     error:false,
     userExist:false

  };
  onRegister=()=>{
   // this.setState({lastName:evt.target.value});
    //console.log(evt.target)
axios.post('https://fsaapi.herokuapp.com/api/users/signup',this.state.user)
.then(res=>{
  this.setState({firstName:'',lastName:'',email:'',password:'',success:true,error:false,userExist:false})

})  
  .catch(err=>{
    if(err.message.indexOf('409')>-1)this.setState({userExist:true,sucess:false}); 
 else this.setState({error:true,sucess:false});
});
  }
  onTextChange=(evt)=>{
    console.log(evt.target) 
    const newUser={...this.state.user,[evt.target.name]:evt.target.value};
    this.setState({[evt.target.name]:evt.target.value})
    this.setState({user:newUser});
  }
//OnFirstNameChange=(evt)=>{
 // console.log(evt.target.value);
  //this.setState({
    
    //firstName:evt.target.value});
//}
//onLastNameChange=(evt)=>
//{
  
  //this.setState({lastName:evt.target.value});

//}
//onEmailChange=(evt)=>{
  //this.setState({email:evt.target.value});

//}
//onPasswordChange=(evt)=>{
  //this.setState({password:evt.target.value});

//}

isInvalid = ()=>{
return !this.state.user.firstName
||!this.state.user.lastName
||!this.state.user.email
||!this.state.user.password
}
render(){ 
  return <><div className="m-3 col-md-4">
  <ShouldRender cond={this.state.success}>
  <div class="mb-3 alert alert-success">
  Successfully Registered
  </div>
  </ShouldRender>
  <ShouldRender cond={this.state.userExist}>
  <div class="mb-3 alert alert-danger">
  user already exist!!</div>
  </ShouldRender>
  <ShouldRender cond={this.state.error}>
  <Error/>
  </ShouldRender>

  <div className="mb-3">
      <h3>Register</h3>
      <hr/>
    <label for="fname" class="form-label">FirstName </label>
    <input name="firstName" value={this.state.firstName}  onChange={this.onTextChange}  type="text"    className="form-control" />
    <ShouldRender cond={!this.state.user.firstName}>
    <span class= "text-danger">required  </span>
  </ShouldRender>
  <ShouldRender cond={this.state.user.firstName && this.state.user.firstName.length<3}>
    <span class= "text-danger">min 3 char  </span>
  </ShouldRender>
  </div>
  <div className="mb-3">
    <label for="Lname" class="form-label">LastName </label>
    <input name="lastName" value={this.state.lastName} onChange={this.onTextChange} id="Lname"   type="text" className="form-control" />
    <ShouldRender cond={!this.state.user.firstName}>
    <span class= "text-danger">required  </span>
  </ShouldRender>
  </div>
  <div className="mb-3">  
    <label for="email" class="form-label">Email </label>
    <input name="email"value={this.state.email} onChange={this.onTextChange} id="email" type="email" className="form-control" />
    <ShouldRender cond={!this.state.user.email}>
    <span class= "text-danger">required  </span>
  </ShouldRender>
  <ShouldRender cond={!this.state.user.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)}>
    <span class= "text-danger">Invalid  email</span>
  </ShouldRender> 

  </div>
  <div className="mb-3">
    <label for="pwd" className="form-label">password</label>
    <input name="password" value={this.state.password} onChange={this.onTextChange} id="pwd"  type="password" className="form-control" />
    <ShouldRender cond={!this.state.user.password}>
    <span class= "text-danger">required  </span>
  </ShouldRender>
  </div>
  <div className="mb-3">
  <button disabled={this.isInvalid()} onClick={this.onRegister} className="btn btn-danger">Register</button>
  </div>
  </div>
  </>
}
}

export default Register;