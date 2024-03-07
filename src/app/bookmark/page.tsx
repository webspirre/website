import Navbar from '@/componet/nav/Navbar2'
import React from 'react'
import Bookmarks from './Bookmarks'
import CardList from './Card'
import { useSession, signOut } from "next-auth/react";


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
