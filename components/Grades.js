import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

const Grades = () => {
  return (
    <div className='pl-12 grid grid-cols-4'>
      <section className='px-16 steps__item border-r border-solid border-gradeBorder transition duration-500 ease-in-out '>
        <Link href='/'>
          <a className=' flex flex-col w-full py-8'>
            <h3 className='text-mid text-sec' style={{ height: '126px' }}>
              Early Years Foundation Stage
            </h3>
            <p className='text-lg text-sec my-6' style={{ height: '27px' }}>
              Britisih National Curriculum
            </p>
            <p className='text-pri font-bold text-fifty w-full my-5 flex items-start'>
              2-5{' '}
              <span className='text-sm text-pri font-medium border-b border-solid border-pri inline-block ml-2'>
                years old
              </span>
            </p>
            <BsArrowRight className='text-arrow arrow' />
          </a>
        </Link>
      </section>
      <section className='px-16 steps__item border-r border-solid border-gradeBorder transition duration-500 ease-in-out '>
        <Link href='/'>
          <a className=' flex flex-col w-full py-8'>
            <h3 className='text-mid text-sec' style={{ height: '126px' }}>
              Year 1 - 6
            </h3>
            <p className='text-lg text-sec my-6' style={{ height: '27px' }}>
              Britisih National Curriculum
            </p>
            <p className='text-pri font-bold text-fifty w-full my-5 flex items-start'>
              5-11{' '}
              <span className='text-sm text-pri font-medium border-b border-solid border-pri inline-block ml-2'>
                years old
              </span>
            </p>
            <BsArrowRight className='text-arrow arrow' />
          </a>
        </Link>
      </section>
      <section className='px-16 steps__item border-r border-solid border-gradeBorder transition duration-500 ease-in-out '>
        <Link href='/'>
          <a className=' flex flex-col w-full py-8'>
            <h3 className='text-mid text-sec' style={{ height: '126px' }}>
              Secondary Year 7 - Year 12
            </h3>
            <p className='text-lg text-sec my-6' style={{ height: '27px' }}>
              Britisih National Curriculum
            </p>
            <p className='text-pri font-bold text-fifty w-full my-5 flex items-start'>
              11-16{' '}
              <span className='text-sm text-pri font-medium border-b border-solid border-pri inline-block ml-2'>
                years old
              </span>
            </p>
            <BsArrowRight className='text-arrow arrow' />
          </a>
        </Link>
      </section>
      <section className='px-16 steps__item border-r border-solid border-gradeBorder transition duration-500 ease-in-out '>
        <Link href='/'>
          <a className=' flex flex-col w-full py-8'>
            <h3 className='text-mid text-sec' style={{ height: '126px' }}>
              College Prep
            </h3>
            <p className='text-lg text-sec my-6' style={{ height: '27px' }}>
              Cambridge AS & A Level
            </p>
            <p className='text-pri font-bold text-fifty w-full my-5 flex items-start'>
              16-18{' '}
              <span className='text-sm text-pri font-medium border-b border-solid border-pri inline-block ml-2'>
                years old
              </span>
            </p>
            <BsArrowRight className='text-arrow arrow' />
          </a>
        </Link>
      </section>
    </div>
  )
}

export default Grades
