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
  </div>

  <div className="mb-3">
    <label for="Lname" class="form-label">LastName </label>
    <input name="lastName" value={this.state.lastName} onChange={this.onTextChange} id="Lname"   type="text" className="form-control" />
  </div>
  <div className="mb-3">  
    <label for="email" class="form-label">Email </label>
    <input name="email"value={this.state.email} onChange={this.onTextChange} id="email" type="email" className="form-control" />
  </div>
  <div className="mb-3">
    <label for="pwd" className="form-label">password</label>
    <input name="password" value={this.state.password} onChange={this.onTextChange} id="pwd"  type="password" className="form-control" />
  </div>
  <div className="mb-3">
  <button onClick={this.onRegister} className="btn btn-danger">Register</button>
  </div>
  </div>
  </>
}
}
export default Register;