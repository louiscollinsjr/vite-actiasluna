import React from 'react';

interface Partner {
  name: string;
  url: string;
  description: string;
  logo?: string;
}

const PartnersComponent: React.FC = () => {

  const partners: Partner[] = [
    {
      name: "Equity Justice",
      url: "https://equityjustice.co.uk/",
      description: "Equity Justice is a specialized legal firm focusing on Immigration and Asylum law. They provide comprehensive services to clients navigating various immigration applications, including business and skilled worker visas, student visas, and EU settlement schemes."
    },
    {
      name: "Global Worker",
      url: "https://globalworker.ro/",
      description: "Global Worker is a recruitment agency that connects job seekers with employment opportunities across the European Union. They offer personalized career development support, access to a wide range of job listings, and assistance with necessary documentation."
    },
    {
      name: "Cobra UK Security",
      url: "http://www.cobrauksecurity.co.uk",
      description: "Cobra UK Security offers comprehensive security solutions tailored to meet the needs of various clients. Their services include manned guarding, mobile patrols, event security, and bespoke security consultancy."
    },
    {
      name: "Studio Hysen Belli",
      url: "https://studiohysenbelli.com/",
      description: "Studio Kontabiliteti Hysenbelli is a CKB-registered accounting studio offering financial, fiscal, and accounting consulting services to local and international businesses, helping clients navigate financial landscapes and ensure compliance."
    },
    {
      name: "KISIKA Group",
      url: "https://kisikagroup.com/",
      description: "KISIKA Group specializes in providing integrated solutions across various sectors, including construction, engineering, and project management. They are committed to delivering high-quality services through a team of experienced professionals."
    },
    {
      name: "Quick Legal",
      url: "https://quicklegal.ro/",
      description: "Quick Legal is a legal service provider that offers fast and efficient solutions for individuals and businesses. Their services include contract drafting, legal consultations, and dispute resolution."
    },
    {
      name: "Domi's Repairs and Home Works",
      url: "https://domisrepairsdecorating.co.uk/",
      description: "Domi's Repairs and Home Works is a company specializing in repairs and home works. They offer a wide range of services, including plumbing, electrical, painting, and more."
    },
    {
      name: "Aliida Staffing Recruiting",
      url: "https://www.alida-staffing-recruiting.eu/en/home-alida-staffing-recruiting/",
      description: "Alida Staffing & Recruiting is a recruitment agency committed to connecting skilled professionals with top companies. Their services include human resources, talent management, and more."
    },
    {
      name: "Strassen und Bruekenbau",
      url: "https://strassenbau.com.ro/",
      description: "Strassen und Brückenbau is a construction company specializing in residential and commercial projects, offering services in construction, renovation, and maintenance."
    },
    {
      name: "BB Bau & Handel GmbH",
      url: "https://bb-bau.net/",  
      description: "BB Bau & Handel GmbH specializes in delivering successful private and commercial construction projects. From planning to completion, we provide expert support every step of the way."
    },
    {
      name: "atem.",
      url: "https://www.atem.gdn",
      description: "atem. is a development and consulting company leveraging AI to drive innovation, optimize operations, and help businesses stay ahead in a digital world."
    }
  ];

  return (
    <section className="w-full flex flex-col content-center items-center pt-20 pb-48 px-10 bg-white">
      <div className="w-full max-w-5xl mx-auto">
        <p className="text-base tracking-wide text-black pt-32">
          <b>Our</b> Partners
        </p>
        <h1 className="text-black pb-4 text-4xl lg:text-7xl font-heading lg:pr-32">
        Building Success Together: Strategic Partnerships for Global Business Transformation
        </h1>
        <p className="md:text-md text-left text-base leading-normal lg:pr-20 pb-8 pt-16">
          At <b>Actias</b>Luna, our partners are more than colleagues—they are essential collaborators in driving transformative business solutions. We work closely with:
        </p>
        
        <ul className="list-disc pl-6 space-y-0 mb-12 w-[80%]">
          <li className="text-base"><span className="font-semibold">Leading Financial Institutions:</span> Helping banks and investment firms navigate complex funding landscapes and develop innovative financial strategies</li>
          <li className="text-base"><span className="font-semibold">Technology Pioneers:</span> Supporting tech companies in scaling global operations and overcoming regulatory challenges</li>
          <li className="text-base"><span className="font-semibold">Multinational Corporations:</span> Delivering tailored consulting approaches that optimize performance across diverse market environments</li>
        </ul>

        <p className="md:text-md text-left text-base leading-normal lg:pr-20 pb-12 border-b">
          Our partnership ecosystem is built on mutual trust, deep expertise, and a shared commitment to pushing boundaries. By combining our strategic insights with our partners' domain knowledge, we create synergies that unlock unprecedented business potential.
          Together, we don't just consult—we co-create pathways to sustainable growth and operational excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <a 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block"
              >
                <h3 className="text-xl font-heading mb-1  hover:text-blue-600 transition-colors">
                  {partner.name}
                </h3>
                <p className='text-blue-600 font-light text-xs mb-3'>{partner.url}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {partner.description}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersComponent;
