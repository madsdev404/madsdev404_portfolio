import React from 'react';

const servicesData = [
  { title: 'Web Design', description: 'A small river named Duden flows by their place and supplies.', icon: 'flaticon-3d-design' },
  { title: 'Web Application', description: 'A small river named Duden flows by their place and supplies.', icon: 'flaticon-app-development' },
  { title: 'Web Development', description: 'A small river named Duden flows by their place and supplies.', icon: 'flaticon-web-programming' },
  { title: 'Banner Design', description: 'A small river named Duden flows by their place and supplies.', icon: 'flaticon-branding' },
  { title: 'Branding', description: 'A small river named Duden flows by their place and supplies.', icon: 'flaticon-computer' },
  { title: 'Icon Design', description: 'A small river named Duden flows by their place and supplies.', icon: 'flaticon-vector' },
  { title: 'Graphic Design', description: 'A small river named Duden flows by their place and supplies.', icon: 'flaticon-vector' },
  { title: 'SEO', description: 'A small river named Duden flows by their place and supplies.', icon: 'flaticon-zoom' },
];

const Services = () => {
  return (
    <section className="ftco-section py-16" id="services-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center mb-5 pb-5">
          <div className="w-full md:w-7/12 heading-section text-center animate-fade-in">
            <span className="subheading text-lg font-semibold text-gray-600">I am great at</span>
            <h2 className="mb-4 text-4xl font-bold">We do awesome services for our clients</h2>
            <p className="text-gray-700">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          {servicesData.map((service, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="media block-6 services block bg-white rounded-lg shadow p-6 text-center">
                <div className="icon flex items-center justify-center w-20 h-20 rounded-full bg-blue-500 text-white mx-auto mb-4">
                  <span className={`${service.icon} text-3xl`}></span>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3 text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
