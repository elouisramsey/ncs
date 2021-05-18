import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Sliders from './Slider'

const Hero = () => {
  return (
    <section>
      <section className='items-center flex justify-center py-4 bg-pri hover:bg-hov transition duration-150 ease-in-out '>
        <Link href='/'>
          <a className='text-white text-mid flex items-center justify-center text-center w-full h-full'>
            {' '}
            <span className='mr-3 flex items-center'>
              <Image
                src='/virus.svg'
                alt='COVID-19 Virus'
                width={28}
                height={28}
                className='object-cover'
              />
            </span>{' '}
            Information about COVID-19
          </a>
        </Link>
      </section>

      <Sliders />
    </section>
  )
}

export default Hero
