import Image from "next/image";
import { ProductionCompany } from "@/types/movie";

const ProductionCompanyCard = (props: ProductionCompany) => {
  const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

  return (
    <div className="bg-gray-100 p-2.5 rounded-lg flex items-center space-x-3">
      <Image
        height={100}
        width={100}
        src={`${IMAGE_URL}${props.logo_path}`}
        alt={`${props.name} logo`}
        className="max-w-20 h-auto text-xs text-muted-foreground flex"
      />
      <p className="flex flex-col text-xs font-semibold">
        {props.name}
        <span className="text-muted-foreground text-xs font-normal">
          {props.origin_country}
        </span>
      </p>
    </div>
  );
};

export { ProductionCompanyCard };
