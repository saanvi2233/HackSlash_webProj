import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [serachQuery,setSearchQuery]=useState('');
  const [data, setData] = useState([]); // Replace with actual data
  const [error, setError] = useState(null);



  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
   // Whenever the user interacts with the search input, you can clear any existing error to show a clean slate:
   setError(null); // Clear any existing error
  };
  
    return (
      <div>
        <div className="flex-row">
          <nav className="mx-auto flex flex-col items-center py-8 px-10 sm:flex-row sm:justify-between">
  
            {/* Navigation Links */}
            <ul className="flex ml-0 items-center mb-4 sm:mb-0">
              <li className=" sm:mb-0 sm:ml-8 text-white transition duration-300 hover:text-blue-500">
                <Link to="/about">About Us</Link>
              </li>
              <li className=" sm:mb-0 sm:ml-8 text-white transition duration-300 hover:text-blue-500">
                <Link to="/events">Events</Link>
              </li>
              <li className=" sm:mb-0 sm:ml-8 text-white transition duration-300 hover:text-blue-500">
                <Link to="/sponsors">Sponsors</Link>
              </li>
            </ul>
  <div>
  <input
  type="text"
  placeholder="Search..."
  onChange={handleSearchInput}
  />

  </div>
{/* Logo Images */}
<div >          <a href="https://www.nitp.ac.in/">
            <img className="w-20 ml-0 mr-80 sm:ml-60 mb-4 sm:mb-0" src="/images/fig3.3.png" alt="" />
          

            <img className="w-20 ml-20 mr-80 sm:ml-60 mb-4 sm:mb-0" src="/images/fig4.4.png" alt="" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
