import Link from 'next/link'

const Blog = () => {
  return (
    <section className='p-24 grid grid-cols-2 gap-5'>
      <aside className='flex covid p-16 relative bg-arrow'>
        <section className='blog_item blog_item_covid' />
        <section className='flex flex-col relative z-40 py-12'>
          <p className='text-white text-xs mb-6'>May 15, 2021</p>
          <h2 className='text-white text-4xl'>Information about COVID-19</h2>
          <div className='border border-white border-solid my-6 w-1/5' />
          <p className='text-white text-lg'>
            For now, all NCS campuses corresponds to the academic calendar and
            full-time work. All measures recommended by state and regulatory
            authorities are strictly observed.
          </p>
          <section className='my-8'>
            <Link href='/'>
              <a className='group relative py-2 px-8 text-tiny lg:text-sm text-white bg-transparent focus:outline-none border-white border font-medium transition-all duration-500 ease-in-out md:text-base h-full'>
                Learn more
              </a>
            </Link>
          </section>
        </section>
      </aside>
      <aside className='flex admission p-16 relative bg-arrow'>
        <section className='blog_item blog_item_admin' />
        <section className='flex flex-col relative z-40 py-12'>
          <p className='text-white text-xs mb-6'>May 18, 2021</p>
          <h2 className='text-white text-4xl'>Information about Admission</h2>
          <div className='border border-white border-solid my-6 w-1/5' />
          <p className='text-white text-lg'>
            We have a small number of places for students in some year groups.
            If you would like to consider NCS for your child, please do contact
            the school to arrange placement
          </p>
          <section className='my-8'>
            <Link href='/'>
              <a className='group relative py-2 px-8 text-tiny lg:text-sm text-white bg-transparent focus:outline-none border-white border font-medium transition-all duration-500 ease-in-out md:text-base h-full'>
                Learn more
              </a>
            </Link>
          </section>
        </section>
      </aside>
    </section>
  )
}

export default Blog
