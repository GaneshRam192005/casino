
import { Link } from 'react-router-dom';
import './App.css';

function Members() {
  return (
    <div className='bg-[#2497FF] pb-12 scroll-smooth font-semibold'>
    
    <header className='bg-[#091C49] px-4 py-4'>
      <Link to="/collab">
      <nav className='cursor-pointer'>
        <img className='w-[10%] md:w-[2%]' src="image/Vector (5).png" alt="" />
      </nav></Link>
      
    </header>

    
    <section className='py-4'>
      <section className='w-11/12 mx-auto'>
        <h1 className='text-white md:text-xl font-semibold'>MEMBER LIST</h1>
        <div className='flex justify-center items-center py-8'>
          <div className='flex'>
            <input
              className='rounded-sm outline-none placeholder:text-left w-full md:w-auto md:px-72 md:py-2 px-4 py-2'
              placeholder='Enter the recharge details you are looking for'
              type="text"
            />
            <button className='bg-[#007BFF] text-white md:px-4 px-2 py-2 rounded-sm text-xs md:text-base font-semibold'>
              Search
            </button>
          </div>
        </div>
      </section>
    </section>

      
      <section className='w-[99%] mx-auto'>
        <div className='box bg-white border-b-2 border-[#00000091]'>
          <div className='w-[92%] p-5'>
            <h1 className='text-[#2163AC] md:text-2xl text-base'>MEMBER LIST</h1>
          </div>
        </div>

    <div className='bg-white pt-11 pb-9 rounded-4xl  '>
      <div className='overflow-x-auto'>
      <table className='w-[90%] tabledesign mx-auto table-auto shadow-2xl rounded-md ' >
        <thead >
        <tr className='text-xs p-1 md:text-medium abc   ' key="">
        <th>UserId</th>
        <th>Account</th>
        <th>Level</th>
        <th>Balance</th>
        <th>ActualDeposite</th>
        <th>ExtraGivenOnDeposite</th>
        <th>ExtraGivenOnDeposite</th>
        <th>ReferralIncomeOnDeposite</th>
        <th>FirstTimeDepositeMoney</th>
        <th>ReferralIncome</th>
        <th>TotalReferral</th>
       </tr>

        </thead>
       
        <tr className='text-center'>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs text- text-cyan-400 font-semibold'>123</td>
            <td className='text-xs font-semibold'>USER</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
        
        </tr>
        <tr className='text-center'>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs text- text-cyan-400 font-semibold'>123</td>
            <td className='text-xs font-semibold'>USER</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
        
        </tr>
        <tr className='text-center '>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold text- text-cyan-400 '>123</td>
            <td className='text-xs font-semibold'>USER</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
        
        </tr>
        <tr className='text-center '>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs text- text-cyan-400 font-semibold'>123</td>
            <td className='text-xs font-semibold'>USER</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
        
        </tr>
        <tr className=' text-center tb'>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs text- text-cyan-400 font-semibold'>123</td>
            <td className='text-xs font-semibold'>USER</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
        
        </tr>
        <tr className='text-center'>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs text- text-cyan-400 font-semibold'>123</td>
            <td className='text-xs font-semibold'>USER</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
        
        </tr>
        <tr className='text-center'>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs text- text-cyan-400 font-semibold'>123</td>
            <td className='text-xs font-semibold'>USER</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
        
        </tr>
        <tr className='text-center'>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs text- text-cyan-400 font-semibold'>123</td>
            <td className='text-xs font-semibold'>USER</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
        
        </tr>
        <tr className='text-center b  '>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs text- text-cyan-400 font-semibold'>123</td>
            <td className='text-xs font-semibold'>USER</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
            <td className='text-xs font-semibold'>123</td>
        
        </tr>
      
      
     </table>
      </div>
      
    </div>
     
    </section>
    
    
    
  </div>
  );
}

export default Members;
