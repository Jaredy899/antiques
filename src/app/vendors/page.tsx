export const metadata = {
  title: "Our Vendors | Abingdon Antiques",
  description: "Meet the vendors at Abingdon Antiques and More Vendor Mall. Learn about vendor opportunities.",
};

export default function VendorsPage() {
  // Sample vendor data (in a real app, this would come from a database or CMS)
  const featuredVendors = [
    {
      id: 1,
      name: "Vintage Treasures",
      specialty: "Mid-century furniture and decor",
      description: "Specializing in authentic mid-century modern pieces from the 1950s-1970s, including furniture, lighting, and decorative objects.",
      boothNumber: "A12",
    },
    {
      id: 2,
      name: "Southern Heritage",
      specialty: "Americana and folk art",
      description: "Offering authentic Americana, folk art, primitives, and handcrafted items with a focus on Southern heritage and traditions.",
      boothNumber: "B23",
    },
    {
      id: 3,
      name: "Time Capsule Collectibles",
      specialty: "Vintage toys and advertising",
      description: "Nostalgic collection of vintage toys, advertising signs, and memorabilia from the 1920s through the 1980s.",
      boothNumber: "C08",
    },
    {
      id: 4,
      name: "Heritage Silver",
      specialty: "Fine silver and estate jewelry",
      description: "Curated collection of sterling silver, silverplate, and fine estate jewelry from various periods.",
      boothNumber: "D15",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-sepia-900">Our Vendors</h1>
      
      {/* Vendor Login Banner */}
      <div className="mb-12 rounded-lg bg-antique-dark p-6 text-center text-white shadow-md">
        <h2 className="mb-3 text-2xl font-bold">Vendor Portal</h2>
        <p className="mb-4">Current vendors can access their accounts through Quail HQ to manage inventory, track sales, and update settings.</p>
        <a 
          href="https://vendor.quailhq.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md bg-white px-6 py-3 font-medium text-sepia-900 shadow-sm transition-all hover:bg-sepia-50"
        >
          Access Vendor Portal
        </a>
      </div>
      
      <p className="mb-12 mx-auto max-w-3xl text-center text-lg text-sepia-800">
        Abingdon Antiques and More Vendor Mall hosts over 50 quality vendors specializing in various 
        antiques, collectibles, and vintage items. Each vendor brings their unique expertise and inventory 
        to create a diverse shopping experience.
      </p>
      
      {/* Featured Vendors */}
      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-bold text-sepia-900">Featured Vendors</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {featuredVendors.map((vendor) => (
            <div key={vendor.id} className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-sepia-900">{vendor.name}</h3>
                  <p className="mt-1 text-antique-dark">{vendor.specialty}</p>
                </div>
                <span className="rounded-full bg-sepia-100 px-3 py-1 text-sm text-sepia-800">
                  Booth #{vendor.boothNumber}
                </span>
              </div>
              <p className="text-sepia-800">{vendor.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Vendor Map */}
      <section className="mb-16 rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-sepia-900">Vendor Mall Layout</h2>
        
        <div className="aspect-video w-full rounded bg-sepia-100">
          <div className="flex h-full items-center justify-center text-center text-sepia-700">
            <div>
              <p className="text-lg font-medium">Vendor Mall Layout Map</p>
              <p className="mt-2">
                In a real implementation, this would be an interactive map showing vendor booth locations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Become a Vendor */}
      <section className="rounded-lg bg-sepia-100 p-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-sepia-900">Become a Vendor</h2>
            <p className="mb-4 text-sepia-800">
              Join our community of antique and collectible dealers at Abingdon Antiques and More Vendor Mall.
              We offer flexible booth spaces and competitive commission rates in a high-traffic location.
            </p>
            <p className="mb-4 text-sepia-800">
              As a vendor, you&apos;ll benefit from:
            </p>
            <ul className="mb-6 list-disc pl-5 text-sepia-800">
              <li>Prime location in historic Abingdon</li>
              <li>Professional sales staff</li>
              <li>Secure, climate-controlled environment</li>
              <li>Marketing and promotion</li>
              <li>Flexible terms and booth sizes</li>
            </ul>
            <a 
              href="/contact" 
              className="inline-block rounded-md bg-antique-dark px-5 py-2.5 text-white shadow-sm transition-all hover:bg-sepia-800"
            >
              Inquire About Spaces
            </a>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-sepia-900">Vendor Information</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-sepia-900">Available Booth Sizes:</h4>
                <ul className="list-disc pl-5 text-sepia-800">
                  <li>Small: 6&apos; x 8&apos; ($175/month)</li>
                  <li>Medium: 8&apos; x 10&apos; ($250/month)</li>
                  <li>Large: 10&apos; x 12&apos; ($325/month)</li>
                  <li>Premium: 12&apos; x 15&apos; ($450/month)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-sepia-900">Commission Rate:</h4>
                <p className="text-sepia-800">10% sales commission on all items sold</p>
              </div>
              
              <div>
                <h4 className="font-medium text-sepia-900">Requirements:</h4>
                <ul className="list-disc pl-5 text-sepia-800">
                  <li>Quality antiques, collectibles, or vintage items</li>
                  <li>Professional display</li>
                  <li>Minimum 3-month rental agreement</li>
                  <li>Regular inventory rotation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vendor Testimonials */}
      <section className="mt-16">
        <h2 className="mb-8 text-2xl font-bold text-sepia-900">What Our Vendors Say</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <blockquote className="border-l-4 border-antique-dark pl-4">
              <p className="italic text-sepia-800">
                &quot;I&apos;ve been a vendor at Abingdon Antiques for five years now. The location is excellent, 
                the staff is professional, and my sales have been consistently strong.&quot;
              </p>
            </blockquote>
            <p className="mt-4 font-medium text-sepia-900">— Mary Johnson, Heritage Silver</p>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-md">
            <blockquote className="border-l-4 border-antique-dark pl-4">
              <p className="italic text-sepia-800">
                &quot;As a new dealer, I was nervous about starting out, but the team at Abingdon Antiques 
                was incredibly supportive. The mall gets great foot traffic and my booth has been profitable 
                from the first month.&quot;
              </p>
            </blockquote>
            <p className="mt-4 font-medium text-sepia-900">— Robert Williams, Time Capsule Collectibles</p>
          </div>
        </div>
      </section>
    </div>
  );
} 