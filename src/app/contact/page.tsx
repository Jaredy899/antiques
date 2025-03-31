'use client';

import { useState } from 'react';
import AddressLink from '~/components/AddressLink';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: "" as string | null }
  });

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    
    try {
      // Replace YOUR_FORM_ID with your actual Formspree form ID
      const res = await fetch('https://formspree.io/f/xdkeonnb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
      });
      
      if (res.ok) {
        setFormStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: "Thank you! Your message has been sent successfully." }
        });
        setInputs({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "An error occurred. Please try again later." }
      });
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-logo-800">Contact Us</h1>
      
      <div className="grid gap-12 md:grid-cols-2">
        {/* Contact Information */}
        <section className="rounded-lg bg-white p-8 shadow-logo">
          <h2 className="mb-6 text-2xl font-bold text-logo-800">Get In Touch</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-medium text-logo-800">Phone:</h3>
              <p className="text-logo-700"><a href="tel:+12764771515" className="hover:underline">276-477-1515</a></p>
            </div>
            
            <div>
              <h3 className="mb-2 font-medium text-logo-800">Email:</h3>
              <p className="text-logo-700"><a href="mailto:abingdonantiquesandmore@gmail.com" className="hover:underline">abingdonantiquesandmore@gmail.com</a></p>
            </div>
            
            <div className="mb-6">
              <h3 className="mb-2 font-medium text-logo-800">Addresses:</h3>
              <div className="space-y-4 text-logo-700">
                <div>
                  <p className="font-medium">Main Location:</p>
                  <address className="not-italic">
                    <AddressLink address="961 West Main Street, Abingdon, VA 24210">
                      961 West Main Street<br />
                      Abingdon, VA 24210
                    </AddressLink>
                  </address>
                </div>
                <div>
                  <p className="font-medium">Second Location (Opening April 4th):</p>
                  <address className="not-italic">
                    <AddressLink address="227 West Main Street, Abingdon, VA 24210">
                      227 West Main Street<br />
                      Abingdon, VA 24210
                    </AddressLink>
                  </address>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="mb-2 font-medium text-logo-800">Hours:</h3>
              <p className="mb-1 text-logo-700">Monday - Saturday: 10:00 AM - 6:00 PM</p>
              <p className="text-logo-700">Sunday: 1:00 PM - 4:00 PM</p>
            </div>
          </div>
          
          <div className="mt-8 border-t border-logo-100 pt-6">
            <h3 className="mb-4 text-xl font-semibold text-logo-800">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61551934216826" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-logo-600 hover:text-logo-800 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/abingdonantiques?igsh=ajl1MXg1bmdubGpm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-logo-600 hover:text-logo-800 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a 
                href="http://www.youtube.com/@AbingdonAntiques" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-logo-600 hover:text-logo-800 transition-colors"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@abingdonantiques?_t=ZP-8ugMjrT3mKk&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-logo-600 hover:text-logo-800 transition-colors"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
        
        {/* Contact Form */}
        <section className="rounded-lg bg-white p-8 shadow-logo">
          <h2 className="mb-6 text-2xl font-bold text-logo-800">Send Us a Message</h2>
          
          {formStatus.submitted ? (
            <div className="rounded-md bg-green-50 p-4 text-green-800">
              <p className="text-lg font-medium">{formStatus.info.msg}</p>
              <p className="mt-2">We&apos;ll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleOnSubmit}>
              <div>
                <label htmlFor="name" className="mb-1 block font-medium text-logo-800">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-logo-200 bg-logo-50 px-4 py-2 focus:border-logo-600 focus:outline-none focus:ring-1 focus:ring-logo-600"
                  value={inputs.name}
                  onChange={handleOnChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="mb-1 block font-medium text-logo-800">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-logo-200 bg-logo-50 px-4 py-2 focus:border-logo-600 focus:outline-none focus:ring-1 focus:ring-logo-600"
                  value={inputs.email}
                  onChange={handleOnChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="mb-1 block font-medium text-logo-800">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full rounded-md border border-logo-200 bg-logo-50 px-4 py-2 focus:border-logo-600 focus:outline-none focus:ring-1 focus:ring-logo-600"
                  value={inputs.subject}
                  onChange={handleOnChange}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="mb-1 block font-medium text-logo-800">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-md border border-logo-200 bg-logo-50 px-4 py-2 focus:border-logo-600 focus:outline-none focus:ring-1 focus:ring-logo-600"
                  value={inputs.message}
                  onChange={handleOnChange}
                  required
                ></textarea>
              </div>
              
              {formStatus.info.error && (
                <div className="rounded-md bg-red-50 p-4 text-red-800">
                  <p>{formStatus.info.msg}</p>
                </div>
              )}
              
              <button
                type="submit"
                disabled={formStatus.submitting}
                className="rounded-md bg-logo-600 px-5 py-2.5 text-white shadow-sm transition-all hover:bg-logo-700 focus:ring-2 focus:ring-logo-300 disabled:opacity-70"
              >
                {formStatus.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </section>
      </div>
      
      {/* FAQ Section */}
      <section className="mt-16 rounded-lg bg-logo-50 p-8">
        <h2 className="mb-8 text-2xl font-bold text-logo-800">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-logo-800">What are your hours?</h3>
            <p className="text-logo-700">
              We are open Monday through Saturday from 10:00 AM to 6:00 PM, and Sunday from 1:00 PM to 4:00 PM.
              We are closed on major holidays.
            </p>
          </div>
          
          <div>
            <h3 className="mb-2 text-xl font-semibold text-logo-800">Do you buy antiques?</h3>
            <p className="text-logo-700">
              We don&apos;t directly purchase antiques, but our individual vendors may be interested in buying items 
              that fit their collections. Feel free to contact us, and we can connect you with the appropriate vendor.
            </p>
          </div>
          
          <div>
            <h3 className="mb-2 text-xl font-semibold text-logo-800">Do you offer appraisals?</h3>
            <p className="text-logo-700">
              We do not offer formal appraisals, but our knowledgeable vendors can often provide informal assessments 
              of items in their areas of expertise.
            </p>
          </div>
          
          <div>
            <h3 className="mb-2 text-xl font-semibold text-logo-800">How can I become a vendor?</h3>
            <p className="text-logo-700">
              We welcome new vendors who specialize in quality antiques and collectibles. Please contact us directly 
              to discuss available spaces and requirements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 