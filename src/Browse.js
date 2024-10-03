import React from 'react';
import Slidebar from './Slidebar';
import { Link } from 'react-router-dom';
import Header from './Header';

const Browse = () => {
  return (
    <div className='bg-[#2497FF] pb-12 scroll-smooth font-semibold'>
    <Header name="BROWSE RECHARGE" />
    

      
      <section className='w-[99%] mx-auto'>
        <div className='box bg-white border-b-2 border-[#00000091]'>
          <div className='w-[92%] p-5'>
            <h1 className='text-[#2163AC] md:text-2xl text-base'>BROWSE RECHARGE</h1>
          </div>
        </div>

        <div className='bg-white pt-11 pb-12 rounded-4xl'>
          <div className='overflow-x-auto'>
            <table className='w-[90%] mx-auto table-auto shadow-2xl text-center rounded-sm'>
              <thead className='bg-[#007BFF] text-white'>
                <tr>
                  <th className='px-4 py-2'>#</th>
                  <th className='px-4 py-2'>Account</th>
                  <th className='px-4 py-2'>Type</th>
                  <th className='px-4 py-2'>Amount</th>
                  <th className='px-4 py-2'>Code</th>
                  <th className='px-4 py-2'>UTR</th>
                  <th className='px-4 py-2'>Method</th>
                  <th className='px-4 py-2'>Time</th>
                  <th className='px-4 py-2'>Status</th>
                  <th className='px-4 py-2'>Accept Agreement</th>
                </tr>
              </thead>
              <tbody>
              <tr className='border-b'>
                  <td className='px-4 py-2'>123</td>
                  <td className='text-[#2163AC] px-4 py-2'>7010571601</td>
                  <td className='text-[#A50064] px-4 py-2'>UPI</td>
                  <td className='px-4 py-2'>45000</td>
                  <td className='px-4 py-2'>
                    <button className='bg-[#28A745] px-4 py-1 text-white rounded-md font-semibold'>
                      Online
                    </button>
                  </td>
                  <td className='px-4 py-2'>324342343243</td>
                  <td className='px-4 py-2'>UPI</td>
                  <td className='text-[15px]'>
                  2024-08-09 <br /> 2:20:55 AM
                </td>
                  <td className='px-4 py-2'>
                    <button className='bg-[#FFC107] text-white px-4 py-1 rounded-lg'>
                      Waiting
                    </button>
                  </td>
                  <td className='px-4 py-2 space-x-2  justify-center '>
                    <button className='bg-[#007BFF] p-1 rounded-lg'>
                      <img className='w-[32px]' src="image/Frame (3).png" alt="" />
                    </button>
                    <button className='bg-[#DC3545] p-1 rounded-md'>
                      <img className='w-[28px]' src="image/Vector (8).png" alt="" />
                    </button>
                  </td>
                </tr>  
                <tr className='border-b'>
                  <td className='px-4 py-2'>123</td>
                  <td className='text-[#2163AC] px-4 py-2'>7010571601</td>
                  <td className='text-[#A50064] px-4 py-2'>UPI</td>
                  <td className='px-4 py-2'>45000</td>
                  <td className='px-4 py-2'>
                    <button className='bg-[#28A745] px-4 py-1 text-white rounded-md font-semibold'>
                      Online
                    </button>
                  </td>
                  <td className='px-4 py-2'>324342343243</td>
                  <td className='px-4 py-2'>UPI</td>
                  <td className='text-[15px]'>
                  2024-08-09 <br /> 2:20:55 AM
                </td>
                  <td className='px-4 py-2'>
                    <button className='bg-[#FFC107] text-white px-4 py-1 rounded-lg'>
                      Waiting
                    </button>
                  </td>
                  <td className='px-4 py-2 space-x-2  justify-center '>
                    <button className='bg-[#007BFF] p-1 rounded-lg'>
                      <img className='w-[32px]' src="image/Frame (3).png" alt="" />
                    </button>
                    <button className='bg-[#DC3545] p-1 rounded-md'>
                      <img className='w-[28px]' src="image/Vector (8).png" alt="" />
                    </button>
                  </td>
                </tr>  
                <tr className='border-b'>
                  <td className='px-4 py-2'>123</td>
                  <td className='text-[#2163AC] px-4 py-2'>7010571601</td>
                  <td className='text-[#A50064] px-4 py-2'>UPI</td>
                  <td className='px-4 py-2'>45000</td>
                  <td className='px-4 py-2'>
                    <button className='bg-[#28A745] px-4 py-1 text-white rounded-md font-semibold'>
                      Online
                    </button>
                  </td>
                  <td className='px-4 py-2'>324342343243</td>
                  <td className='px-4 py-2'>UPI</td>
                  <td className='text-[15px]'>
                  2024-08-09 <br /> 2:20:55 AM
                </td>
                  <td className='px-4 py-2'>
                    <button className='bg-[#FFC107] text-white px-4 py-1 rounded-lg'>
                      Waiting
                    </button>
                  </td>
                  <td className='px-4 py-2 space-x-2  justify-center '>
                    <button className='bg-[#007BFF] p-1 rounded-lg'>
                      <img className='w-[32px]' src="image/Frame (3).png" alt="" />
                    </button>
                    <button className='bg-[#DC3545] p-1 rounded-md'>
                      <img className='w-[28px]' src="image/Vector (8).png" alt="" />
                    </button>
                  </td>
                </tr>  
                <tr className='border-b'>
                  <td className='px-4 py-2'>123</td>
                  <td className='text-[#2163AC] px-4 py-2'>7010571601</td>
                  <td className='text-[#A50064] px-4 py-2'>UPI</td>
                  <td className='px-4 py-2'>45000</td>
                  <td className='px-4 py-2'>
                    <button className='bg-[#28A745] px-4 py-1 text-white rounded-md font-semibold'>
                      Online
                    </button>
                  </td>
                  <td className='px-4 py-2'>324342343243</td>
                  <td className='px-4 py-2'>UPI</td>
                  <td className='text-[15px]'>
                  2024-08-09 <br /> 2:20:55 AM
                </td>
                  <td className='px-4 py-2'>
                    <button className='bg-[#FFC107] text-white px-4 py-1 rounded-lg'>
                      Waiting
                    </button>
                  </td>
                  <td className='px-4 py-2 space-x-2  justify-center '>
                    <button className='bg-[#007BFF] p-1 rounded-lg'>
                      <img className='w-[32px]' src="image/Frame (3).png" alt="" />
                    </button>
                    <button className='bg-[#DC3545] p-1 rounded-md'>
                      <img className='w-[28px]' src="image/Vector (8).png" alt="" />
                    </button>
                  </td>
                </tr>  
                
              </tbody>
            </table>
          </div>


          <section className='flex justify-center space-x-12 pt-16'>
            <Link to="/collab" className='flex items-center space-x-3'>
              <img className='md:w-[20px]' src="image/Frame (1).png" alt="Previous" />
              <span className='text-xl font-semibold text-[#2497FF]'>Previous</span>
            </Link>
            <Link to="/recharge" className='flex items-center space-x-3'>
              <span className='text-xl font-semibold text-[#2497FF]'>Next</span>
              <img className='md:w-[20px]'  src="image/Frame (2).png" alt="Next" />
            </Link>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Browse;
