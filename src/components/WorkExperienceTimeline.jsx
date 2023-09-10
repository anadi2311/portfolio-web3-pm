import React from 'react';
import Timeline from './Timeline'; 

const WorkExperienceTimeline = ({ showAll, toggleShowAll }) => {
  const workExperienceEvents = [
    {
      date: '2021 April - Present',
      title: 'Product Manager, Covalent HQ',
      description: `Covalent HQ is an extremely reputable brand in blockchain infrastructure space. Led product vision and strategy, launching Increment, a tool allowing developers and analysts to build interactive dashboards and custom APIs for 100+ blockchains using SQL in under 10 minutes. Managed execution with a lean team, delivered phase 1 in 6 months, decoded complex blockchain data, and set pricing strategies, turning a zero revenue stream into $5M ARR within a year. Collaborated on SEO, resulting in a 60% increase in sign-ups, 30% higher activation rate, and boosted retention from 15% to 20%, supported by live Looker dashboards for company-wide insights.`,
      link: 'https://www.covalenthq.com/',
    },
    {
      date: 'Sept 2020 – April 2021',
      title: 'Product Engineer (Contract) UBC-AWS Cloud Innovatin Center',
      description: `Led experimentation and prototyping, crafting a secure DApp prototype for COVID-19 vaccine delivery, enabling real-time tracking and thwarting forgery. This effort secured an incubation grant from the Quebec Government for MCG. Managed Agile software development of a Blockchain component, overseeing the project from start to finish, and establishing Ethereum/Amazon QLDB backend. Additionally, hosted a private Ethereum network on AWS in collaboration with UBC Cloud.`,
      link: 'https://cic.ubc.ca/project/vaccine-distribution-supply-chain-prototype/',
    },
    {
      date: 'Mar 2020 – Sept 2020',
      title: 'Product Management MITACS Intern (SCRUM MASTER) MolecularYou',
      description: `MolecularYou specializes in the analysis of biomarker data from blood samples, offering valuable health insights. They initiated the MyPDx wallet experiment, enabling patients to share biomarker data with researchers in exchange for potential monetary rewards.In my role, I successfully implemented Agile project management techniques to introduce a feature for decentralized consent, allowing users to securely share their biomarker data using the Hyperledger Indy + Aries architecture. Additionally, I played a key role in standardizing consent schemas according to ISO 29184 and ISO 27560 through collaborative efforts with the Linux Foundation Trust Over IP. These contributions ensured the secure and ethical handling of biomarker data within the MolecularYou ecosystem, enhancing research possibilities while safeguarding user privacy.`,
      link: 'https://www.molecularyou.com/',
    }
    ,
    {
      date: ' June 2019 - March 2020',
      title: 'Software Engineer',
      description: `In response to the growing importance of digitization and environmental concerns, the optimization of port calls has become a key focus. This research delves into the specific context of bulk trades in Vancouver, Canada, where the increasing number of ships at anchor has prompted an examination of governance and trade logistics conditions. The paper also explores the absence of initiatives to limit anchorage and draws insights from the innovative practices implemented in Newcastle, Australia, to reduce anchorage.Working alongside Professor Trevor Heaver, I collaborated on the analysis of anchorage and call data for the Port of Vancouver. Our efforts aimed to identify strategies that could mitigate anchorage and enhance the efficiency of port calls. Importantly, the research underscores that the primary challenges in achieving port call optimization lie in the organizational and behavioral aspects of maritime logistics, rather than in the technological aspects of digitization.`,
      link: 'https://www.frontiersin.org/articles/10.3389/ffutr.2021.709762/full',
    },
    {
      date: 'March 2017 - Dec 2017',
      title: 'Project Assistant, (Kumbh Mela Experiment), Indian Institute of Science, Bangalore ',
      description: `Kumbh Mela is the largest peaceful gathering on earth where 75 - 100 million Hindu Devotees visit one of the four pilgrame site for religious offerings and prayers. As a project planner and data analyst with the KME team, my role was to develop software for assessing the risk index of stampedes during peaceful mass gatherings. I conducted exploratory data analysis using Python, SQL, and Excel to create an activity profile of crowd behavior, focusing on crowd travel patterns. Additionally, I utilized image processing in MATLAB to calculate real-time crowd density.Furthermore, I took on a leadership role by supervising a team of 8 interns during a data collection drive for the 118km long Panchkroshi Yatra in 2017. This drive involved collecting pedestrian GPS data, contributing to our understanding of crowd dynamics and enhancing the safety assessment for such mass gatherings.`,
      link : 'https://research-software-directory.org/projects/the-kumbh-mela-experiment'
    },
    {
      date: 'Jan 1, 2019 - Aug31 2019',
      title: 'Teaching assitant, C445 Internation Maritime Transport, UBC',
      description: `Assisted Professor Anming Zhang in grading and teaching the students the concepts of international martime trade and logistics.`,
      link: 'https://mybcom.sauder.ubc.ca/courses-money-enrolment/courses/comm-445'
    },
    // Add more work experience events as needed
  ];
  
  
  return (
    <div>
      <Timeline events={workExperienceEvents} showAll={showAll} toggleShowAll={toggleShowAll} />
    </div>
  );
};


export default WorkExperienceTimeline;
