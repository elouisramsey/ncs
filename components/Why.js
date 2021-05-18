import Image from 'next/image'

const Why = () => {
  return (
    <section className='h-half relative why'>
      <section className='grid grid-cols-4 grid-rows-3 pl-28 h-full'>
        <section className='border-l border-solid border-gradeBorder col-span-1 row-span-3 h-full' />
        <section className='border-l border-solid border-gradeBorder col-span-1 row-span-3 h-full' />
        <section className='border-l border-solid border-gradeBorder col-span-1 row-span-3 h-full' />
        <section className='border-l border-r border-solid border-gradeBorder col-span-1 row-span-3 h-full' />
        <section className='absolute grid grid-cols-4 py-28'>
          <section className='col-span-4 '>
            <h3 className='text-black text-fifty py-12'>
              British Curriculum in all our campuses.
            </h3>
          </section>
          <section className='flex flex-col'>
            <section className='py-5'>
              <img
                src='/world.svg'
                alt='World Map'
                style={{ width: '3rem' }}
                className='object-cover text-black'
              />
            </section>

            <p className='text-base text-black mb-6 col-span-1 w-4/5'>
              Education in English: Cambridge International Programme and
              qualified native English speaking teachers.
            </p>
          </section>
          <section className='flex flex-col'>
            <section className='py-5'>
              <img
                src='/graduation.svg'
                alt='Graduation Cap'
                style={{ width: '3rem' }}
                className='object-cover'
              />
            </section>

            <p className='text-base text-black mb-6 col-span-1 w-4/5'>
              A full cycle of education: Early years, Primary, Secondary School
              in our campuses.
            </p>
          </section>
          <section className='flex flex-col'>
            <section className='py-5'>
              <img
                src='/list.svg'
                alt='Notebook'
                style={{ width: '3rem' }}
                className='object-cover'
              />
            </section>

            <p className='text-base text-black mb-6 col-span-1 w-4/5'>
              А wide choice of afterschool clubs: Art, Music, Theatre, Dance,
              Football, Gymnastics, Athletics.
            </p>
          </section>
          <section className='flex flex-col'>
            <section className='py-5'>
              <img
                src='/notepad.svg'
                alt='Book'
                style={{ width: '3rem' }}
                className='object-cover'
              />
            </section>

            <p className='text-base text-black mb-6 col-span-1 w-4/5'>
              Each classroom is&nbsp;supplied with modern equipment
              to&nbsp;enhance the&nbsp;learning experience.
            </p>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Why
