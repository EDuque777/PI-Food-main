import './App.css';
import Cards from './components/Cards/Cards';
import Deatil from './components/Deatil/Deatil';
import Nav from './components/Nav/Nav';
import { Routes, Route, useLocation} from 'react-router-dom';

function App() {

  const location = useLocation();


  return (
    <div className="App">
    {
      location.pathname !== "/" && <Nav />
    }
      <Routes>
        <Route path='/home' element={<Cards/>}/>
        <Route path='/home/search' element={""}/>
        <Route path='/home/filter' element={""}/>
        <Route path='/home/order' element={""}/>
        <Route path='/deatil/:id' element={<Deatil/>}/>
      </Routes>
    </div>
  );
  
}

export default App;
