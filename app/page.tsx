import { DialogDemo } from "@/components/Dialog";
import MuiCard from "@/components/MuiCard";
import { Button } from "@/components/ui/button";
import { imageMap } from "@/lib/utils";
import { Plus } from "lucide-react";

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

  return (
    <>
      <div className="flex flex-end">
        <h1 className="text-lg font-bold">Mes Produits</h1>
        <DialogDemo action="Ajouter" />
      </div>
      <hr />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {halfData.map((item: Product) => {
          // utilise la technique destructuring pour avoir les props necessaires de l'item
          const { id, name, description, image, price } = item;

          // On retourne la carte MuiCard pour chacun des articles
          return (
            <MuiCard
              key={id}
              name={name}
              description={description}
              price={price}
              id={id}
              image={imageMap[item.name]}
            />
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
