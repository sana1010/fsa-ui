import React from 'react';
import axios from  'axios';
import User from './Users';
import loaderImg from '../img/loaderImg.gif';

class UserList extends React.Component{
   
   state={users:[]};
    constructor(){

    super();

setTimeout(() => {
    

axios.get('https://api.github.com/users')
.then(res=>
    {
        const data=res.data;
        this.setState({users: data});
    })
 .catch(err=>console.log(err));
},2000);
    }

render(){
return  <div>  
<h1>users</h1>
<img src={loaderImg}/>
{this.state.users.map(user=> <User  key={user.login} user={user}/>
) }
</div>

}

} 
export default UserList ; 