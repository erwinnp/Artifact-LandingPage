import styles from '../style'

const Footer = () => {
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
    {
      title: 'Back to top',
      id: '#home',
    },
  ]

  const dataIndustry = [
    {
      title: 'Artist',
      id: '#about',
    },
    {
      title: 'Carrers',
      id: '#featured',
    },
    {
      title: 'Community',
      id: '#newest',
    },
  ]

  return (
    <footer className='w-full'>
      <div
        className={`${styles.section} max-w-[600px] py-3 sm:py-8 sm:mt-8 px-4 sm:px-0`}
      >
        <div className={`${styles.flexStart} flex-col gap-2`}>
          <h1 className='font-main font-bold text-2xl md:text-4xl'>
            Artifact.
          </h1>
          <div className='w-full h-[4px] rounded-[2px] bg-[#292D32]' />
          <p className='font-roboto font-light text-base md:text-2xl md:w-1/2'>
            A collection of surreal digital artwork that explores the mysteries
            of the subconscious mind.
          </p>
        </div>
        <div
          className={`${styles.flexStart} flex-col-reverse md:flex-row md:justify-between md:items-end mt-6 gap-8`}
        >
          <p className='font-roboto font-light text-sm md:text-base'>
            Created at 2023. All credits own by respective owner.
          </p>
          <div className={`${styles.flexStart} gap-8`}>
            <ul className={`${styles.flexStart} gap-2 flex-col`}>
              {dataMenu.map((menu, index) => (
                <li
                  key={index}
                  className='font-roboto font-light text-base md:text-xl cursor-pointer'
                >
                  {menu.title}
                </li>
              ))}
            </ul>
            <ul className={`${styles.flexStart} gap-2 flex-col`}>
              {dataIndustry.map((menu, index) => (
                <li
                  key={index}
                  className='font-roboto font-light text-base md:text-xl cursor-pointer'
                >
                  {menu.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
