import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-white px-24 py-5 flex items-center justify-between'>
      <p className='text-xs text-arrow'>
        © 2021 New Capital School. All rights reserved
      </p>
      <div className=''>
        <a
          className='text-xs text-arrow'
          href='https://walkingvoice.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Made with 💗 by Walking Voice
        </a>
      </div>
    </footer>
  )
}

export default Footer
