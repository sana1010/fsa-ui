import React from 'react';
import axios from  'axios';
import User from './Users';
import ShouldRender from '../utils/ShouldRender';
import Loader from '../utils/Loader';
import Error  from '../utils/Error';

class UserList extends React.Component
{
    constructor(){
        super();

    this.state = {  users:[],loading:true,error:false};
   
    // this.setState({loading:true});
setTimeout(() => {
axios.get('https://api.github.com/users')
.then(res=>

    {
        const data=res.data;
        this.setState({users: data,loading:false,error:false});

    })
 .catch(err=>{
 this.setState({loading:false,error:true});
 console.log(err);
});
},1000);
    }

render(){
return <div>  
<h1>users</h1>
<ShouldRender cond={this.state.loading}>
<Loader/>
</ShouldRender>
<ShouldRender cond={this.state.error}>
    <Error/>
</ShouldRender>     

{this.state.users.map(user=> <User  key={user.login} user={user}/>) }
</div>

}

}
export default UserList ; 