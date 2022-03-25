import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import img from './img'
import 'bootstrap/dist/css/bootstrap.css';
import UserList from "./users/UserList"
//jsx-javaScript xml
function App(){
//const h1=  React.createElement('h1',{},['hello React']);
//const div=React.createElement('div',{},[h1,img]);
//return div;
//}
return <div>
    <Header/>
   <UserList/>
<Footer/>

</div>

}
export default App;


