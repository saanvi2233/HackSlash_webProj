import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { STATUSES, fetch } from '../store/homeSlice'; // Assuming 'fetch' is exported

const HomePage = () => {
  //when fetching data;
  // const dispatch = useDispatch();
  // const status = useSelector((state) => state.product.status);

  // useEffect(() => {
  //   // Dispatch the 'fetch' action to initiate data loading when the component mounts.
  //   dispatch(fetch());
  // }, [dispatch]);

  // if (status === STATUSES.LOADING) {
  //   return <h2 className='text-white'>Loading....</h2>;
  // }

  // if (status === STATUSES.ERROR) {
  //   return <h2 className='text-white'>Something went wrong!</h2>;
  // }

  return (
    <div >
      <div className="ml-16 mt-20 w-1/2 flex flex-col">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Experience The Fusion
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          of Technology and
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Culture
        </h1>

        <h3 className='text-white mt-5'>Join us for an unforgettable celebration of innovation and creativity</h3>

        <div>
          <button className='text-gray-400 border border-gray-500 hover:border-blue-500 px-3 mt-5 w-19 ml-60 mr-60 h-10 ml-2 rounded transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white'>
            Learn More
          </button>
        </div>
      </div>

      <div className='ml-50'></div>
    </div>
  );
};

export default HomePage;
