import { IoMdArrowRoundBack } from "react-icons/io";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BellDot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";

import ProductImage from "@/components/ProductImage";
import ProductPrice from "@/components/ProductPrice";
import { imageMap } from "@/lib/utils";
import { DialogDemo } from "@/components/Dialog";

import avatarPath from "@/public/images/avatar-svgrepo-com.svg";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// on genere le metadata pour des produits individuel
export const generateMetadata = async ({ params }: Props): Metadata => {
  const { id } = await params;
  const product = await fetch(
    `https://api.jsoning.com/mock/public/products/${id}`
  ).then((res) => res.json());

  const { name } = product;

  return {
    title: `${name}`,
  };
};

type Props = {
  params: {
    id: string;
  };
};

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) => {
  // on utilise la technique destruturing pour avoir le id
  const { id } = await params;

  // si le id est superieur a 5, on retourne le hook notFound
  // qui nous dirige vers la page not-found
  if (Number(id) > 7) {
    notFound();
  }

  // on fetch le produit en utilisant le id
  const product = await fetch(
    `https://api.jsoning.com/mock/public/products/${id}`
  );

  // si le produit n'existe pas, on retourne notFound
  if (!product) {
    notFound();
  }

  const productData = await product.json();

  return (
    <>
      <div className="ml-10 font-bold text-xl">
        <h1 className="text-lg font-bold">Produit {id}</h1>
      </div>
      <section className="p-6 bg-gray-50 min-h-screen mx-auto ml-10">
        <hr />

        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-2">
            <ProductImage image={imageMap[productData.name]} />
          </div>
          <div className="col-span-2 p-5">
            <Card className="shadow-lg border border-gray-200">
              <CardContent className="p-6">
                <h1 className="text-2xl font-bold text-gray-800">
                  {productData.name}
                </h1>
                <div className="mt-4 mb-6">
                  <p className="text-sm text-gray-600">
                    {productData.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-lg font-semibold text-yellow-300">
                    Prix:
                  </span>
                  <span className="text-xl font-bold text-black-600  px-3 py-1 rounded-lg">
                    ${productData.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between mb-4">
                <span className="text-lg">Prix:</span>
                <ProductPrice value={Number(productData.price)} />
              </div>

              <div>
                <DialogDemo action="Modifier" />
              </div>
              <Button className=" mt-6 bg-red-500 hover:bg-red-500 hover:bg-opacity-80">
                Supprimer
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="mt-20">
          <Button asChild>
            <Link href="/">
              <IoMdArrowRoundBack />
              Retour aux produits
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
