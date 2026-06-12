import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/App.css";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route element={<HomePage />} path="/" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
