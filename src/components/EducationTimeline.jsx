// EducationTimeline.jsx
import React from 'react';
import Timeline from './Timeline'; 

const EducationTimeline = ({ showAll, toggleShowAll }) => {
  const educationEvents = [
    {
      date: 'Aug 2018 – Nov 2020',
      title: 'MSc BA, Transportation and Logistics, UBC, Vancouver, Canada',
      description: `I specialized in Supply Chain Management and Blockchain, with a focus on blockchain technology constituting 85.6% of my academic pursuits. My master's thesis, titled "Supply Chain Finance Through Blockchain Lens," involved the creation of smart contracts designed to facilitate Supply Chain Finance operations on the Ethereum blockchain.I was honored to be selected as the recipient of the Blockchain Graduate Pathway Scholarship, a distinguished award granted to me among 120 candidates. This scholarship reflects my commitment to and expertise in the field of blockchain technology within the realm of supply chain management.`,
      link : 'https://blockchain.ubc.ca/education-programs/blockchain-graduate-training-path'
    },
    {
      date: 'June 2012 - June 2016',
      title: 'BE, Mechanical Engineer, Ujjain Engineering College, Ujjain, India',
      description: 'During my undergraduate studies in Mechanical Engineering, I had the opportunity to delve into a wide range of subjects, from the intricacies of mechanical engineering, including engines, mechatronics, and robotics, to management studies such as project management and lean six sigma.My dedication to academic excellence was acknowledged through my exceptional performance, leading to the award of a scholarship from the Staff Benefit Fund of Indian Railways. Furthermore, I was honored to be granted the Central Sector Scholarship under the Central Sector Scholarship Scheme, reflecting my commitment to achieving excellence, which began during my senior school education. These scholarships underscore my passion for both engineering and academic achievement throughout my educational journey.',
      link : 'https://www.uecu.ac.in/'
    },
    {
      date: 'Oct 2016 - Mar 2017',
      title: 'Independent Research',
      description: 'I worked on sustainability in the supply chain using the triple bottom line approach and finding a relation between the position of an employee and its impact on workplace sustainabity.',
	    link : 'https://www.google.com/search?q=GS+institute+indore&oq=GS+institute+indore&aqs=chrome..69i57.4153j0j1&sourceid=chrome&ie=UTF-8'
    },
    {
      date: 'May 2021 - Dec 2021',
      title: 'Software Product Management',
      description: 'I learned how to: Master Agile software development practices, allowing me to stay at the forefront of modern software development methodologies.Confidently interact with clients and effectively manage a team of developers, fostering collaboration and achieving successful project outcomes.Practice and apply management techniques to industry-inspired scenarios, equipping me to tackle complex challenges in software product management',
      link : 'https://www.coursera.org/account/accomplishments/specialization/QN7GS83SAP3L'
    },
    {
      date: 'Oct 2019 - Feb 2020',
      title: 'Blockchain Specialization',
      description: 'In this specialization, I acquired a strong foundation in blockchain technology. The courses covered essential concepts like encryption, hashing, consensus, transactions, and private-public key pairs. I actively applied this knowledge by designing, developing, and testing smart contracts and decentralized applications on a private Ethereum blockchain. The discussions extended to advanced topics such as decentralized application architecture, best practices, emerging standards, and critical blockchain challenges like scalability and privacy. The program concluded with a holistic understanding of the blockchain landscape, including diverse decentralized application use cases and exploration of various blockchain platforms. This specialization equips me with valuable skills and insights for the ever-evolving world of blockchain technology.',
      link : 'https://www.coursera.org/account/accomplishments/specialization/certificate/VKHGNYBTN8U9'
    },
    {
      date: 'March 2017 - Dec 2017',
      title: 'MITx Micromasters Supply Chain Management',
      description: 'In this Micromasters, I completed 4 rigorous courses on supply chain design and analytics',
      link : 'https://www.edx.org/micromasters/mitx-supply-chain-management'
    },
  ];

  return (
	<div>
	  <Timeline events={educationEvents} showAll={showAll} toggleShowAll={toggleShowAll} />
	</div>
      );
    };

export default EducationTimeline;
