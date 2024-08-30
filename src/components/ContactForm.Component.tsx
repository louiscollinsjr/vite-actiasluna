import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactFormComponent: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);

  const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
  const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
  const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      emailjs.sendForm(
        emailjsServiceId,       // EmailJS service ID as a string
        emailjsTemplateId,     // EmailJS template ID as a string
        form.current,           // Reference to the form element
        emailjsPublicKey       // EmailJS public key as a string
      ).then(
        () => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          form.current?.reset(); // Clear the form after success
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // Hide message after 5 seconds
        },
        () => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // Hide message after 5 seconds
        }
      );
    }
  };

  return (
    <section id="contact-section" className="w-full flex flex-col content-center items-center min-h-[42.5rem] py-2 lg:py-24 my-2 px-10 bg-[#f7f5fb]" tabIndex={-1}>
      <div className="w-full md:max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 gap-6 content-center w-full">
          <div className="rounded-xl">
            <p className="~text-base/lg tracking-wide text-black pb-2">
              <b>Actias</b>Luna
            </p>
            <p className="~text-4xl/7xl text-black pb-8 lg:w-245 font-heading">
              Looking forward.
            </p>
            <p className="~text-base/xl py-2 lg:pr-20 tracking-wide text-black pb-10">
              Whether you are seeking to expand into new markets, optimize your operations, or address complex regulatory issues, we are here to guide you every step of the way. <br /> <br /> Together, we can unlock new opportunities and achieve remarkable success on the global stage.
            </p>
          </div>

          <div className="p-12 bg-gray-200 content-start items-center justify-items-center rounded-xl">
            <form ref={form} onSubmit={sendEmail} className="py-12 grid grid-flow-row gap-4">
              <input className="h-10 pl-4" name="first-name" placeholder="First Name" type="text" required />
              <input className="h-10 pl-4" name="last-name" placeholder="Last Name" type="text" required />
              <input className="h-10 pl-4" name="business-email-address" placeholder="Business email address" type="email" required />
              <input className="h-10 pl-4" name="phone-number" placeholder="Phone Number (Optional)" type="text" />
              <div className="mt-6 mb-6">
                <input type="checkbox" name="more-info" />
                <label className="text-sm pl-2">  Get updates about upcoming events, webinars, product announcements, and helpful resources.</label>
              </div>
              <button className="bg-black hover:bg-slate-600 text-white rounded-full px-4 py-2 text-sm" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Send'}
              </button>
              {stateMessage && <p>{stateMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormComponent;