import { useRef, useState } from "react";
import "../assets/css/addSmartphone.css";
import { useCrud } from "../context/CrudContext";
import { useNavigate } from "react-router-dom";
import PhoneForm from "../components/PhoneForm";

export default function AddSmartphonePage() {
  const { addPhone } = useCrud();
  const navigate = useNavigate();

  //   State for form
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    brand: "",
    price: 50,
    releaseYear: 2000,
    system: "",
    screenSize: 5.41,
    ramGB: 4,
    phoneGB: 64,
    phoneHz: "",
    wattCharge: 15,
    imageUrl: "",
  });
  // Errors handler

  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  // REFS
  const TitleRef = useRef();
  const CategoryRef = useRef();
  const SystemRef = useRef();
  const BrandRef = useRef();
  const ImgRef = useRef();

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
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    } else if (CategoryRef.current.value.trim() === "") {
      console.error("vuoto");
      setError(true);
      setErrorText("Casella Categoria vuota!");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    } else if (BrandRef.current.value.trim() === "") {
      console.error("vuoto");
      setError(true);
      setErrorText("Casella Brand vuota!");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    } else if (SystemRef.current.value.trim() === "") {
      console.error("vuoto");
      setError(true);
      setErrorText("Casella System vuota!");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    } else if (ImgRef.current.value.trim() === "") {
      console.error("vuoto");
      setError(true);
      setErrorText("Casella Image vuota!");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    } else if (formData.phoneHz === "") {
      console.error("vuoto");
      setError(true);
      setErrorText("Casella Hertz vuota!");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;

      // else Finish validation!
    } else {
      try {
        await addPhone(newPhone);
        console.log("aggiunto");
        setError(false);
        setFormData({
          title: (TitleRef.current.value = ""),
          category: (CategoryRef.current.value = ""),
          brand: (BrandRef.current.value = ""),
          system: (SystemRef.current.value = ""),
          imageUrl: (ImgRef.current.value = ""),
          price: 0,
          releaseYear: 2000,
          screenSize: 5.41,
          ramGB: 4,
          phoneGB: 64,
          phoneHz: "",
          wattCharge: 15,
        });
        navigate("/SmartList");
      } catch (error) {
        console.log(error.message);
      }
    }

    console.log(newPhone);
  };

  return (
    <section className="containerBase">
      <h2 className="mb-5 orbitron titleAdd">Aggiungi Nuovo Smartphone</h2>
      <div className="spaceGrotesk">
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
        />
      </div>
    </section>
  );
}
