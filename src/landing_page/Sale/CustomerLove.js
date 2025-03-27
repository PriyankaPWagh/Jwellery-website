import React from 'react';

const CustomerLove = () => {
  const testimonials = [
    {
      image:'/media/assests/cus1.png',
      name: 'Joseph',
      location: 'Australia',
      quote: '“I love the designs which are universal, beautiful, elegant.”',
      
    },
    {
      image:'/media/assests/cus2.png',
      name: 'Laura',
      location: 'France',
      quote: '“Absolutely love the ring Lillian made for me.”',
    },
    { 
      image:'/media/assests/cus3.png',
      name: 'Sarrah',
      location: 'NY',
      quote: '“I love Lillian’s jewelry. It is so different in New York!”',
    },
    {
      image:'/media/assests/cus4.png',
      name: 'Maria',
      location: 'Russia',
      quote: '“This is the first word that opened to my mind when I get opened delivery!”',
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-teal-600">Customer Love</h2>
        <div className="flex justify-center mb-6">
        <img src="/media/assests/Hrline.png"  />
        </div>
        
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">

        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-md p-6 text-center border border-teal-100 border-8 h-96"
           
          >
          
            {/* Circular Image Placeholder */}
            <div className="w-40 h-40 mx-auto rounded-full bg-gray-200 mb-4">
            <img
                   src={testimonial.image}
                   alt={testimonial.name}
                   className="w-40 h-40 mx-auto rounded-full mb-4"
              />

            </div>

            

            {/* Name and Location */}
            <h3 className="text-lg font-semibold text-gray-800">
              {testimonial.name} - {testimonial.location}
            </h3>

            {/* Quote */}
            <p className="text-gray-600 mt-[60px]">{testimonial.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerLove;