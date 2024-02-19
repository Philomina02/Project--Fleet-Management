import Topbar from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";

import Truck from "./scenes/truck";
import Train from "./scenes/train";
import Ship from "./scenes/ship";
import Flight from "./scenes/flight";
import GlobalMap from "./scenes/globalmap";
import Warehouse from "./scenes/warehouse";
import RailwayWarehouse from "./scenes/railwaywarehouse";
import Airport from "./scenes/airport";
import Port from "./scenes/port";
/*import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";*/

import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { getDatabase, ref, onValue } from "firebase/database";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/truck" element={<Truck />} />
              <Route path="/train" element={<Train />} />
              <Route path="/ship" element={<Ship />} />
              <Route path="/flight" element={<Flight />} />
              <Route path="/globalmap" element={<GlobalMap />} />
              <Route path="/warehouse" element={<Warehouse />} />
              <Route path="/railwaywarehouse" element={<RailwayWarehouse />} />
              <Route path="/airport" element={<Airport />} />
              <Route path="/port" element={<Port />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
