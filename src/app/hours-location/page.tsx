'use client';

import AddressLink from '~/components/AddressLink';

export default function HoursLocationPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-logo-800 dark:text-gray-100">Hours & Location</h1>
      
      <div className="grid gap-12 md:grid-cols-2">
        {/* Hours Section */}
        <section className="rounded-lg bg-white dark:bg-logo-dark-100 p-8 shadow-logo dark:shadow-dark-logo transition-colors duration-200">
          <h2 className="mb-6 text-2xl font-bold text-logo-800 dark:text-gray-100">Store Hours</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between border-b border-logo-100 dark:border-logo-dark-200 pb-2">
              <span className="font-medium text-logo-800 dark:text-gray-100">Monday - Saturday</span>
              <span className="text-logo-700 dark:text-gray-100">10:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between border-b border-logo-100 dark:border-logo-dark-200 pb-2">
              <span className="font-medium text-logo-800 dark:text-gray-100">Sunday</span>
              <span className="text-logo-700 dark:text-gray-100">1:00 PM - 4:00 PM</span>
            </div>
            <div className="pt-2 text-logo-600 dark:text-gray-100 italic">
              * Closed on major holidays
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="mb-4 text-xl font-semibold text-logo-800 dark:text-gray-100">Holiday Schedule</h3>
            <p className="mb-4 text-logo-700 dark:text-gray-100">
              We are closed on the following holidays:
            </p>
            <ul className="list-disc pl-5 text-logo-700 dark:text-gray-100">
              <li>New Year&apos;s Day</li>
              <li>Easter Sunday</li>
              <li>Independence Day</li>
              <li>Thanksgiving Day</li>
              <li>Christmas Day</li>
            </ul>
            <p className="mt-4 text-logo-700 dark:text-gray-100">
              We may have reduced hours on days adjacent to holidays. Please call ahead to confirm.
            </p>
          </div>
        </section>
        
        {/* Location Section */}
        <section className="rounded-lg bg-white dark:bg-logo-dark-100 p-8 shadow-logo dark:shadow-dark-logo transition-colors duration-200">
          <h2 className="mb-6 text-2xl font-bold text-logo-800 dark:text-gray-100">Our Locations</h2>
          
          {/* Main Location */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-logo-800 dark:text-gray-100">Original Location</h3>
            <div className="mb-4">
              <h4 className="mb-2 font-medium text-logo-800 dark:text-gray-100">Address:</h4>
              <address className="text-logo-700 dark:text-gray-100 not-italic">
                <AddressLink address="961 West Main Street, Abingdon, VA 24210">
                  961 West Main Street<br />
                  Abingdon, VA 24210
                </AddressLink>
              </address>
            </div>
          </div>

          {/* Second Location */}
          <div className="mb-6">
            <h3 className="mb-4 text-xl font-semibold text-logo-800 dark:text-gray-100">New Location</h3>
            <div className="mb-4">
              <h4 className="mb-2 font-medium text-logo-800 dark:text-gray-100">Address:</h4>
              <address className="text-logo-700 dark:text-gray-100 not-italic">
                <AddressLink address="227 West Main Street, Abingdon, VA 24210">
                  227 West Main Street<br />
                  Abingdon, VA 24210
                </AddressLink>
              </address>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="mb-2 font-medium text-logo-800 dark:text-gray-100">Contact:</h3>
            <p className="mb-1 text-logo-700 dark:text-gray-100">Phone: <a href="tel:+12764771515" className="hover:underline">276-477-1515</a></p>
            <p className="text-logo-700 dark:text-gray-100">Email: <a href="mailto:abingdonantiquesandmore@gmail.com" className="hover:underline">abingdonantiquesandmore@gmail.com</a></p>
          </div>
          
          <div className="mb-8">
            <h3 className="mb-2 font-medium text-logo-800 dark:text-gray-100">Parking:</h3>
            <p className="text-logo-700 dark:text-gray-100">
              Free parking is available at both locations and on surrounding streets.
            </p>
          </div>
          
          <div>
            <a 
              href="https://maps.google.com/?q=961+West+Main+Street,+Abingdon,+VA+24210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-md bg-logo-600 px-5 py-2.5 text-white shadow-sm transition-all hover:bg-logo-700"
            >
              Get Directions
            </a>
          </div>
        </section>
      </div>
      
      {/* Map Section */}
      <section className="mt-12 rounded-lg bg-white dark:bg-logo-dark-100 p-2 shadow-logo dark:shadow-dark-logo transition-colors duration-200">
        <h2 className="mb-6 text-2xl font-bold text-logo-800 dark:text-gray-100 text-center">Location Maps</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Main Location Map */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-logo-800 dark:text-gray-100 text-center">Original Location</h3>
            <div className="aspect-video w-full">
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
          </div>

          {/* Second Location Map */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-logo-800 dark:text-gray-100 text-center">New Location</h3>
            <div className="aspect-video w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.5396811182535!2d-81.9774369!3d36.7098767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885a8567c5696125%3A0xc4e3acdd8c366a57!2s227%20W%20Main%20St%2C%20Abingdon%2C%20VA%2024210!5e0!3m2!1sen!2sus!4v1709951280359!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 