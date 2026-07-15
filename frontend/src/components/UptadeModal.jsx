import { useRef, useState } from "react";
import { useEffect } from "react";
import { useCrud } from "../context/CrudContext";
import PhoneForm from "./PhoneForm";

export default function UptadeModal({ show, setShow, productDetailed }) {
  // Imports
  const { uptadePhone } = useCrud();
  // REFS
  const TitleRef = useRef();
  const CategoryRef = useRef();
  const SystemRef = useRef();
  const BrandRef = useRef();
  const ImgRef = useRef();
  const modalBodyRef = useRef(null);

  // Errors handler
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  //   State for form
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    brand: "",
    price: productDetailed?.price ?? 50,
    releaseYear: productDetailed?.releaseYear ?? 2000,
    system: "",
    screenSize: productDetailed?.screenSize ?? 5.41,
    ramGB: productDetailed?.ramGB ?? 4,
    phoneGB: productDetailed?.phoneGB ?? 64,
    phoneHz: productDetailed?.phoneHz ?? "",
    wattCharge: productDetailed?.wattCharge ?? 15,
    imageUrl: "",
  });

  //   Submit Form

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPhone = {
      ...formData,
      title: TitleRef.current.value,
      category: CategoryRef.current.value,
      brand: BrandRef.current.value,
      system: SystemRef.current.value,
      imageUrl: ImgRef.current.value,
      phoneHz: parseFloat(formData.phoneHz),
      price: parseFloat(formData.price),
      releaseYear: parseFloat(formData.releaseYear),
      screenSize: parseFloat(formData.screenSize),
      ramGB: parseFloat(formData.ramGB),
      phoneGB: parseFloat(formData.phoneGB),
      wattCharge: parseFloat(formData.wattCharge),
    };
    //
    // Validation single
    if (TitleRef.current.value.trim() === "") {
      console.error("vuoto");
      setError(true);
      setErrorText("Casella title vuota!");
      modalBodyRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    } else if (CategoryRef.current.value.trim() === "") {
      console.error("vuoto");
      setError(true);
      setErrorText("Casella Categoria vuota!");
      modalBodyRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    } else if (BrandRef.current.value.trim() === "") {
      console.error("vuoto");
      setError(true);
      setErrorText("Casella Brand vuota!");
      modalBodyRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    } else if (SystemRef.current.value.trim() === "") {
      console.error("vuoto");
      setError(true);
      setErrorText("Casella System vuota!");
      modalBodyRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    } else if (ImgRef.current.value.trim() === "") {
      console.error("vuoto");
      setError(true);
      setErrorText("Casella Image vuota!");
      modalBodyRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    } else if (formData.phoneHz === "") {
      console.error("vuoto");
      setError(true);
      setErrorText("Casella Hertz vuota!");
      modalBodyRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;

      // else Finish validation!
    } else {
      try {
        setShow(false);
        await uptadePhone(productDetailed.id, newPhone);
        setError(false);
        console.log("aggiunto");
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  return (
    <>
      {show && (
        <div className="updateModal">
          <div className="modalContent" ref={modalBodyRef}>
            <div className="">
              <div className="d-flex justify-content-between">
                <h1 className=" fs-5" id="exampleModalLabel">
                  Modifica il prodotto!
                </h1>
                <button className="btnDelete" onClick={setShow}>
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
              <div className="modal-body">
                <PhoneForm
                  formData={formData}
                  setFormData={setFormData}
                  error={error}
                  errorText={errorText}
                  handleSubmit={handleSubmit}
                  TitleRef={TitleRef}
                  CategoryRef={CategoryRef}
                  SystemRef={SystemRef}
                  BrandRef={BrandRef}
                  ImgRef={ImgRef}
                  productDetailed={productDetailed}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
