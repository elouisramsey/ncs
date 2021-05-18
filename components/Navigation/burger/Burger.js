import { bool, func } from 'prop-types'

const Burger = ({ open, setOpen }) => {
  return (
    <button
      open={open}
      onClick={() => setOpen(!open)}
      className='absolute top-6 left-3 flex flex-col justify-between w-full h-5 border-0 z-30 p-0 focus:outline-none burgs overflow-hidden'
    >
      <div
        className={(open ? 'rotate-45' : 'rotate-0') + ' transform bg-sec'}
      />
      <div
        className={
          (open ? 'translate-x-200' : 'translate-x-0') + ' transform bg-sec'
        }
      />
      <div
        className={(open ? 'rotate-m45' : 'rotate-0') + ' transform bg-sec'}
      />
    </button>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
}

export default Burger
