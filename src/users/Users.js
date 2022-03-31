 const User=({user})=>{
return <>
<img style={{borderRadius:'100px'}}className="img img-thumbnail"
src={user.avatar_url}width="200"height="200"/>
 <h5>{user.login}</h5>
 <hr/>
 </> 


}
 export default User; 