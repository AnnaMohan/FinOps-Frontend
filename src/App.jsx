import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import CostOptimization from "./pages/CostOptimization";
import { PoliciesProvider } from "./context/PoliciesContext";
import Security from "./pages/Security";
import Reliability from "./pages/Reliability";
import PerformanceEfficiency from "./pages/PerformanceEfficiency";
import OperationalEfficiency from "./pages/OperationalEfficiency";





const App = () => {
  return (
    <PoliciesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="cost-optimization" element={<CostOptimization />} />
          {/* below is added recently */}
          { <Route path="security" element={<Security />} /> }
          { <Route path="reliability" element={<Reliability />} /> }
          { <Route path="performance-efficiency" element={<PerformanceEfficiency />} /> }
          { <Route path="operational-efficiency" element={<OperationalEfficiency />} /> }

        </Routes>
      </BrowserRouter>
    </PoliciesProvider>
  );
};

export default App;
