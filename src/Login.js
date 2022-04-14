import React from 'react';
class Login extends React.Component
{
    state={
        user:{
            email:'',
            password:''
        }
    }

render(){
   return  <div className="col-md-4 m-3" >
        <h1>login</h1>
        <div className="mb-3">
    <label for="email" className="form-label">Email     </label>
    <input name="password" id ="email"   type="email" className="form-control" />
  </div>
  <div className="mb-3">
    <label for="pwd" className="form-label">password</label>
    <input name="password" id ="pwd"   type="password" className="form-control" />
 </div>
 <div className="mb-3">
    <button     className="btn btn-danger">login</button>
    </div>
 
 
  </div>
}
}
export default Login;