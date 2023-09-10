import React from 'react';
import HeroImage from '../assets/heroImage.jpeg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";


const Home = () => {
  return (
    <div name='home' className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">

	<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full h-full px-4 md:flex-row">

        <div className='flex flex-col w-full md:w-1/2 px-4 py-12'>

          <h2 className='text-10xl sm:text-7xl font-bold text-white'>
            Product Manager
          </h2>

          <p className='text-white py-4 max-w-xl font-medium text-2xl'>
            
          with a deep understanding of cryptocurrency protocols, blockchains, AI and web developement.
          I have a proven track record of creating simple products to solve hard problems that can be quickly monetizable.

          </p>

          <div>
            <Link
              to="experience"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r cursor-pointer bg-gradient-to-r from-black to-gray-500 hover:after:bg-gradient-to-r hover:from-black hover:to-black hover:after:to-black hover:after:from-black bg-cover transition-all duration-100 font-semibold py-2 px-4 rounded-full"
            >
              Jump to Experience
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>


        <div className='w-full md:w-1/2 mt-4 md:mt-0'>
          <img src={HeroImage} alt='profile_picture' className='rounded-3xl mx-auto w-2/3 md:w-full' />
        </div>
      </div>
    </div>
  );
};

export default Home;


