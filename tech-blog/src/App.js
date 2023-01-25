import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router} from 'react-router-dom';
import Create from './Create';
import { Routes, Route } from 'react-router-config';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
   </Routes>
  );
}

export default App;
