import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import UserList from "./users/UserList";
import NotFound from "./NotFound"
import Header from "./Header";
import Footer from "./Footer";
import Register from "./Register";
import Login from "./Login";

const AppRoutes=()=><BrowserRouter>
<Header/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Contact' element={<Contact/>}/>
<Route path='/users' element={<UserList/>}/>
{/* <Route path="*" element={<Home/>}/> */}
{/* <Route path="*" element={<Navigate to="/"/>}/> */}
<Route path="/register" element={<Register/>}/>
<Route path='/login' element ={<Login/>}/>
<Route path="*" element={<NotFound/>}/>

</Routes>
<Footer/>


</BrowserRouter>

export default AppRoutes;
