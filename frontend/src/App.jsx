import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import SmartShopPage from "./pages/SmarShopPage";
import MainProvider from "./context/MainContext";
import DetailedSmartphone from "./pages/DetailedSmartphone";
import FavouritesPage from "./pages/FavouritesPage";
import ComparatorPage from "./pages/ComparatorPage";
import AddSmartphonePage from "./pages/AddSmartphonePage";
import CrudContext from "./context/CrudContext";
function App() {
  return (
    <MainProvider>
      <CrudContext>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route element={<HomePage />} path="/" />
              <Route element={<SmartShopPage />} path="/SmartShop" />
              <Route element={<DetailedSmartphone />} path="/Phone/:id" />
              <Route element={<FavouritesPage />} path="/favourites" />
              <Route element={<ComparatorPage />} path="/Comparator" />
              <Route element={<AddSmartphonePage />} path="/Smartphone/Add" />
            </Route>
          </Routes>
        </BrowserRouter>
      </CrudContext>
    </MainProvider>
  );
}

export default App;
