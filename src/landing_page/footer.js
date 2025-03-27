import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaYoutube } from 'react-icons/fa'; // Social media icons

const Footer = () => {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Our Story', href: '#' },
        { name: 'Our Stores', href: '#' },
        { name: 'Franchise Enquiry', href: '#' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { name: 'Category', href: '#' },
        { name: 'Collection', href: '#' },
        { name: 'Offers', href: '#' },
        { name: 'Corporate Gifting', href: '#' },
        { name: 'Jewelry Guide', href: '#' },
        { name: 'Our Certifications', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'FAQs', href: '#' },
        { name: 'Customer Support', href: '#' },
        { name: 'Franchise Enquiry', href: '#' },
      ],
    },
    {
      title: 'Order',
      links: [
        { name: 'Shipping Policy', href: '#' },
        { name: 'Return Policy', href: '#' },
        { name: 'Cancellation Policy', href: '#' },
        { name: 'Track Order', href: '#' },
        { name: 'Check Order Status', href: '#' },
      ],
    },
  ];

  const contactInfo = {
    company: 'Lillian Jewelers Pvt. Ltd.',
    address: '56 W. Broadway Street, Park Avenue, San Jose, California - 056',
    phone1: '+1 (226) 152-4722',
    phone2: '+315 652 415 452',
    email: 'info@lillianjewelers.com',
  };

  const paymentMethods = [
    
    '/media/assests/visa.png',
   '/media/assests/card.png',
   '/media/assests/google-pay.png',
   '/media/assests/visa.png',
   '/media/assests/paypal.png',
   '/media/assests/card2.png',
   '/media/assests/american.png',
   '/media/assests/apple-pay.png',
   '/media/assests/amazon-pay.png',
  ];

  const socialMedia = [
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaPinterest />, href: '#' },
    { icon: <FaYoutube />, href: '#' },
  ];

  return (
    <footer className="bg-white py-12 border-4 border-solid  border-[#B5EBE6]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Footer Sections (Company, Quick Links, Legal, Order) */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-teal-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact</h3>
            <p className="text-gray-600 mb-2">{contactInfo.company}</p>
            <p className="text-gray-600 mb-2">{contactInfo.address}</p>
            <p className="text-gray-600 mb-2">{contactInfo.phone1}</p>
            <p className="text-gray-600 mb-2">{contactInfo.phone2}</p>
            <p className="text-gray-600">
              <a href={`mailto:${contactInfo.email}`} className="hover:text-teal-600">
                {contactInfo.email}
              </a>
            </p>
          </div>
        </div>

        {/* Newsletter and Payment Methods */}
        <div className='flex gap-100 text-lg'>
            <h3 >
              Subscribe for our daily Offers & News later
            </h3>  <p className=" mr-4">We accept the following payment options</p>
            </div>
        <div className="flex flex-col lg:flex-row justify-between items-center border-t border-gray-200 pt-8">
          {/* Newsletter Subscription */}
          
          
          <div className="flex sm:flex-row items-center mb-6 lg:mb-0">
            
            <div className="flex w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email..."
                className="border border-gray-300 rounded-l-md px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Payment Methods */}
         
          <div className="flex items-center space-x-4">
            
            {paymentMethods.map((method, index) => (
              <img
                key={index}
                src={method}
                alt="Payment Method"
                className="h-6"
              />
            ))}
          </div>
        </div>

        {/* Copyright and Social Media */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 border-t border-gray-200 pt-6">
          <p className="text-gray-600 mb-4 sm:mb-0">
            &copy; Lillian Jewelers 2024
          </p>
          <div className="flex space-x-4">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-600 hover:text-teal-600 transition-colors text-xl"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;