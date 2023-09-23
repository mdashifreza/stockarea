import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from "./Components/Navbar";
import WarehouseList from "./Components/WarehouseList";
import EditWarehouse from "./Components/EditWarehouse";
import EditForm from './Components/EditForm';

function App() {
  const warehouseDetails = useSelector((state) => state.warehouse.warehouseDetails);
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={ <WarehouseList warehouseDetails = {warehouseDetails}/> } />
          <Route path="/warehouseEdit/:id" element={ <EditWarehouse warehouseDetails = {warehouseDetails} /> } />
          <Route path="/editform/:id" element={ <EditForm /> } />
      </Routes>
    </Router>
  );
}

export default App;
