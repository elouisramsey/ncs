import React from 'react'
import { BsEnvelope } from 'react-icons/bs'

const Newsletter = () => {
  return (
    <section className='bg-after px-24 py-16'>
      <div className='flex items-center justify-between bg-white p-16'>
        <form action='' className='w-full flex items-center justify-between'>
          <div className='subscribe_area flex items-center w-4/5'>
            <label htmlFor='email'>
              <BsEnvelope className='text-2xl mr-4' />
            </label>
            <input
              type='text'
              required
              name='email'
              placeholder='Subscribe to our newsletter'
              className='border-b border-solid border-arrow h-8 w-full text-sm text-arrow focus:outline-none focus:ring-transparent pb-2'
            />
          </div>
          <section className=''>
            <button
              type='submit'
              className='group relative py-2 px-8 text-tiny lg:text-sm text-white bg-pri focus:outline-none border-white border font-medium transition-all duration-500 ease-in-out md:text-base h-full'
            >
              Subscribe
            </button>
          </section>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
