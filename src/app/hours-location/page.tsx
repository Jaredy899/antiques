'use client';

import AddressLink from '~/components/AddressLink';

export default function HoursLocationPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-sepia-900">Hours & Location</h1>
      
      <div className="grid gap-12 md:grid-cols-2">
        {/* Hours Section */}
        <section className="rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-sepia-900">Store Hours</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between border-b border-sepia-100 pb-2">
              <span className="font-medium">Monday - Saturday</span>
              <span>10:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between border-b border-sepia-100 pb-2">
              <span className="font-medium">Sunday</span>
              <span>1:00 PM - 4:00 PM</span>
            </div>
            <div className="pt-2 text-sepia-700 italic">
              * Closed on major holidays
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="mb-4 text-xl font-semibold text-sepia-900">Holiday Schedule</h3>
            <p className="mb-4 text-sepia-800">
              We are closed on the following holidays:
            </p>
            <ul className="list-disc pl-5 text-sepia-800">
              <li>New Year&apos;s Day</li>
              <li>Easter Sunday</li>
              <li>Independence Day</li>
              <li>Thanksgiving Day</li>
              <li>Christmas Day</li>
            </ul>
            <p className="mt-4 text-sepia-800">
              We may have reduced hours on days adjacent to holidays. Please call ahead to confirm.
            </p>
          </div>
        </section>
        
        {/* Location Section */}
        <section className="rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-sepia-900">Our Location</h2>
          
          <div className="mb-6">
            <h3 className="mb-2 font-medium text-sepia-900">Address:</h3>
            <address className="text-sepia-800 not-italic">
              <AddressLink address="961 West Main Street, Abingdon, VA 24210">
                961 West Main Street<br />
                Abingdon, VA 24210
              </AddressLink>
            </address>
          </div>
          
          <div className="mb-6">
            <h3 className="mb-2 font-medium text-sepia-900">Contact:</h3>
            <p className="mb-1 text-sepia-800">Phone: <a href="tel:+12764771515" className="hover:underline">276-477-1515</a></p>
            <p className="text-sepia-800">Email: <a href="mailto:info@abingdonantiquesandmore.com" className="hover:underline">info@abingdonantiquesandmore.com</a></p>
          </div>
          
          <div className="mb-8">
            <h3 className="mb-2 font-medium text-sepia-900">Parking:</h3>
            <p className="text-sepia-800">
              Free parking is available in our lot and on surrounding streets.
            </p>
          </div>
          
          <div>
            <a 
              href="https://maps.google.com/?q=961+West+Main+Street,+Abingdon,+VA+24210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-md bg-antique-dark px-5 py-2.5 text-white shadow-sm transition-all hover:bg-sepia-800"
            >
              Get Directions
            </a>
          </div>
        </section>
      </div>
      
      {/* Map Section */}
      <section className="mt-12 rounded-lg bg-white p-2 shadow-md">
        <div className="aspect-video w-full">
          {/* Google Maps iframe */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.5396811182535!2d-82.0044369!3d36.5978767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885a8567c5696125%3A0xc4e3acdd8c366a57!2s961%20W%20Main%20St%2C%20Abingdon%2C%20VA%2024210!5e0!3m2!1sen!2sus!4v1709951280359!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      
      {/* Nearby Attractions */}
      <section className="mt-12 rounded-lg bg-sepia-100 p-8">
        <h2 className="mb-6 text-2xl font-bold text-sepia-900">Nearby Attractions</h2>
        <p className="mb-4 text-sepia-800">
          While you&apos;re in the area, why not explore some other local attractions:
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded bg-white p-4 shadow-sm">
            <h3 className="mb-1 font-semibold text-sepia-900">Historic Downtown</h3>
            <p className="text-sepia-700">Explore the charming historic district with shops and restaurants.</p>
          </div>
          <div className="rounded bg-white p-4 shadow-sm">
            <h3 className="mb-1 font-semibold text-sepia-900">The Barter Theatre</h3>
            <p className="text-sepia-700">The state theatre of Virginia, offering year-round performances.</p>
          </div>
          <div className="rounded bg-white p-4 shadow-sm">
            <h3 className="mb-1 font-semibold text-sepia-900">Virginia Creeper Trail</h3>
            <p className="text-sepia-700">A scenic 34-mile multi-purpose trail for hiking and biking.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 