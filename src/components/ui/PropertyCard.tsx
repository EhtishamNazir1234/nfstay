import { MapPin, Star } from "lucide-react";
import Image from "next/image";

interface PropertyCardProps {
  image: string;
  type: string;
  location: string;
  rating: number;
  price: number;
}

export function PropertyCard({
  image,
  type,
  location,
  rating,
  price,
}: PropertyCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl rounded-t-xl border border-gray-100 bg-white shadow-sm ">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={type}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-5 pt-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{type}</h3>
          <div className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#9945FF] to-[#20E19F] px-2.5 py-1 text-xs font-bold text-white shadow-sm">
            <Star className="size-3 fill-current" />
            {rating.toFixed(1)}
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-gray-500 mb-6">
          <MapPin className="size-4" />
          <span className="text-sm font-medium">{location}</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-semibold text-gray-900">${price}</span>
          <span className="text-sm text-gray-400">Night</span>
        </div>
      </div>
    </div>
  );
}
