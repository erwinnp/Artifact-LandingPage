import styles from '../style'
import NFT1 from '../assets/nft1.jpg'
import NFT2 from '../assets/nft2.jpg'
import SocialProof from '../components/SocialProof'

const Hero = () => {
  const data = [
    { amount: '15.7K', title: 'Running Action' },
    { amount: '31.7K', title: 'Collectible Artwork' },
    { amount: '16.9K', title: 'Peoples Join' },
  ]

  return (
    <section className='w-full'>
      <div
        className={`${styles.section} max-w-[600px] py-3 sm:py-8 px-4 sm:px-0`}
      >
        <div className={`${styles.flexCenter} flex-col items-center gap-10`}>
          <div
            className={`${styles.flexCenter} flex-col items-center text-center`}
          >
            <h1 className='text-main font-bold text-3xl sm:text-[64px] sm:leading-[68px]'>
              Art in the Blockchain Age
            </h1>
            <p className='text-roboto font-light text-sm sm:text-[20px] py-4 sm:py-10'>
              Join the Digital Art Revolution with Our Curated Collection of NFT
              Art
            </p>
            <button className='btn-dark'>Join The NFTs Revolution</button>
          </div>
          <div className='flex flex-col items-center sm:flex-row gap-4'>
            <div className='sm:flex-[36%]'>
              <img
                src={NFT1}
                alt='nft1'
                className='rounded-md object-contain'
              />
            </div>
            <div className='flex-[64%]'>
              <img
                src={NFT2}
                alt='nft2'
                className='rounded-md object-contain'
              />
            </div>
          </div>
          <div
            className={`w-full ${styles.flexCenter} items-center flex-col gap-4 sm:gap-12 sm:flex-row py-4`}
          >
            <div className={`w-full sm:w-1/2 ${styles.flexBetween} gap-4`}>
              {data.map((content, index) => (
                <SocialProof
                  key={index}
                  amount={content.amount}
                  title={content.title}
                />
              ))}
            </div>
            <div className='w-full sm:w-3/4 h-[4px] rounded-md bg-[#292D32]' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
