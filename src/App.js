import Navbar from './coponents/navbar';
import Home from './coponents/home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Createuser from './coponents/create';
import Edit from './coponents/edit';
import Detail from './coponents/detail';

function App() {
  return(
    <>
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<Createuser/>}/>
      <Route path="/Edit" element={<Edit/>}/> 
      <Route path="/detail" element={<Detail/>}/> 
    </Routes>
    </BrowserRouter>

  
    </>
  )
}

export default App;
