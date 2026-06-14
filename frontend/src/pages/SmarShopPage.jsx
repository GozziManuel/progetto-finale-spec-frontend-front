import { useMain } from "../context/MainContext";
import Smartphone from "../cards/Smartphone";
import { useEffect, useState } from "react";

export default function SmartShopPage() {
  const { product } = useMain();
  const [searchBar, setSearchBar] = useState("");
  const [FilteredProduct, setFilteredProduct] = useState([...product]);

  const [titleOrder, setTitleOrder] = useState(false);
  const [categoryOrder, setCategoryOrder] = useState(false);

  useEffect(() => {
    setFilteredProduct([...product]);
  }, [product]);

  //
  // SearchBar
  const FilteredSearchProduct = FilteredProduct.filter((el) =>
    el.title.toLowerCase().trim().includes(searchBar.toLowerCase().trim()),
  );

  //
  //
  // ORderTitle
  const orderTitleProduct = () => {
    if (titleOrder) {
      FilteredProduct.sort((a, b) => a.title.localeCompare(b.title, "it"));
      setTitleOrder(false);
    } else {
      FilteredProduct.sort((a, b) => b.title.localeCompare(a.title, "it"));
      setTitleOrder(true);
    }
  };

  //
  //
  // OrderCategory
  const orderCategoryProduct = () => {
    if (categoryOrder) {
      FilteredProduct.sort((a, b) => a.title.localeCompare(b.category, "it"));
      setCategoryOrder(false);
    } else {
      FilteredProduct.sort((a, b) => b.title.localeCompare(a.category, "it"));
      setCategoryOrder(true);
    }
  };
  //
  //
  //
  return (
    <section className="containerBase">
      <h1 className="orbitron ColorMain">SmartShop</h1>
      <h2 className="spaceGrotesk">Scegli il tuo telefono!</h2>
      <div className="d-flex spaceGrotesk justify-content-between align-items-center flex-wrap">
        <div className="d-flex flex-column">
          Cerca il tuo telefono!
          <input
            type="text"
            onChange={(e) => setSearchBar(e.target.value)}
            value={searchBar}
            className="me-5 searchbar mt-1"
          />
        </div>
        <div className="d-flex flex-column  align-items-center flex-wrap ">
          Ordine Alfabatico
          <div className="d-flex justify-content-center align-items-center">
            <div
              className="me-3 OrderButton text-center"
              onClick={() => orderTitleProduct()}
            >
              Title
              {titleOrder ? (
                <i className="bi bi-arrow-up"></i>
              ) : (
                <i className="bi bi-arrow-down"></i>
              )}
            </div>
            <div className="OrderButton" onClick={() => orderCategoryProduct()}>
              Category
              {categoryOrder ? (
                <i className="bi bi-arrow-up"></i>
              ) : (
                <i className="bi bi-arrow-down"></i>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row g-5 mt-3">
        {FilteredSearchProduct.map((el) => {
          return (
            <div
              className="col-lg-4 col-12 col-xl-2 col-xxl-2 col-md-4 col-sm-6"
              key={el.id}
            >
              <Smartphone category={el.category} title={el.title} id={el.id} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
