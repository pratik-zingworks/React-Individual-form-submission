import { Routes, Route } from 'react-router';
import './App.css';
import Display from './pages/Display/Display.page';
import Home from './pages/Home/Home.page';
import ViewDetails from './pages/viewDetails/ViewDetails.page';



const App = () => {
  
  return ( 
    <div style = {{
      paddingBottom: "60px"
    }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Display" element={<Display />} />
        <Route path="/user/:id" element={<ViewDetails/>} />

      </Routes>
    </div>
   );
}
 
export default App;