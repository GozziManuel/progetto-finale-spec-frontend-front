import { useMain } from "../context/MainContext";
import Smartphone from "../cards/Smartphone";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function SmartShopPage() {
  const { product } = useMain();
  //
  //
  // Debounce
  function debounce(callback, delay) {
    let timer;
    return (value) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback(value);
      }, delay);
    };
  }
  //
  //
  // States
  const [searchBar, setSearchBar] = useState("");
  const [searchBarDebounced, setSearchBarDebounced] = useState("");

  const [select, setSelect] = useState("");

  // states filtered
  const [FilteredProduct, setFilteredProduct] = useState([...product]);

  // Orders
  const [titleOrder, setTitleOrder] = useState(false);
  const [categoryOrder, setCategoryOrder] = useState(false);

  //
  // Making a copy product
  useEffect(() => {
    setFilteredProduct([...product]);
  }, [product]);

  //
  //
  // Debounced search
  const debouncedSetSearch = useCallback(
    debounce((value) => {
      setSearchBarDebounced(value);
    }, 500),
    [],
  );

  //
  //
  //HandleSearch
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchBar(value);
    debouncedSetSearch(value);
  };

  // Filtering
  const FilteredSearchProduct = useMemo(() => {
    return FilteredProduct.filter((el) => {
      const searchFilter = el.title
        .toLowerCase()
        .trim()
        .includes(searchBarDebounced.toLowerCase().trim());
      if (select === "") {
        return searchFilter;
      }

      const selectfilter = el.category.toLowerCase() === select.toLowerCase();

      return searchFilter && selectfilter;
    });
  }, [FilteredProduct, select, searchBarDebounced]);
  //

  // ORderTitle
  const orderTitleProduct = () => {
    if (titleOrder) {
      (FilteredSearchProduct.sort((a, b) =>
        a.title.localeCompare(b.title, "it"),
      ),
        setTitleOrder(false));
    } else {
      (FilteredSearchProduct.sort((a, b) =>
        b.title.localeCompare(a.title, "it"),
      ),
        setTitleOrder(true));
    }
  };

  //
  //
  // OrderCategory
  const orderCategoryProduct = () => {
    if (categoryOrder) {
      (FilteredSearchProduct.sort((a, b) =>
        a.category.localeCompare(b.category, "it"),
      ),
        setCategoryOrder(false));
    } else {
      (FilteredSearchProduct.sort((a, b) =>
        b.category.localeCompare(a.category, "it"),
      ),
        setCategoryOrder(true));
    }
  };

  //

  // Getting category
  const trueOptions = [];
  const gettingOptions = product.map((el) => {
    if (!trueOptions.includes(el.category)) {
      trueOptions.push(el.category);
    }
  });

  return (
    <section className="containerBase">
      <h1 className="orbitron ColorMain">SmartShop</h1>
      <h2 className="spaceGrotesk">Scegli il tuo telefono!</h2>
      <div className="d-flex spaceGrotesk justify-content-between  flex-wrap">
        <div className="d-flex flex-column">
          Cerca il tuo telefono!
          <input
            type="text"
            onChange={handleSearch}
            value={searchBar}
            className="me-5 searchbar mt-1"
            placeholder="..."
          />
          <div className=" mt-4">
            Cerca per categoria...
            <br />
            <select
              className=" p-1"
              onChange={(e) => setSelect(e.target.value)}
              value={select}
            >
              <option value="">Scegli una categoria!</option>
              {trueOptions.map((el, id) => {
                return (
                  <option value={el} key={id}>
                    {el}
                  </option>
                );
              })}
            </select>
          </div>
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
      <div className="row g-5 mt-0  ">
        {FilteredSearchProduct.length === 0 ? (
          <h3 className="spaceGrotesk ColorMain">
            Ancora non abbiamo quel modello magari lo aggiungeremo presto{" "}
            <i className="bi bi-emoji-laughing-fill"></i>
          </h3>
        ) : (
          FilteredSearchProduct.map((el) => {
            return (
              <div
                className="col-lg-4 col-12 col-xl-2 col-xxl-2 col-md-4 col-sm-6"
                key={el.id}
              >
                <Smartphone
                  category={el.category}
                  title={el.title}
                  id={el.id}
                />
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
