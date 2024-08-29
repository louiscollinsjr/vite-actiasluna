import React, { useState, useEffect }  from 'react';
import Team from '../assets/louiscollinsjr_a_proud_team_of_Romanian_office_workers_standi_65b5b0e0-dd6a-4670-977b-cbc663acd9ba_3.png'

const TransformingComponent: React.FC = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    // Function to toggle accordion
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // UseEffect to set the first accordion as active on initial render
  useEffect(() => {
    // Set the first accordion as active
    setActiveIndex(0);
  }, []); // Empty dependency array to run only once on component mount


    const accordianItems = [
        {
            heading: "Market Entry Strategy",
            content:"Helping businesses expand into new international markets with comprehensive market analysis, competitive positioning, and entry strategy development."
        },
        {
            heading: "Operational Optimization",
            content:"Streamlining operations to enhance efficiency and effectiveness, ensuring your business can compete on a global scale."
        },
        {
            heading: "Regulatory Compliance",
            content:"Navigating the regulatory landscape to ensure your business complies with international laws and standards."
        },
        {
            heading: "Risk Management",
            content:"Identifying and mitigating risks associated with global operations, safeguarding your business from potential threats."
        },
        {
            heading: "Strategic Partnerships",
            content:"Facilitating partnerships and alliances that can accelerate growth and open new opportunities."
        }
      ]

  return (
    <section className="w-full flex flex-col content-center items-center min-h-[42.5rem] py-48 lg:pb-48 px-10 bg-white">
    <div className="w-full md:max-w-screen-2xl">
    <p className="~text-base/lg tracking-wide text-black">
    <b>actias</b>luna
    </p>
      <h1 className="text-black pb-4 ~text-4xl/7xl lg:w-245 font-heading lg:pr-32">
      Transforming Challenges into Opportunities.
      </h1>
      <p className="md:text-md text-left ~text-base/xl leading-normal lg:w-245 lg:pr-20 pb-24">We bring unparalleled global expertise and innovative strategies to help your business thrive in any market, anywhere in the world.</p>
            
      
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 gap-6 bg-gray-100 p-10 md:p-20 rounded-2xl">
        <div>
        { accordianItems.map((faq, index) =>(
            <div key={index} className="border-b overflow-hidden">
            <button
              className="w-full p-4 text-left"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium ~text-base/3xl ">{faq.heading}</span>
                <svg
                  className={`text-gray-400 w-6 h-6 transform transition-transform ${
                    activeIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </button>
            {activeIndex === index && (
              <div className="p-4 leading-normal tracking-wide pr-6 ~text-base/lg">
                <p>{faq.content}</p>
              </div>
            )}
          </div>

        ))}


        </div>

        <div className="items-center content-start justify-items-center py-14 px-0 md:py-8  md:pl-20">
          <img src={Team} className='rounded-xl'/>
        </div>
       
       
      </div>
    </div>
  </section>
  );
};

export default TransformingComponent;