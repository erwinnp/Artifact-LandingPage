import styles from '../style'
import Logo from '../assets/arrow-up.svg'
import Menu from '../assets/menu.svg'
import Close from '../assets/logout.svg'
import { useState } from 'react'

const Navbar = () => {
  const dataMenu = [
    {
      title: 'About',
      id: '#about',
    },
    {
      title: 'Featured NFTs',
      id: '#featured',
    },
    {
      title: 'Newest NFTs',
      id: '#newest',
    },
  ]

  const [toggle, setToggle] = useState(false)

  const handleToggleMenu = () => {
    setToggle((prev) => !prev)
  }

  return (
    <header className='w-full'>
      <div
        className={`${styles.section} max-w-[600px] py-2 sm:py-8 px-4 sm:px-0`}
      >
        <nav className={`${styles.flexBetween} items-center`}>
          <div className={`${styles.flexCenter} items-center`}>
            <img src={Logo} alt='logo-icon' />
            <h1 className='font-main font-bold text-[#292D32] text-[18px] sm:text-[24px] tracking-wide'>
              Artifact.
            </h1>
          </div>
          <ul className={`hidden md:flex items-center gap-10`}>
            {dataMenu.map((menu, index) => (
              <li key={index}>{menu.title}</li>
            ))}
          </ul>
          <button className='btn-dark hidden md:flex'>Button</button>
          <div className='md:hidden'>
            <img
              onClick={handleToggleMenu}
              src={toggle ? Close : Menu}
              alt='icon-menu'
            />
            <div
              className={`${
                toggle ? 'flex' : 'hidden'
              } absolute top-16 sm:top-20 right-0 mx-4 my-2 flex-col gap-6 bg-[#DFDFDF] p-4 rounded-md`}
            >
              <ul className={`${styles.flexCenter} flex-col gap-4`}>
                {dataMenu.map((menu, index) => (
                  <li key={index} className='p-2 cursor-pointer'>
                    {menu.title}
                  </li>
                ))}
              </ul>
              <button className='btn-dark'>Start Collecting</button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
