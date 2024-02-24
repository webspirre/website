import Browse from '@/componet/browse_designs/Browse'
import Navbar from '@/componet/nav/Navbar1'
import React from 'react'


function page() {
  return (
    <div>
      <Navbar />
      <div className='mt-20'>
        <Browse />
      </div>
    </div>
  );
}

export default page
