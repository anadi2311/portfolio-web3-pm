import React from "react";
import SkillBar from "./SkillBar"; // Import the SkillBar component

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen  bg-gradient-to-b from-gray-800 to-gray-700 text-white"
    >
      <div className="max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8 mt-10 md:mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>

        <p className="text-xl">
          Born and raised in a small but ancient town of Ujjain, India, I completed my graduation and moved to Vancouver, British Columbia, with just one goal in mind - finding a solution for farmer's loan crisis in India.
          Very soon I realized the relevance of cutting-edge technology like Blockchains to create the solution. As a result, I completed my specialization in Blockchains 
          and created the thesis on&nbsp;
          <a href="https://open.library.ubc.ca/soa/cIRcle/collections/ubctheses/24/items/1.0394745" className="border-b-2">
            Supply Chain Finance through the Blockchain Lens
          </a>
          &nbsp; where I created an intricate network of smart contracts that could faciliate normal business operations - creating invoices and purchase orders and use them to securitize debt in secondary markets using ERC20 tokens.
        </p>

        <br />

        <p className="text-xl">
          Eager to learn more about art and science of Product Management, I interned at MolecularYou and worked as a contractor (PM) to UBC AWS and MCG. 
          Soon after, I joined as a Product Manager at CovalentHQ where I worked on both - growing usage and revenue from
          exisitng SKU of Product: best-in-class on-chain APIs and creating a new Product - Class C endpoints. Using Class C endpoints,
           we decentralized API creation to community and anyone could create a Blockchain API within 5 minutes.
        </p>

        <br />

        <p className="text-xl">
          I am a self-taught programmer and data engineer. Even though product managers don't need to be excellent programmers,
          I learn to satisfy intellectual hunger and write about it in blogs so I can direct new non-technical PMs to a guided journey through tech.
          You can learn more about it in the Blogs I write here.
        </p>

        <br />

        <p className="text-xl ">
          Following are some technologies I have worked with:
        </p>

        {/* Add the SkillBar component here */}
        <div className="text-xl ">
          <SkillBar />
        </div>
      </div>
    </div>
  );
};

export default About;
