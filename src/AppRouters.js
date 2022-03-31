import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import UserList from "./users/UserList";
import NotFound from "./NotFound";
const AppRoutes=()=><BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Contact' element={<Contact/>}/>
<Route path='/users' element={<UserList/>}/>
{/* <Route path="*" element={<Home/>}/> */}
{/* <Route path="*" element={<Navigate to="/"/>}/> */}
<Route path="*" element={<NotFound/>}/>
</Routes>

</BrowserRouter>

export default AppRoutes;
