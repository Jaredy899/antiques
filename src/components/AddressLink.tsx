"use client";

interface AddressLinkProps {
  className?: string;
  children: React.ReactNode;
}

const AddressLink: React.FC<AddressLinkProps> = ({ 
  children,
  className = "" 
}) => {
  const address = "227 W Main St, Abingdon, VA 24210";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(mapsUrl, '_blank');
  };

  return (
    <a 
      href={mapsUrl}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
};

export default AddressLink; 