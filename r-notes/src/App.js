import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
function App() {
  return (
   <>
<Router>

<Navbar></Navbar>


    <Routes>
{/*           <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}></Route> 
 */}

 <Route exact path='/about' element={<About></About>} ></Route>
 <Route exact path='/home' element={<Home></Home>} ></Route>
  
   
    </Routes>

</Router>
    </>
  );
}

export default App;
