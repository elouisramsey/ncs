import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Link from 'next/link'

const Sliders = () => {
  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    }
  })

  React.useEffect(() => {
    sliderRef.current.addEventListener('mouseover', () => {
      setPause(true)
    })
    sliderRef.current.addEventListener('mouseout', () => {
      setPause(false)
    })
  }, [sliderRef])

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 3000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <section className='h-full w-full bg-heroBg'>
      <div ref={sliderRef} className='w-full h-full keen-slider'>
        <section className='keen-slider__slide h-full w-full slider_item slider_future'>
          <aside className='flex flex-col py-36 px-28'>
            <h1 className='text-black text-6xl w-1/2'>
              Offering bright futures
            </h1>
            <p className='text-black text-xl font-light w-1/2  py-6'>
              NCS School graduates are studying in&nbsp;the world’s&nbsp;most
              prestigious universities.
            </p>
          </aside>
        </section>
        <section className='keen-slider__slide h-full w-full slider_item campuses'>
          <aside className='flex flex-col py-36 px-28'>
            <h1 className='text-black text-6xl w-1/2'>
              Expanding
              <br /> Opportunities
            </h1>
            <p className='text-black text-xl font-light py-6 w-1/2'>
              We have campuses across Abuja to meet your educational needs
            </p>
            <section>
              <Link href='/'>
                <a className='group relative py-2 px-8 text-tiny lg:text-sm text-pri bg-transparent focus:outline-none border-pri border font-medium transition duration-500 ease-in-out md:text-base h-full'>
                  Learn More
                </a>
              </Link>
            </section>
          </aside>
        </section>
        <section className='keen-slider__slide h-full w-full slider_item innovation'>
          <aside className='flex flex-col py-36 px-28'>
            <h1 className='text-black text-6xl w-1/2'>
              Educating future innovators
            </h1>
            <p className='text-black text-xl font-light w-1/2  py-6'>
              NCS inspires a love of learning in children, encouraging critical
              and creative thinking across all subjects.
            </p>
          </aside>
        </section>
      </div>
      <section className='grid grid-cols-4 w-full pb-6'>
        <section className='-mt-one'>
          <Link href='/'>
            <a className='hover:bg-btnHover h-14 inline-block group relative py-2 px-8 text-tiny lg:text-sm text-sec bg-btBg focus:outline-none border-btBg w-full border transition duration-500 ease-in-out md:text-base flex items-center justify-center'>
              Nursery
            </a>
          </Link>
        </section>
        <section className='mt-two'>
          <Link href='/'>
            <a className='hover:bg-btnHover h-14 inline-block group relative py-2 px-8 text-tiny lg:text-sm text-sec bg-btBg focus:outline-none border-btBg w-full border transition duration-500 ease-in-out md:text-base flex items-center justify-center'>
              Primary
            </a>
          </Link>
        </section>
        <section className='mt-three'>
          <Link href='/'>
            <a className='hover:bg-btnHover h-14 inline-block group relative py-2 px-8 text-tiny lg:text-sm text-sec bg-btBg focus:outline-none border-btBg w-full border transition duration-500 ease-in-out md:text-base flex items-center justify-center'>
              Secondary
            </a>
          </Link>
        </section>
        <section className='mt-four'>
          <Link href='/'>
            <a className='hover:bg-btnHover h-14 inline-block group relative py-2 px-8 text-tiny lg:text-sm text-sec bg-btBg focus:outline-none border-btBg w-full border transition duration-500 ease-in-out md:text-base flex items-center justify-center'>
              Pre-College
            </a>
          </Link>
        </section>
      </section>
      {/* <p className='text-center text-4xl text-black'>morafuckers!!!</p> */}
    </section>
  )
}

export default Sliders
