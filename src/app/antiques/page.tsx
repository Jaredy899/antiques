export const metadata = {
  title: "Antiques Gallery | Abingdon Antiques",
  description: "Browse our collection of quality antiques and collectibles at Abingdon Antiques and More Vendor Mall.",
};

export default function AntiquesPage() {
  // Sample antique items (in a real app, this would come from a database or CMS)
  const antiqueItems = [
    {
      id: 1,
      title: "Victorian Mahogany Desk",
      category: "Furniture",
      price: "$895",
      description: "Beautifully carved Victorian era mahogany desk with original brass hardware.",
    },
    {
      id: 2,
      title: "Art Deco Lamp",
      category: "Home Decor",
      price: "$350",
      description: "1930s Art Deco table lamp with original slag glass shade.",
    },
    {
      id: 3,
      title: "Antique Silver Pocket Watch",
      category: "Jewelry",
      price: "$275",
      description: "Sterling silver pocket watch, circa 1910, in working condition.",
    },
    {
      id: 4,
      title: "Vintage Coca-Cola Sign",
      category: "Collectibles",
      price: "$195",
      description: "Original 1950s Coca-Cola metal advertising sign.",
    },
    {
      id: 5,
      title: "Depression Glass Set",
      category: "China & Glassware",
      price: "$165",
      description: "Complete set of pink depression glass, 24 pieces.",
    },
    {
      id: 6,
      title: "Oil Painting Landscape",
      category: "Art",
      price: "$425",
      description: "Original oil painting of mountain landscape, signed by the artist, circa 1940s.",
    },
    {
      id: 7,
      title: "Eastlake Dresser",
      category: "Furniture",
      price: "$650",
      description: "Eastlake style walnut dresser with marble top and original mirror.",
    },
    {
      id: 8,
      title: "Vintage Brooch Collection",
      category: "Jewelry",
      price: "$180",
      description: "Set of three vintage costume brooches from the 1960s.",
    },
  ];

  // Group items by category
  const categories = [...new Set(antiqueItems.map(item => item.category))];
  
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-sepia-900">Antiques Gallery</h1>
      
      <p className="mb-8 mx-auto max-w-3xl text-center text-lg text-sepia-800">
        Browse our collection of quality antiques and collectibles. Each item is unique and has been carefully 
        selected by our experienced vendors. Please note that our inventory changes frequently, so visit our 
        store to see our current selection.
      </p>
      
      {/* Category navigation */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <a 
              key={category} 
              href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="rounded-full bg-sepia-100 px-4 py-2 text-sepia-800 transition-all hover:bg-antique-dark hover:text-white"
            >
              {category}
            </a>
          ))}
        </div>
      </div>
      
      {/* Antiques by category */}
      {categories.map((category) => (
        <section key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="mb-16 scroll-mt-20">
          <h2 className="mb-6 border-b border-sepia-200 pb-2 text-2xl font-bold text-sepia-900">
            {category}
          </h2>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {antiqueItems
              .filter(item => item.category === category)
              .map(item => (
                <div key={item.id} className="rounded-lg bg-white p-5 shadow-md transition-all hover:shadow-lg">
                  <div className="mb-4 h-60 rounded bg-sepia-200 flex items-center justify-center">
                    <span className="text-sepia-500">Image of {item.title}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-sepia-900">{item.title}</h3>
                  <p className="mb-3 text-antique-dark font-medium">{item.price}</p>
                  <p className="text-sepia-700">{item.description}</p>
                </div>
              ))}
          </div>
        </section>
      ))}
      
      <div className="mt-16 rounded-lg bg-sepia-100 p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold text-sepia-900">Looking for Something Special?</h2>
        <p className="mb-5 text-sepia-800">
          Our inventory changes weekly. If you&apos;re looking for a specific item, please contact us or visit our store.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="/contact" 
            className="rounded-md bg-antique-dark px-5 py-2.5 text-white shadow-sm transition-all hover:bg-sepia-800"
          >
            Contact Us
          </a>
          <a 
            href="/hours-location" 
            className="rounded-md border border-antique-dark bg-transparent px-5 py-2.5 text-sepia-900 shadow-sm transition-all hover:bg-sepia-100"
          >
            Visit Our Store
          </a>
        </div>
      </div>
    </div>
  );
} 