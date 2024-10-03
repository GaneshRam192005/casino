import React from 'react'
import Slidebar from './Slidebar';

const Header = props => {
  return (
    <div>
      <header className='bg-[#091C49] px-4 py-4'>
        <nav>
        <Slidebar/>

    
        </nav>
      </header>

    
    <section className='py-4'>
      <section className='w-11/12 mx-auto'>
        <h1 className='text-white md:text-xl font-semibold'>{props.name}</h1>
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

      
      
        

    </div>
  )
}

export default Header
