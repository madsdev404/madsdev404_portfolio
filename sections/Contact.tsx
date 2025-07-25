import React from 'react';

const Contact = () => {
  return (
    <section className="ftco-section contact-section ftco-no-pb py-16" id="contact-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center mb-5 pb-3">
          <div className="w-full md:w-7/12 heading-section text-center animate-fade-in">
            <span className="subheading text-lg font-semibold text-gray-600">Contact us</span>
            <h2 className="mb-4 text-4xl font-bold">Have a Project?</h2>
            <p className="text-gray-700">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-8/12 px-4 mb-8">
            <form action="#" className="bg-white p-8 md:p-10 rounded-lg shadow contact-form">
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <div className="form-group">
                    <input type="text" className="form-control w-full p-3 border border-gray-300 rounded-md" placeholder="Your Name" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <div className="form-group">
                    <input type="text" className="form-control w-full p-3 border border-gray-300 rounded-md" placeholder="Your Email" />
                  </div>
                </div>
                <div className="w-full px-2 mb-4">
                  <div className="form-group">
                    <input type="text" className="form-control w-full p-3 border border-gray-300 rounded-md" placeholder="Subject" />
                  </div>
                </div>
                <div className="w-full px-2 mb-4">
                  <div className="form-group">
                    <textarea name="" id="" cols={30} rows={7} className="form-control w-full p-3 border border-gray-300 rounded-md" placeholder="Message"></textarea>
                  </div>
                </div>
                <div className="w-full px-2 mb-4">
                  <div className="form-group">
                    <input type="submit" value="Send Message" className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white py-3 px-5 rounded-full cursor-pointer" />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="w-full md:w-4/12 flex pl-0 md:pl-5">
            <div className="w-full">
              <div className="dbox w-full flex mb-4">
                <div className="icon flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white mr-4">
                  <span className="fa fa-map-marker"></span>
                </div>
                <div className="text">
                  <p><span className="font-semibold">Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
              </div>
              <div className="dbox w-full flex mb-4">
                <div className="icon flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white mr-4">
                  <span className="fa fa-phone"></span>
                </div>
                <div className="text">
                  <p><span className="font-semibold">Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                </div>
              </div>
              <div className="dbox w-full flex mb-4">
                <div className="icon flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white mr-4">
                  <span className="fa fa-paper-plane"></span>
                </div>
                <div className="text">
                  <p><span className="font-semibold">Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                </div>
              </div>
              <div className="dbox w-full flex">
                <div className="icon flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white mr-4">
                  <span className="fa fa-globe"></span>
                </div>
                <div className="text">
                  <p><span className="font-semibold">Website</span> <a href="#">yoursite.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
