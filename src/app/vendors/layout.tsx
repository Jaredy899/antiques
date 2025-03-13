import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Vendors | Abingdon Antiques",
  description: "Meet the vendors at Abingdon Antiques and More Vendor Mall. Learn about vendor opportunities.",
};

export default function VendorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
} 