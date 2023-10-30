import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import EmployeesTable from "./components/EmployeesTable";
import Tribes from "./components/Tribes"

function App() {
  return (  
      <BrowserRouter>
        <Navigation/>

        <Routes>
          <Route path="/" element={<div>test</div>}
          />
          <Route path="/employees" element={<EmployeesTable></EmployeesTable>}
          />
          <Route path="/tribes" element={<Tribes></Tribes>}
          />
        </Routes>
        
      </BrowserRouter>     
  );
}


export default App;
