import React from 'react'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import Grades from '../components/Grades'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import Why from '../components/Why'

const index = () => {
  return (
    <main>
      <div className='hidden lg:block'>
        <Hero />
        <Grades />
        <Why />
        <Blog />
        <Newsletter />
        <Footer />
      </div>
      <p className='text-sm text-center h-screen flex items-center justify-center lg:hidden'>
        Please switch to desktop.
      </p>
    </main>
  )
}

export default index
