import React from 'react';

const Footer = () => {
  return (
    <footer className="ftco-footer ftco-section py-16 bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap mb-8">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2 text-white text-2xl font-semibold mb-4">Let's talk about</h2>
              <p className="text-gray-400">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <p className="mb-0 mt-4"><a href="#" className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">Learn more</a></p>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0 ml-0 md:ml-4">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2 text-white text-2xl font-semibold mb-4">Links</h2>
              <ul className="list-none p-0">
                <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white"><span className="fa fa-chevron-right mr-2"></span>Home</a></li>
                <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white"><span className="fa fa-chevron-right mr-2"></span>About</a></li>
                <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white"><span className="fa fa-chevron-right mr-2"></span>Services</a></li>
                <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white"><span className="fa fa-chevron-right mr-2"></span>Projects</a></li>
                <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white"><span className="fa fa-chevron-right mr-2"></span>Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2 text-white text-2xl font-semibold mb-4">Services</h2>
              <ul className="list-none p-0">
                <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white"><span className="fa fa-chevron-right mr-2"></span>Web Design</a></li>
                <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white"><span className="fa fa-chevron-right mr-2"></span>Web Development</a></li>
                <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white"><span className="fa fa-chevron-right mr-2"></span>Business Strategy</a></li>
                <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white"><span className="fa fa-chevron-right mr-2"></span>Data Analysis</a></li>
                <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white"><span className="fa fa-chevron-right mr-2"></span>Graphic Design</a></li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2 text-white text-2xl font-semibold mb-4">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul className="list-none p-0">
                  <li className="flex mb-2"><span className="icon fa fa-map-marker mr-3"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                  <li className="flex mb-2"><a href="#" className="text-gray-400 hover:text-white"><span className="icon fa fa-phone mr-3"></span><span className="text">+2 392 3929 210</span></a></li>
                  <li className="flex mb-2"><a href="#" className="text-gray-400 hover:text-white"><span className="icon fa fa-paper-plane pr-4 mr-3"></span><span className="text">info@yourdomain.com</span></a></li>
                </ul>
              </div>
              <ul className="ftco-footer-social list-none p-0 flex mt-2">
                <li className="mr-3"><a href="#" className="text-gray-400 hover:text-white"><span className="fa fa-twitter"></span></a></li>
                <li className="mr-3"><a href="#" className="text-gray-400 hover:text-white"><span className="fa fa-facebook"></span></a></li>
                <li className="mr-3"><a href="#" className="text-gray-400 hover:text-white"><span className="fa fa-instagram"></span></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="w-full text-center">
            <p className="text-gray-500">
              Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" className="text-blue-400 hover:underline">Colorlib</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
