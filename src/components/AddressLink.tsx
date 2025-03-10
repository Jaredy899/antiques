"use client";

import { openMaps } from "~/utils/mapUtils";

interface AddressLinkProps {
  address: string;
  children: React.ReactNode;
  className?: string;
}

const AddressLink: React.FC<AddressLinkProps> = ({ 
  address, 
  children,
  className = "hover:underline" 
}) => {
  const handleAddressClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openMaps(address);
  };

  return (
    <a 
      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
      onClick={handleAddressClick}
      className={className}
    >
      {children}
    </a>
  );
};

export default AddressLink; 