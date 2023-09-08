import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import UpdateUsers from './Pages/UpdateUsers';
import AddUsers from './Pages/AddUsers';
import ManagerUsers from './Pages/ManagerUsers';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update/:id" element={<UpdateUsers />} />
        <Route path="/addusers" element={<AddUsers />} />
        <Route path="/managerusers" element={<ManagerUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
