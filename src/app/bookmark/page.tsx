import Navbar from '@/componet/nav/Navbar2'
import React from 'react'
import Bookmarks from './Bookmarks'
import CardList from './Card'

function page() {
  return (
    <div className='mb-20'>
          <Navbar />
          <Bookmarks />
          <CardList />
    </div>
  )
}

export default page
