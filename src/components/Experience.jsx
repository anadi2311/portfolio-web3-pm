import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import EducationTimeline from "./EducationTimeline";
import WorkExperienceTimeline from "./WorkExperienceTimeline";

const Experience = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div name="experience"  className="mx-auto h-screen w-full bg-gradient-to-b from-gray-700 via-gray-650 to-gray-600 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="flex items-center justify-between mt-10 md:mt-20">
          <h1 className="text-4xl font-bold border-b-4 border-gray-500">
            Experience
          </h1>
          <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
            <TabList className="flex flex-row">
              <Tab className={`bg-black cursor-pointer text-white py-3 px-6 rounded-l-md  ${activeTab === 0 ? 'bg-opacity-100 focus:outline-none border border-white' : 'bg-opacity-20 hover:bg-gradient-to-r cursor-pointer bg-gradient-to-r from-gray-400 to-black hover:after:bg-gradient-to-r hover:from-black hover:to-black hover:after:to-black hover:after:from-black bg-cover transition-all duration-100 '}`}>
                Work
              </Tab>
              <Tab className={`bg-black cursor-pointer text-white py-3 px-6 rounded-r-md  ${activeTab === 1 ? 'bg-opacity-100 focus:outline-none border border-white' : 'bg-opacity-20 hover:bg-gradient-to-r cursor-pointer bg-gradient-to-r from-black to-gray-500 hover:after:bg-gradient-to-r hover:from-black hover:to-black hover:after:to-black hover:after:from-black bg-cover transition-all duration-100 '}`}>
                Education
              </Tab>
            </TabList>
          </Tabs>
        </div>
        <div className="pt-4">
          <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
            <TabPanel>
              <div className="flex flex-col items-center">
                <div className="border-gray-300 relative mx-auto">
                  <WorkExperienceTimeline
                    showAll={showAll}
                    toggleShowAll={toggleShowAll}
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col items-center">
                <div className="border-gray-300 relative mx-auto">
                  <EducationTimeline
                    showAll={showAll}
                    toggleShowAll={toggleShowAll}
                  />
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Experience;
