import { cn } from "@/lib/utils";
import Image from "next/image";

const ProductImage = ({ image }: { image: string }) => {
  return (
    <div className="space-y-4">
      <Image
        src={image}
        width={1000}
        height={1000}
        alt="tech product"
        className="min-h-[300px] object-cover
        object-center"
      />
    </div>
  );
};

export default ProductImage;
