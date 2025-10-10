import React from 'react';
import logo from '../../assets/logo.png'
import { Github } from 'lucide-react';
import { Link } from 'react-router';

const Navbar = () => {
    const links = <>
       <Link to='/'><li className='m-2  text-fuchsia-700'>Home</li></Link>
       
       <Link to='/AllApps'><li className='m-2'>App</li></Link>
       <Link to='/Install'><li className='m-2'>Installation</li></Link>
       
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm w-full">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
        </ul> 
    </div>
    <img src={logo} className='w-20 h-20' alt='' />
    <a className='text-fuchsia-600 front-extrabold'>HERO.IO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     
     {links}
        
       
    </ul>
  </div>
  <div className="navbar-end w-full">
    <button display='flex bg-green w-[145px] h-[43px] rounded-lg p-2'>
        <a className='text-blue-50'>Contribute</a>
     <Github className='w-6 h-6 text-fuchsia-700'></Github>
     
    </button>
  </div>
</div>
    );
};

export default Navbar;