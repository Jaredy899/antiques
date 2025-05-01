'use client';

import AddressLink from '~/components/AddressLink';

export default function InformationPage() {
  return (
    <main className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-center mb-12 text-gray-900 dark:text-white">Information</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Hours Information */}
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg transition-colors duration-200">
            <h2 className="text-2xl font-serif font-bold mb-6 text-gray-900 dark:text-white">Store Hours</h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Tuesday - Saturday</p>
                <p className="text-gray-600 dark:text-gray-300">10:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Sunday & Monday</p>
                <p className="text-gray-600 dark:text-gray-300">Typically Closed</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">* May be open on special occasions or during peak seasons</p>
            </div>
            
            <h3 className="text-xl font-serif font-bold mt-8 mb-4 text-gray-900 dark:text-white">Holiday Schedule</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">We are closed on the following holidays:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                <li>New Year&apos;s Day</li>
                <li>Easter Sunday</li>
                <li>Independence Day</li>
                <li>Thanksgiving Day</li>
                <li>Christmas Eve</li>
                <li>Christmas Day</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 italic">We may have reduced hours on days adjacent to holidays. Please call ahead to confirm.</p>
            </div>
          </div>
          
          {/* Location Information */}
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg transition-colors duration-200">
            <h2 className="text-2xl font-serif font-bold mb-6 text-gray-900 dark:text-white">Our Location</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Address:</h3>
                <AddressLink address="227 West Main Street, Abingdon, VA 24210">
                  <p>227 West Main Street</p>
                  <p>Abingdon, VA 24210</p>
                </AddressLink>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Phone:</h3>
                <a 
                  href="tel:276-477-1515" 
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:underline transition-colors"
                >
                  276-477-1515
                </a>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Email:</h3>
                <a 
                  href="mailto:abingdonantiquesandmore@gmail.com" 
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:underline transition-colors"
                >
                  abingdonantiquesandmore@gmail.com
                </a>
              </div>
              <div className="mt-6">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Directions:</h3>
                <p className="text-gray-600 dark:text-gray-300">We are located in the heart of historic Abingdon, Virginia, on West Main Street, across the street from <a href="https://abingdoncommons.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:underline transition-colors">Abingdon Commons</a>.</p>
              </div>
              <div className="mt-6">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Parking:</h3>
                <p className="text-gray-600 dark:text-gray-300">Free parking is available on the street and in nearby public lots.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 max-w-6xl mx-auto">
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg transition-colors duration-200">
            <h2 className="text-2xl font-serif font-bold mb-6 text-gray-900 dark:text-white text-center">Location Map</h2>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
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

        {/* FAQ Section */}
        <div className="mt-12 max-w-6xl mx-auto">
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg transition-colors duration-200">
            <h2 className="text-2xl font-serif font-bold mb-6 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">What types of items do you sell?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We offer a wide variety of antiques and collectibles, including furniture, jewelry, glassware, 
                  pottery, and more. Our inventory is constantly changing as we receive new items.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Do you buy antiques?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We may be interested in purchasing quality antiques and collectibles that fit our inventory. 
                  Please contact us to discuss what you have available.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Do you offer appraisals?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, we offer professional appraisals on select items. Our experienced vendors can provide 
                  detailed assessments of antiques and collectibles in their areas of expertise. Please contact 
                  us directly to discuss your specific items and arrange an appointment.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">How can I become a vendor?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We welcome new vendors who specialize in quality antiques and collectibles. Please contact us directly 
                  to discuss available spaces and requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 