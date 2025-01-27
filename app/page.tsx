import { DialogDemo } from "@/components/Dialog";
import MuiCard from "@/components/MuiCard";
import { Button } from "@/components/ui/button";
import { imageMap } from "@/lib/utils";
import { Plus } from "lucide-react";
import ImgMediaCard from "../components/MuiCard";

// Definir le type pour le produit
type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
};

const HomePage = async (): Promise<JSX.Element> => {
  // fetch des donnes des prouidts a partir d'un API
  const fetchData = await fetch("https://api.jsoning.com/mock/public/products");
  const data: Product[] = await fetchData.json();

  // On filtre les donnees pour enlever webcam
  const halfData = data
    // on limite les donnees pour inclure les 6 premiers articles
    .slice(0, 6)
    // on exclut webcam
    .filter((item) => item.name !== "1080p Webcam");
  console.log(halfData);

  return (
    <>
      <h1 className="text-xl font-bold ml-10 text-lg">Mes Produits</h1>
      <div className="p-6 bg-gray-50 min-h-screen mx-auto ml-10">
        {/* Header Section */}

        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-blue-800">
              Gestion des produits
            </h1>
            <p className="text-gray-600 text-sm">Liste de vos produits</p>
          </div>
          <DialogDemo action="Ajouter" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {halfData.map((item: Product, index: number) => {
            console.log(index);
            const { id, name, description, image, price } = item;

            return (
              <ImgMediaCard id={id} key={id} price={price} number={index} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
