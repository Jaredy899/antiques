'use client';

import { useState } from 'react';

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
      <h1 className="mb-8 text-center text-4xl font-bold text-sepia-900">Contact Us</h1>
      
      <div className="grid gap-12 md:grid-cols-2">
        {/* Contact Information */}
        <section className="rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-sepia-900">Get In Touch</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-medium text-sepia-900">Phone:</h3>
              <p className="text-sepia-800"><a href="tel:+12764771515" className="hover:underline">276-477-1515</a></p>
            </div>
            
            <div>
              <h3 className="mb-2 font-medium text-sepia-900">Email:</h3>
              <p className="text-sepia-800"><a href="mailto:info@abingdonantiquesandmore.com" className="hover:underline">info@abingdonantiquesandmore.com</a></p>
            </div>
            
            <div>
              <h3 className="mb-2 font-medium text-sepia-900">Address:</h3>
              <address className="not-italic text-sepia-800">
                <a href="https://maps.google.com/?q=961+West+Main+Street,+Abingdon,+VA+24210" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  961 West Main Street<br />
                  Abingdon, VA 24210
                </a>
              </address>
            </div>
            
            <div>
              <h3 className="mb-2 font-medium text-sepia-900">Hours:</h3>
              <p className="mb-1 text-sepia-800">Monday - Saturday: 10:00 AM - 6:00 PM</p>
              <p className="text-sepia-800">Sunday: 1:00 PM - 4:00 PM</p>
            </div>
          </div>
          
          <div className="mt-8 border-t border-sepia-100 pt-6">
            <h3 className="mb-4 text-xl font-semibold text-sepia-900">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61551934216826" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-antique-dark hover:text-sepia-800 transition-colors"
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
                className="text-antique-dark hover:text-sepia-800 transition-colors"
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
            </div>
          </div>
        </section>
        
        {/* Contact Form */}
        <section className="rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-sepia-900">Send Us a Message</h2>
          
          {formStatus.submitted ? (
            <div className="rounded-md bg-green-50 p-4 text-green-800">
              <p className="text-lg font-medium">{formStatus.info.msg}</p>
              <p className="mt-2">We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleOnSubmit}>
              <div>
                <label htmlFor="name" className="mb-1 block font-medium text-sepia-900">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-sepia-200 bg-sepia-50 px-4 py-2 focus:border-antique-dark focus:outline-none focus:ring-1 focus:ring-antique-dark"
                  value={inputs.name}
                  onChange={handleOnChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="mb-1 block font-medium text-sepia-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-sepia-200 bg-sepia-50 px-4 py-2 focus:border-antique-dark focus:outline-none focus:ring-1 focus:ring-antique-dark"
                  value={inputs.email}
                  onChange={handleOnChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="mb-1 block font-medium text-sepia-900">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full rounded-md border border-sepia-200 bg-sepia-50 px-4 py-2 focus:border-antique-dark focus:outline-none focus:ring-1 focus:ring-antique-dark"
                  value={inputs.subject}
                  onChange={handleOnChange}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="mb-1 block font-medium text-sepia-900">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-md border border-sepia-200 bg-sepia-50 px-4 py-2 focus:border-antique-dark focus:outline-none focus:ring-1 focus:ring-antique-dark"
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
                className="rounded-md bg-antique-dark px-5 py-2.5 text-white shadow-sm transition-all hover:bg-sepia-800 focus:ring-2 focus:ring-sepia-300 disabled:opacity-70"
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </section>
      </div>
      
      {/* FAQs Section */}
      <section className="mt-12 rounded-lg bg-sepia-100 p-8">
        <h2 className="mb-6 text-2xl font-bold text-sepia-900">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-sepia-900">
              Do you offer appraisals for antiques?
            </h3>
            <p className="text-sepia-800">
              While we don't offer formal appraisals, our experienced vendors can provide informal assessments of items' 
              potential market value. For official appraisals, we recommend contacting a certified appraiser.
            </p>
          </div>
          
          <div>
            <h3 className="mb-2 text-lg font-semibold text-sepia-900">
              Can I sell my antiques through your store?
            </h3>
            <p className="text-sepia-800">
              We offer vendor spaces for qualified dealers. Please contact us for information about becoming a vendor 
              or to inquire about consignment options for individual items.
            </p>
          </div>
          
          <div>
            <h3 className="mb-2 text-lg font-semibold text-sepia-900">
              Do you deliver items?
            </h3>
            <p className="text-sepia-800">
              For larger items, we can arrange delivery for an additional fee within a 50-mile radius. For shipping 
              further distances, we work with several shipping companies to ensure safe delivery of your purchases.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 