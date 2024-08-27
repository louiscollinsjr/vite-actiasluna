import React from "react";


const ContactFormComponent: React.FC = () => {
  return (
    <section id="contact-section" className="w-full flex flex-col content-center items-center min-h-[42.5rem] py-24 my-2 px-10" tabIndex={-1}>
      <div className="max-w-screen-2xl">
        <p className="~text-base/lg tracking-wide text-black font-bold uppercase">
          
        </p>
        <div className="flex flex-col bg-slate-500 content-center items-center w-170">
          <div className="p-12 bg-slate-100 content-start items-center justify-items-center">
            <h3 className="font-bold text-center ~text-2xl/5xl">Contact us</h3>
            <form className="mt-12 grid grid-flow-row gap-4">
              <input className="h-10 pl-4" name="first-name" placeholder="First Name" type="text" />
              <input className="h-10 pl-4" name="last-name" placeholder="Last Name" type="text" />
              <input className="h-10 pl-4" name="business-emai-address" placeholder="Business email adress" type="text" />
              <input className="h-10 pl-4" name="phone-number" placeholder="Phone Number (Optional)" type="text" />
              <div className="mt-6 mb-6" ><input type="checkbox" name="more-info"/> <label className="text-sm">Get updates about upcoming events, webinars, product announcements, and helpful resources.</label></div>
              <button className="bg-blue-500 hover:bg-blue-400 text-white rounded-full ~px-4/8 ~py-2/4 ~text-sm/xl" type="submit">Contact atem </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormComponent;