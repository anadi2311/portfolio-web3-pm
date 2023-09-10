import React, { useState } from "react";
import { Link } from "react-router-dom";
import masterThesis from "../assets/projects/masters_thesis.png";
import mcgVuila from "../assets/projects/mcg_vuila.jpeg";
import portfolio from "../assets/projects/portfolio.png";
import worldOfTulips from "../assets/projects/world_of_tulips.png";
import blockchainApi from "../assets/projects/blockchain_api.png";
import increment from "../assets/projects/increment.png";






const Projects = () => {
  const [show404, setShow404] = useState(false);

  const handleCodeButtonClick = (codeLink) => {
    if (codeLink === "NA") {
      // If code link is 'NA', open the 404 page in a new tab
      window.open("/404", "_blank"); // Replace "/404" with the actual URL of your 404 page
    } else {
      // Open the code link in a new tab
      window.open(codeLink, "_blank");
    }
  };

  const portfolios = [
    {
      id: 1,
      src: masterThesis,
      link:'https://open.library.ubc.ca/soa/cIRcle/collections/ubctheses/24/items/1.0394745',
      code: 'https://github.com/anadi2311/Thesis-Supply-Chain-Finance-and-Blockchain',
      download: false,
    },
    {
      id: 2,
      src: mcgVuila,
      link:'https://cic.ubc.ca/project/vaccine-distribution-supply-chain-prototype/',
      code: 'https://github.com/anadi2311/VaccineDistributionMCG',
      download: false,
    },
    {
      id: 3,
      src: portfolio,
      link:'https://open.library.ubc.ca/soa/cIRcle/collections/ubctheses/24/items/1.0394745',
      code:'https://github.com/anadi2311/Thesis-Supply-Chain-Finance-and-Blockchain',
      download: true,
    },
    {
      id: 4,
      src: worldOfTulips,
      link:'/world_of_tulips.pdf',
      code: 'https://github.com/The-CodeBreakeR/world_of_tulips',
      download: false,
    },
    {
      id: 5,
      src: blockchainApi,
      link:'https://www.covalenthq.com/docs/api/#/overview',
      code: 'NA',
      download: true,
    },
    {
      id: 6,
      src: increment,
      link:'https://www.covalenthq.com/platform/increment/#/',
      code: 'NA',
      download: false,
    },
  ];

  
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-600 via-gray-550 to-gray-500 text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6 text-xl">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, code }) => (
            <div key={id} className="shadow-md shadow-white rounded-b-lg">
              <img
                src={src}
                alt=""
                className="w-full h-60 object-cover rounded-t-md duration-200 hover:scale-110 hover:rounded-md"
              />
              <div className="flex justify-center h-10">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 rounded-bl-lg hover:scale-105 hover:bg-gradient-to-r cursor-pointer bg-gradient-to-r from-gray-400 to-black hover:after:bg-gradient-to-r hover:from-black hover:to-black hover:after:to-black hover:after:from-black bg-cover transition-all duration-100 flex justify-center items-center"
                >
                  View More
                </a>
                <button
                  onClick={() => handleCodeButtonClick(code)}
                  className="w-1/2 rounded-br-lg hover:scale-105 hover:bg-gradient-to-r cursor-pointer bg-gradient-to-r from-gray-400 to-black hover:after:bg-gradient-to-r hover:from-black hover:to-black hover:after:to-black hover:after:from-black bg-cover transition-all duration-100 flex justify-center items-center"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;