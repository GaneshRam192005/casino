import React from 'react';
import { Link } from 'react-router-dom';
import Slidebar from './Slidebar';
import Header from './Header';


const Recharge = () => {
  return (
    <div className='bg-[#2497FF] pb-12 scroll-smooth font-semibold'>
    
    
    <Header name="RECHARGE"/>

   

   
    <section className='w-[99%] mx-auto'>
      <div className='box bg-white border-b-2 border-[#2497FF]'>
        <div className='w-[92%] p-5'>
          <h1 className='text-[#2163AC] md:text-2xl text-base'>
            Reacharge list
          </h1>
        </div>
      </div>

        <div className='bg-white pt-11 pb-12 rounded-4xl'>
          <div className='overflow-x-auto'>
          <table className='w-[90%] mx-auto  table-auto shadow-2xl text-center rounded-sm'>
            <thead className='bg-[#007BFF] text-white'>
              <tr>
                <th>#</th>
                <th>Account</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Code</th>
                <th>UTR</th>
                <th>Method</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            
            <tr className='border-b'>
  <td>123</td>
  <td className='text-[#2163AC]'>7010571601</td>
  <td className='text-[#A50064]'>UPI</td>
  <td>45000</td>
  <td>23424342</td>
  <td>324342343243</td>
  <td>UPI</td>
  <td className='text-[15px] md:px-1 px-9  '>
    2024-08-09 <br /> 2:20:55 AM
  </td>
  <td>
    <button className='bg-[#28A745] text-white px-4 py-1 rounded-lg'>
      Waiting
    </button>
  </td>
</tr><tr className='border-b'>
  <td>123</td>
  <td className='text-[#2163AC]'>7010571601</td>
  <td className='text-[#A50064]'>UPI</td>
  <td>45000</td>
  <td>23424342</td>
  <td>324342343243</td>
  <td>UPI</td>
  <td className='text-[15px] md:px-1 px-9  '>
    2024-08-09 <br /> 2:20:55 AM
  </td>
  <td>
    <button className='bg-[#28A745] text-white px-4 py-1 rounded-lg'>
      Waiting
    </button>
  </td>
</tr><tr className='border-b'>
  <td>123</td>
  <td className='text-[#2163AC]'>7010571601</td>
  <td className='text-[#A50064]'>UPI</td>
  <td>45000</td>
  <td>23424342</td>
  <td>324342343243</td>
  <td>UPI</td>
  <td className='text-[15px] md:px-1 px-9  '>
    2024-08-09 <br /> 2:20:55 AM
  </td>
  <td>
    <button className='bg-[#28A745] text-white px-4 py-1 rounded-lg'>
      Waiting
    </button>
  </td>
</tr><tr className='border-b'>
  <td>123</td>
  <td className='text-[#2163AC]'>7010571601</td>
  <td className='text-[#A50064]'>UPI</td>
  <td>45000</td>
  <td>23424342</td>
  <td>324342343243</td>
  <td>UPI</td>
  <td className='text-[15px] md:px-1 px-9  '>
    2024-08-09 <br /> 2:20:55 AM
  </td>
  <td>
    <button className='bg-[#28A745] text-white px-4 py-1 rounded-lg'>
      Waiting
    </button>
  </td>
</tr>
<tr className='border-b'>
  <td>123</td>
  <td className='text-[#2163AC]'>7010571601</td>
  <td className='text-[#A50064]'>UPI</td>
  <td>45000</td>
  <td>23424342</td>
  <td>324342343243</td>
  <td>UPI</td>
  <td className='text-[15px] md:px-1 px-9  '>
    2024-08-09 <br /> 2:20:55 AM
  </td>
  <td>
    <button className='bg-[#28A745] text-white px-4 py-1 rounded-lg'>
      Waiting
    </button>
  </td>
</tr>
<tr className='border-b'>
  <td>123</td>
  <td className='text-[#2163AC]'>7010571601</td>
  <td className='text-[#A50064]'>UPI</td>
  <td>45000</td>
  <td>23424342</td>
  <td>324342343243</td>
  <td>UPI</td>
  <td className='text-[15px] md:px-1 px-9  '>
    2024-08-09 <br /> 2:20:55 AM
  </td>
  <td>
    <button className='bg-[#28A745] text-white px-4 py-1 rounded-lg'>
      Waiting
    </button>
  </td>
</tr><tr className='border-b'>
  <td>123</td>
  <td className='text-[#2163AC]'>7010571601</td>
  <td className='text-[#A50064]'>UPI</td>
  <td>45000</td>
  <td>23424342</td>
  <td>324342343243</td>
  <td>UPI</td>
  <td className='text-[15px] md:px-1 px-9  '>
    2024-08-09 <br /> 2:20:55 AM
  </td>
  <td>
    <button className='bg-[#28A745] text-white px-4 py-1 rounded-lg'>
      Waiting
    </button>
  </td>
</tr>

</table>

          </div>
         

          <section className='flex justify-center space-x-28 pt-16'>
            <Link to="/collab" className='flex items-center space-x-3'>
              <img className='md:w-[20px]' src="image/Frame (1).png" alt="Previous" />
              <span className='text-xl font-semibold text-[#2497FF]'>Previous</span>
            </Link>
            <Link to="/level" className='flex items-center space-x-3'>
              <span className='text-xl font-semibold text-[#2497FF]'>Next</span>
              <img className='md:w-[20px]' src="image/Frame (2).png" alt="Next" />
            </Link>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Recharge;
