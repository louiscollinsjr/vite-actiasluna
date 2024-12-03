import React from 'react';


const PrivacyPolicy: React.FC = () => {
  return (
    <section className='w-full flex flex-col md:justify-center items-center py-48 md:py-24 lg:py-28 px-5 bg-white lg:h-[1000px]'>
        <div className=' text-sm bg-white lg:w-245 p-10'>
        <h1 className='font-bold pb-8 text-xl'>Privacy Policy</h1>
        <p className='pb-8'>Welcome to Actias Luna! We are committed to protecting your privacy and ensuring that your personal data is handled securely. This privacy policy explains how we collect, use, and protect your information when you visit our website.</p>

      <h2>1. Information We Collect</h2>
      <p><strong>Essential Cookies:</strong> We use cookies that are essential for the functioning of our website. These cookies are necessary to provide you with core functionalities such as navigation and security. They do not store personal data or track your activities beyond the scope of our site.</p>
      <p><strong>Other Information:</strong> We do not collect or process any personal data other than what is necessary for the website's operation. We do not use tracking technologies or collect information from third-party sources.</p>

      <h2>2. How We Use Your Information</h2>
      <p><strong>Site Functionality:</strong> The essential cookies we use are strictly necessary to ensure the website functions correctly. They allow us to remember your preferences during your visit and ensure that the site operates securely.</p>
      <p><strong>No Data Sharing:</strong> We do not share, sell, or otherwise disclose any personal data to third parties. Your information is not used for advertising or marketing purposes.</p>

      <h2>3. Your Rights</h2>
      <p><strong>Access and Control:</strong> As we do not collect personal data, there are no additional rights concerning access or control over your data in relation to third parties. You can manage your cookie preferences through your browser settings if you wish to disable essential cookies.</p>
      <p><strong>Contact Us:</strong> If you have any questions about this privacy policy or how we handle cookies, please contact us at privacy @ actiasluna.com.</p>

      <h2>4. Changes to This Privacy Policy</h2>
      <p>We may update this privacy policy from time to time to reflect changes in our practices or to comply with legal requirements. Any changes will be posted on this page with an updated revision date.</p>

      <h2>5. Contact Information</h2>
      <p className='pb-8'>For any inquiries or concerns regarding this privacy policy, please contact us at:</p>
      <p className=''>Actias Luna<br />
      <strong>Email:</strong> privacy @ actiasluna.com
      </p>

        </div>
      
    </section>
  );
};

export default PrivacyPolicy;