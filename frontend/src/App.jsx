import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import SmartShopPage from "./pages/SmarShopPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route element={<HomePage />} path="/" />
          <Route element={<SmartShopPage />} path="/SmartShop" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
