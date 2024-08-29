import React from 'react';
import { Fragment } from 'react';
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from 'react-icons/bi';

import { FaTwitter } from 'react-icons/fa';
import actiasLogo from '../assets/actiasluna_group.svg';

const socialMediaLinks = [
  { url: '#', icon: <BiLogoFacebookCircle className="text-xl" /> },
  { url: '#', icon: <BiLogoInstagram className="text-xl" /> },
  { url: '#', icon: <FaTwitter className="text-xl" /> },
  { url: '#', icon: <BiLogoLinkedinSquare className="text-xl" /> },
  { url: '#', icon: <BiLogoYoutube className="text-xl" /> },
];

// const legalCopyLinks = [
//     // { title: "Privacy Policy", url: "#" },
//     // { title: "Terms of Service", url: "#" },
//     // { title: "Cookies Settings", url: "#" },
// ];

const FooterComponent: React.FC = () => {
  return (
    <Fragment>
      <section className="bg-zinc-50 flex flex-col w-full flex flex-col content-center items-center pt-12 px-10">
        <div className="max-w-screen-2xl lg:w-480">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full text-xs">
            <div className="text-black text-left">
              <img className="w-40 pb-4" src={actiasLogo} alt="" />
              {/* <p className="text-xs font-normal py-3">Follow us</p>
               <div className="flex space-x-4">
                {socialMediaLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="text-gray-500 hover:text-gray-900"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>  */}
            </div>
            <div>
            <p className="text-xs font-normal py-3">Follow us</p>
              <div className="flex space-x-4">
                {socialMediaLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="text-gray-500 hover:text-gray-900"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className='flex space-x-4 py-8 align-baseline align-bottom text-xs'>
            
                <p className=''>© 2024 <b>actias</b>luna., SRL. All rights reserved.</p>
                {/* {legalCopyLinks.map((link,index)=>(
                     <a
                     key={index}
                     href={link.url}
                     className="text-gray-500 hover:text-gray-900"
                   >
                     {link.title}
                   </a>
                ))} */}
              </div>
        </div>
      </section>
    </Fragment>
  );
};

export default FooterComponent;
