import React from 'react';
import { ImNewTab } from 'react-icons/im';

const Timeline = ({ events, showAll, toggleShowAll }) => {
  return (
    <div>
      <div className={`border-l-2 border-r-2 rounded-md border-gray-300 relative min-h-[400px]  overflow-y-auto ${showAll ? 'max-h-full' : 'max-h-[800px]'} max-w-[600px]`} style={{ minWidth: '500px' }}>
        {events.map((event, index) => (
          <div
            key={index}
            className={`mb-6 pb-6 last:mb-0 last:pb-0 ${
              index === events.length - 1 ? '' : 'border-b-2 border-gray-300'
            } 
            ${index === 0  ? 'border-t-2 border-gray-300' : ''}
            ${index === events.length -1  ? 'border-b-2 border-gray-300' : ''}
            bg-black text-white p-4 rounded-md`
          }
          >
            <div className="flex items-center mb-4">
              <div className="bg-gray-800 w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                {index + 1}
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-bold underline">{event.title}</h2>
                <p className="text-white">{event.date}</p>
              </div>
            </div>
            <p className="whitespace-pre-wrap">{event.description}</p>
            {event.link && (
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex items-center text-white hover:text-gray-400 transition duration-300 ease-in-out mt-2"
              >
                <ImNewTab className="mr-1" />
                View More
              </a>
            )}
          </div>
        ))}
      </div>
      {showAll ? (
        <div className="flex justify-center mt-4">
          <button
            onClick={toggleShowAll}
            className="bg-gradient-to-r from-black to-gray-500 hover:after:bg-gradient-to-r hover:from-black hover:to-black hover:after:to-black hover:after:from-black bg-cover transition-all duration-100 font-semibold py-2 px-4 rounded-full"
          >
            Collapse Timeline
          </button>
        </div>
      ) : (
        <div className="flex justify-center mt-4">
          <button
            onClick={toggleShowAll}
            className="bg-gradient-to-r from-black to-gray-500 hover:after:bg-gradient-to-r hover:from-black hover:to-black hover:after:to-black hover:after:from-black bg-cover transition-all duration-100 font-semibold py-2 px-4 rounded-full"
          >
            Expand All
          </button>
        </div>
      )}
    </div>
  );
};

export default Timeline;
