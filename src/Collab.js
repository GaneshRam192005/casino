import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 import Slidebar from './Slidebar';
import Header from './Header';



const Collab = () => {
  const [menu,setMenu]=useState(false)
  return (
    <div className='bg-[#2497FF] pb-12 scroll-smooth font-semibold'>
    
   <Header name="COLLABRATION" />
     
      <section className='w-[99%] mx-auto'>
        <div className='box bg-white border-b-2 border-[#2497FF]'>
          <div className='w-[92%] p-5'>
            <h1 className='text-[#2163AC] md:text-2xl text-base'>
              LIST OF COLLABORATIONS
            </h1>
          </div>
        </div>

       
        <div className='bg-white pt-11 pb-8'>
          <div className='overflow-x-auto'>
            <table className='w-[95%] mx-auto  table-auto shadow-2xl text-center rounded-sm'>
              <thead className='bg-gray-100'>
                <tr>
                  <th className='px-4 py-2'>#</th>
                  <th className='px-4 py-2'>Account</th>
                  <th className='px-4 py-2'>Level</th>
                  <th className='px-4 py-2'>Balance</th>
                  <th className='px-4 py-2'>Status</th>
                  <th className='px-4 py-2'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b '>
                  <td className='px-4 py-5'>123</td>
                  <td className='text-[#2163AC] px-4 py-2'>7010571601</td>
                  <td className='px-4 py-2'>CTV</td>
                  <td className='px-4 py-2'>300</td>
                  <td className='px-4 py-2'>
                    <button className='bg-[#28A745] px-2 md:px-4 md:py-1 text-white rounded-md font-semibold'>
                      Online
                    </button>
                  </td>
                  <td className='px-4 py-5'>
                    <div className='flex justify-center space-x-2'>
                      <button className='bg-[#007BFF] text-xs px-3 md:px-6 rounded-md md:text-base font-semibold text-white'>
                        PROFILE
                      </button>
                      <button className='bg-[#DC3545] text-xs px-3 md:px-6 md:py-1 rounded-md md:text-base font-semibold text-white'>
                        LOCK UP
                      </button>
                    </div>
                  </td>
                </tr><tr className='border-b'>
                  <td className='px-4 py-5'>123</td>
                  <td className='text-[#2163AC] px-4 py-2'>7010571601</td>
                  <td className='px-4 py-2'>CTV</td>
                  <td className='px-4 py-2'>300</td>
                  <td className='px-4 py-2'>
                    <button className='bg-[#28A745] px-2 md:px-4 md:py-1 text-white rounded-md font-semibold'>
                      Online
                    </button>
                  </td>
                  <td className='px-4 py-5'>
                    <div className='flex justify-center space-x-2'>
                      <button className='bg-[#007BFF] text-xs px-3 md:px-6 rounded-md md:text-base font-semibold text-white'>
                        PROFILE
                      </button>
                      <button className='bg-[#DC3545] text-xs px-3 md:px-6 md:py-1 rounded-md md:text-base font-semibold text-white'>
                        LOCK UP
                      </button>
                    </div>
                  </td>
                </tr><tr className='border-b'>
                  <td className='px-4 py-5'>123</td>
                  <td className='text-[#2163AC] px-4 py-2'>7010571601</td>
                  <td className='px-4 py-2'>CTV</td>
                  <td className='px-4 py-2'>300</td>
                  <td className='px-4 py-2'>
                    <button className='bg-[#28A745] px-2 md:px-4 md:py-1 text-white rounded-md font-semibold'>
                      Online
                    </button>
                  </td>
                  <td className='px-4 py-5'>
                    <div className='flex justify-center space-x-2'>
                      <button className='bg-[#007BFF] text-xs px-3 md:px-6 rounded-md md:text-base font-semibold text-white'>
                        PROFILE
                      </button>
                      <button className='bg-[#DC3545] text-xs px-3 md:px-6 md:py-1 rounded-md md:text-base font-semibold text-white'>
                        LOCK UP
                      </button>
                    </div>
                  </td>
                </tr><tr className='border-b'>
                  <td className='px-4 py-5'>123</td>
                  <td className='text-[#2163AC] px-4 py-2'>7010571601</td>
                  <td className='px-4 py-2'>CTV</td>
                  <td className='px-4 py-2'>300</td>
                  <td className='px-4 py-2'>
                    <button className='bg-[#28A745] px-2 md:px-4 md:py-1 text-white rounded-md font-semibold'>
                      Online
                    </button>
                  </td>
                  <td className='px-4 py-2'>
                    <div className='flex justify-center space-x-2'>
                      <button className='bg-[#007BFF] text-xs px-3 md:px-6 rounded-md md:text-base font-semibold text-white'>
                        PROFILE
                      </button>
                      <button className='bg-[#DC3545] text-xs px-3 md:px-6 md:py-1 rounded-md md:text-base font-semibold text-white'>
                        LOCK UP
                      </button>
                    </div>
                  </td>
                </tr><tr className='border-b'>
                  <td className='px-4 py-5'>123</td>
                  <td className='text-[#2163AC] px-4 py-2'>7010571601</td>
                  <td className='px-4 py-2'>CTV</td>
                  <td className='px-4 py-2'>300</td>
                  <td className='px-4 py-2'>
                    <button className='bg-[#28A745] px-2 md:px-4 md:py-1 text-white rounded-md font-semibold'>
                      Online
                    </button>
                  </td>
                  <td className='px-4 py-2'>
                    <div className='flex justify-center space-x-2'>
                      <button className='bg-[#007BFF] text-xs px-3 md:px-6 rounded-md md:text-base font-semibold text-white'>
                        PROFILE
                      </button>
                      <button className='bg-[#DC3545] text-xs px-3 md:px-6 md:py-1 rounded-md md:text-base font-semibold text-white'>
                        LOCK UP
                      </button>
                    </div>
                  </td>
                </tr><tr className='border-b'>
                  <td className='px-4 py-5'>123</td>
                  <td className='text-[#2163AC] px-4 py-2'>7010571601</td>
                  <td className='px-4 py-2'>CTV</td>
                  <td className='px-4 py-2'>300</td>
                  <td className='px-4 py-2'>
                    <button className='bg-[#28A745] px-2 md:px-4 md:py-1 text-white rounded-md font-semibold'>
                      Online
                    </button>
                  </td>
                  <td className='px-4 py-2'>
                    <div className='flex justify-center space-x-2'>
                      <button className='bg-[#007BFF] text-xs px-3 md:px-6 rounded-md md:text-base font-semibold text-white'>
                        PROFILE
                      </button>
                      <button className='bg-[#DC3545] text-xs px-3 md:px-6 md:py-1 rounded-md md:text-base font-semibold text-white'>
                        LOCK UP
                      </button>
                    </div>
                  </td>
                </tr><tr className='border-b'>
                  <td className='px-4 py-5'>123</td>
                  <td className='text-[#2163AC] px-4 py-2'>7010571601</td>
                  <td className='px-4 py-2'>CTV</td>
                  <td className='px-4 py-2'>300</td>
                  <td className='px-4 py-2'>
                    <button className='bg-[#28A745] px-2 md:px-4 md:py-1 text-white rounded-md font-semibold'>
                      Online
                    </button>
                  </td>
                  <td className='px-4 py-2'>
                    <div className='flex justify-center space-x-2'>
                      <button className='bg-[#007BFF] text-xs px-3 md:px-6 rounded-md md:text-base font-semibold text-white'>
                        PROFILE
                      </button>
                      <button className='bg-[#DC3545] text-xs px-3 md:px-6 md:py-1 rounded-md md:text-base font-semibold text-white'>
                        LOCK UP
                      </button>
                    </div>
                  </td>
                </tr><tr className='border-b'>
                  <td className='px-4 py-5'>123</td>
                  <td className='text-[#2163AC] px-4 py-2'>7010571601</td>
                  <td className='px-4 py-2'>CTV</td>
                  <td className='px-4 py-2'>300</td>
                  <td className='px-4 py-2'>
                    <button className='bg-[#28A745] px-2 md:px-4 md:py-1 text-white rounded-md font-semibold'>
                      Online
                    </button>
                  </td>
                  <td className='px-4 py-2'>
                    <div className='flex justify-center space-x-2'>
                      <button className='bg-[#007BFF] text-xs px-3 md:px-6 rounded-md md:text-base font-semibold text-white'>
                        PROFILE
                      </button>
                      <button className='bg-[#DC3545] text-xs px-3 md:px-6 md:py-1 rounded-md md:text-base font-semibold text-white'>
                        LOCK UP
                      </button>
                    </div>
                  </td>
                </tr><tr className='border-b'>
                  <td className='px-4 py-5'>123</td>
                  <td className='text-[#2163AC] px-4 py-2'>7010571601</td>
                  <td className='px-4 py-2'>CTV</td>
                  <td className='px-4 py-2'>300</td>
                  <td className='px-4 py-2'>
                    <button className='bg-[#28A745] px-2 md:px-4 md:py-1 text-white rounded-md font-semibold'>
                      Online
                    </button>
                  </td>
                  <td className='px-4 py-2'>
                    <div className='flex justify-center space-x-2'>
                      <button className='bg-[#007BFF] text-xs px-3 md:px-6 rounded-md md:text-base font-semibold text-white'>
                        PROFILE
                      </button>
                      <button className='bg-[#DC3545] text-xs px-3 md:px-6 md:py-1 rounded-md md:text-base font-semibold text-white'>
                        LOCK UP
                      </button>
                    </div>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>

          <section className='flex justify-center space-x-12 pt-16'>
            <Link to="/app" className='flex items-center space-x-3'>
              <img className='md:w-[20px]' src="image/Frame (1).png" alt="Previous" />
              <span className='text-xl font-semibold text-[#2497FF]'>Previous</span>
            </Link>
            <Link to="/browse" className='flex items-center space-x-3'>
              <span className='text-xl font-semibold text-[#2497FF]'>Next</span>
              <img className='md:w-[20px]'  src="image/Frame (2).png" alt="Next" />
            </Link>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Collab;
