'use client';

import ImageGallery from "~/components/ImageGallery";

export default function ExamplesPage() {
  // Example 1: Simple gallery with hardcoded images
  const hardcodedImages = [
    "https://xfcpn2nyfb.ufs.sh/f/LKapUqCN3UFsZkQKnRtPE1NxDIg9rh86Bi4RfTSylb3eKdGm",
    "https://xfcpn2nyfb.ufs.sh/f/LKapUqCN3UFsWShw4AnAoZYFIrpQJyB8wcDh0eKmCV6iTnMg",
    "https://xfcpn2nyfb.ufs.sh/f/LKapUqCN3UFs7JnlQPMWntGHVqNQ4dFc7j52XlJrsP8Obg0x",
    "https://xfcpn2nyfb.ufs.sh/f/LKapUqCN3UFsWShw4AnAoZYFIrpQJyB8wcDh0eKmCV6iTnMg",
    "https://xfcpn2nyfb.ufs.sh/f/LKapUqCN3UFs7JnlQPMWntGHVqNQ4dFc7j52XlJrsP8Obg0x",
    "https://xfcpn2nyfb.ufs.sh/f/LKapUqCN3UFsWShw4AnAoZYFIrpQJyB8wcDh0eKmCV6iTnMg",
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Image Gallery Examples</h1>
      
      <div className="space-y-16">
        {/* Example 1: Default gallery */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Default Gallery (3 columns, square aspect ratio)</h2>
          <ImageGallery 
            images={hardcodedImages} 
            title="Featured Items" 
          />
        </div>
        
        {/* Example 2: 2 columns */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">2 Columns</h2>
          <ImageGallery 
            images={hardcodedImages.slice(0, 4)} 
            columns={2} 
          />
        </div>
        
        {/* Example 3: Video aspect ratio */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Video Aspect Ratio</h2>
          <ImageGallery 
            images={hardcodedImages.slice(0, 3)} 
            aspectRatio="video" 
          />
        </div>
        
        {/* Example 4: Auto aspect ratio */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Auto Aspect Ratio</h2>
          <ImageGallery 
            images={hardcodedImages.slice(0, 3)} 
            aspectRatio="auto" 
          />
        </div>
        
        {/* Example 5: 4 columns */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">4 Columns</h2>
          <ImageGallery 
            images={hardcodedImages} 
            columns={4} 
          />
        </div>
      </div>
    </div>
  );
} 