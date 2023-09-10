import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from "react-scroll";

export const Navbar = () => {

	const[nav,setNav] = useState(false);

	const links = [
		{ id: 1, link: 'home'},
		{ id: 2, link: 'about'},
		{ id: 3, link: 'experience'},
		{ id: 4, link: 'projects'},
		{ id: 5, link: 'contact'},
	]

  return (
    <div className=' flex justify-between place-items-center w-full h-20 text-white bg-black fixed'>
	<div>
		<h1 className='text-5xl font-signature ml-2' > Anadi</h1>
	</div>
	<ul className='hidden md:flex'>
		{links.map(({id,link}) => 
			<li key = {id} className=' px-4 cursor-pointer text-2xl capitalize font-medium text-white hover:scale-110  hover:rounded-full hover:ring-2 hover:ring-white'>
				<Link to={link} smooth duration={500}>
				{link}
				</Link>
			</li>
			)}
	</ul>

	<div onClick = {() => setNav(!nav)} className='cursor-pointer pr-4 z-20 text-gray-500 md:hidden'>
	 { nav ? <FaTimes size = {35} /> : <FaBars size = {35} />}
	</div>

	{ nav &&
		<ul className='flex flex-col items-center justify-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500'>
		{links.map(({ id, link }) => (
		<li key={id} className='px-4 cursor-pointer capitalize text-4xl  py-6'>
		<Link
			onClick={() => setNav(!nav)}
			to={link}
			smooth
			duration={500}
		>
			{link}
		</Link>
		</li>
		))}
		</ul>
	}
    </div>
  )
}

export default Navbar

