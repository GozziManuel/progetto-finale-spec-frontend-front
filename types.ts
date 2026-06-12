export type Product = {
  title: string; // Nome  cell
  category: string; // Smartphone
  price: number; // Prezzo
  brand: string; // Marca telefono
  releaseYear: number; // Anno di uscita

  system: "iOS" | "Android"; // Sistema operativo
  screenSize: number; // grandezza schermo
  ramGB: number; // Gb della Ram
  phoneGB: number; // Memoria interna telefono
  phoneHz: number; // 60, 90, 120
  wattCharge: number; // Watt di ricarica

  imageUrl?: string; // immagine
};
