import { useState } from 'react'
import Burger from './burger/Burger'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className='py-4 sticky top-0 bg-white z-50 hidden lg:block'>
      <section
        className={
          (open ? 'active ' : 'notActive ') +
          'h-screen w-full bg-white lg:p-24 z-30 absolute transition-all duration-1000 ease-linear'
        }
      >
        <div className='grid grid-cols-4 gap-6'>
          <aside className='divide-y flex flex-col divide-after transition-all duration-700 ease-linear delay-100'>
            <h2 className='font-bold text-black text-mid mb-3 transition-all duration-700 ease-linear delay-100'>
              NCS
            </h2>
            <ul className='flex flex-col'>
              <li className='mt-3 mb-2'>
                <Link href='/'>
                  <a className='text-sm text-sec'>Welcome to NCS</a>
                </Link>
              </li>
              <li className='my-2'>
                <Link href='/'>
                  <a className='text-sm text-sec'>School calendar</a>
                </Link>
              </li>
              <li className='my-2'>
                <Link href='/'>
                  <a className='text-sm text-sec'>Alumni Association</a>
                </Link>
              </li>
              <li className='my-2'>
                <Link href='/'>
                  <a className='text-sm text-sec'>School accreditations</a>
                </Link>
              </li>
              <li className='my-2'>
                <Link href='/'>
                  <a className='text-sm text-sec'>
                    Quality assurance department
                  </a>
                </Link>
              </li>
              <li className='my-2'>
                <Link href='/'>
                  <a className='text-sm text-sec'>Contacts</a>
                </Link>
              </li>
            </ul>
          </aside>
          <aside className='divide-y flex flex-col divide-after transition-all duration-700 ease-linear delay-150'>
            <h2 className='font-bold text-black text-mid mb-3'>Academics</h2>
            <ul className='flex flex-col'>
              <li className='mt-3 mb-2'>
                <Link href='/'>
                  <a className='text-sm text-sec'>What makes us unique</a>
                </Link>
              </li>
              <li className='my-2'>
                <Link href='/'>
                  <a className='text-sm text-sec'>
                    Early years foundation stage
                  </a>
                </Link>
              </li>
              <li className='my-2'>
                <Link href='/'>
                  <a className='text-sm text-sec'>Primary School</a>
                </Link>
              </li>
              <li className='my-2'>
                <Link href='/'>
                  <a className='text-sm text-sec'>Secondary School</a>
                </Link>
              </li>
              <li className='my-2'>
                <Link href='/'>
                  <a className='text-sm text-sec'> Sixth form</a>
                </Link>
              </li>
              <li className='my-2'>
                <Link href='/'>
                  <a className='text-sm text-sec'> British curriculum</a>
                </Link>
              </li>
              <li className='my-2'>
                <Link href='/'>
                  <a className='text-sm text-sec'> Afterschool curriculum</a>
                </Link>
              </li>
            </ul>
          </aside>
          <aside className='divide-y flex flex-col divide-after transition-all duration-700 ease-linear delay-200'>
            <h2 className='font-bold text-black text-mid mb-3'>Our team</h2>
            <ul className='flex flex-col'>
              <li className='mt-3 mb-2'>
                <Link href='/'>
                  <a className='text-sm text-sec'>All</a>
                </Link>
              </li>
              <li className='my-2'>
                <Link href='/'>
                  <a className='text-sm text-sec'>Administration</a>
                </Link>
              </li>
              <li className='my-2'>
                <Link href='/'>
                  <a className='text-sm text-sec'>Primary</a>
                </Link>
              </li>
              <li className='my-2'>
                <Link href='/'>
                  <a className='text-sm text-sec'>Secondary</a>
                </Link>
              </li>
              <li className='my-2'>
                <Link href='/'>
                  <a className='text-sm text-sec'> Kindergraten</a>
                </Link>
              </li>
              <li className='my-2'>
                <Link href='/'>
                  <a className='text-sm text-sec'> Afterschool</a>
                </Link>
              </li>
            </ul>
          </aside>
          <aside className='divide-y flex flex-col divide-after transition-all duration-700 ease-linear delay-300'>
            <h2 className='font-bold text-black text-mid mb-3'>Admissions</h2>
            <ul className='flex flex-col'>
              <li className='mt-3 mb-2'>
                <Link href='/'>
                  <a className='text-sm text-sec'>How to apply </a>
                </Link>
              </li>
              <li className='my-2'>
                <Link href='/'>
                  <a className='text-sm text-sec'>Tuition fees </a>
                </Link>
              </li>
              <li className='my-2'>
                <Link href='/'>
                  <a className='text-sm text-sec'>Admission policy </a>
                </Link>
              </li>
              <li className='my-2'>
                <Link href='/'>
                  <a className='text-sm text-sec'> Apply now</a>
                </Link>
              </li>
            </ul>
          </aside>
          <aside className='divide-y flex flex-col divide-after transition-all duration-700 ease-linear delay-500'>
            <h2 className='font-bold text-black text-mid mb-3'>Work at NCS</h2>
            <ul className='flex flex-col'>
              <li className='mt-3 mb-2'>
                <Link href='/'>
                  <a className='text-sm text-sec'>Work with us </a>
                </Link>
              </li>
              <li className='my-2'>
                <Link href='/'>
                  <a className='text-sm text-sec'> Latest opportunities</a>
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </section>
      <section className='flex flex-col justify-between items-center overflow-hidden bg-side fixed top-0 left-0 h-full w-14 z-50'>
        <div className='flex items-center justify-center overflow-hidden'>
          <Burger open={open} setOpen={setOpen} className='overflow-hidden' />
        </div>
        <div className='flex items-center justify-between flex-col-reverse h-2/5 pb-16 w-full'>
          <div className='px-4 flex flex-col items-center hover:text-hov text-sec transform -rotate-90 '>
            <a
              href='https://www.linkedin.com/company/walking-voice-limited'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center text-sm'
            >
              <FaInstagram className=' text-sm mx-2 text-hov' /> Instagram
            </a>
          </div>
          <div className='px-4 flex flex-col items-center hover:text-hov text-sec transform -rotate-90 '>
            <a
              href='https://www.linkedin.com/company/walking-voice-limited'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center text-sm'
            >
              <FaFacebookF className=' text-sm mx-2 text-hov' /> Facebook
            </a>
          </div>
          <div className='px-4 flex flex-col items-center hover:text-hov text-sec transform -rotate-90 '>
            <a
              href='https://www.linkedin.com/company/walking-voice-limited'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center text-sm'
            >
              <FaYoutube className=' text-sm mx-2 text-hov' /> Youtube
            </a>
          </div>
        </div>
      </section>
      <nav className='flex justify-between items-center lg:px-24 lg-py-6 sticky z-30'>
        <section className=''>
          <Image
            src='https://res.cloudinary.com/walking-voice-limited/image/upload/c_scale,q_auto,w_60/v1620396501/new%20capital%20school/logo3_kd6jsx.webp'
            alt='New Capital School Logo'
            width={60}
            height={56}
            className='object-cover'
          />
        </section>
        <section className='flex items-center justify-between w-3/5'>
          <ul className='flex flex-col mt-4 md:flex-row justify-between w-5/7 md:items-center md:mt-0 md:pt-0 md:ml-auto h-2/3 md:h-full w-3/5'>
            <li>
              <Link href='/'>
                <a className='text-sm text-sec transition-all border-b border-solid border-transparent hover:pb-1 duration-150 ease-in-out hover:border-pri font-light'>
                  Work with us
                </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a className='text-sm text-sec transition-all border-b border-solid border-transparent hover:pb-1 duration-150 ease-in-out hover:border-pri font-light'>
                  Academics
                </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a className='text-sm text-sec transition-all border-b border-solid border-transparent hover:pb-1 duration-150 ease-in-out hover:border-pri font-light'>
                  Campuses
                </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a className='text-sm text-sec transition-all border-b border-solid border-transparent hover:pb-1 duration-150 ease-in-out hover:border-pri font-light'>
                  Admissions
                </a>
              </Link>
            </li>
          </ul>
          <aside className='ml-8'>
            <Link href='tel:+2348145743166'>
              <a className='text-base text-sec transition-all duration-150 ease-in-out font-normal'>
                +234 814 574 3166
              </a>
            </Link>
          </aside>
        </section>
        <section>
          <Link href='/'>
            <a className='group relative py-2 px-8 text-tiny lg:text-sm text-white bg-pri focus:outline-none border-pri border font-medium transition-all duration-500 ease-in-out md:text-base h-full'>
              Apply now
            </a>
          </Link>
        </section>
      </nav>
    </header>
  )
}

export default Nav
