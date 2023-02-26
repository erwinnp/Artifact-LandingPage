import styles from '../style'
import NFT3 from '../assets/nft3.jpg'
import SectionTitle from '../components/SectionTitle'

const About = () => {
  return (
    <section className='w-full'>
      <div
        className={`${styles.section} max-w-[600px] py-8 md:py-[200px] px-4 sm:px-0`}
      >
        <div
          className={`${styles.flexBetween} items-start flex-col md:flex-row gap-10 md:gap-[124px]`}
        >
          <div
            className={`md:w-1/2 ${styles.flexCenter} flex-col text-center md:text-left`}
          >
            <SectionTitle title='Welcome to Artifact!' />
            <p className='font-roboto font-light text-sm sm:text-[20px] sm:text-base py-4 md:pt-[40px] md:pb-[56px]'>
              The premier destination for NFT art enthusiasts and collectors.
              Our curated collection of digital art features one-of-a-kind
              pieces from top artists around the world. Each artwork is
              authenticated on the blockchain, ensuring its rarity and
              exclusivity. Discover a new world of art that is both innovative
              and deeply personal, and join us on the forefront of the digital
              art revolution. With Artifact, you can own a piece of history and
              experience the future of art.
            </p>
            <div>
              <button className='sm:w-1/3 btn-dark'>Invest in NFTs</button>
            </div>
          </div>
          <div className='md:w-1/2'>
            <img src={NFT3} alt='nft3' className='object-contain rounded-md' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
