import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import SmartShopPage from "./pages/SmarShopPage";
import MainProvider from "./context/MainContext";
import DetailedSmartphone from "./pages/DetailedSmartphone";

function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route element={<HomePage />} path="/" />
            <Route element={<SmartShopPage />} path="/SmartShop" />
            <Route element={<DetailedSmartphone />} path="/Phone/:id" />
          </Route>
        </Routes>
      </BrowserRouter>
    </MainProvider>
  );
}

export default App;
