import styles from '../style'
import NFT7 from '../assets/nft7.jpg'
import NFT8 from '../assets/nft8.jpg'
import NFT9 from '../assets/nft9.jpg'
import NFT11 from '../assets/nft11.jpg'
import NFT12 from '../assets/nft12.jpg'
import SectionTitle from '../components/SectionTitle'

const Newest = () => {
  return (
    <section className='w-full'>
      <div
        className={`${styles.section} max-w-[600px] py-12 md:pt-[200px] px-4 sm:px-0`}
      >
        <div className='text-center md:text-left'>
          <SectionTitle title='Newest Artifact Collections.' />
        </div>
        <div
          className={`${styles.flexCenter} flex-col h-full sm:mt-16 mt-8 gap-6 sm:grid sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2`}
        >
          <div className='w-full h-[280px] col-span-2 md:h-full md:row-span-2 md:col-span-2'>
            <img
              src={NFT7}
              alt=''
              className='object-cover w-full h-full rounded-md'
            />
          </div>
          <div className='w-full h-[280px] md:h-full'>
            <img
              src={NFT8}
              alt=''
              className='object-cover w-full h-full rounded-md'
            />
          </div>
          <div className='w-full h-[280px] md:h-full'>
            <img
              src={NFT9}
              alt=''
              className='object-cover w-full h-full rounded-md'
            />
          </div>
          <div className='w-full h-[280px] md:h-full'>
            <img
              src={NFT11}
              alt=''
              className='object-cover w-full h-full rounded-md'
            />
          </div>
          <div className='w-full h-[280px] md:h-full'>
            <img
              src={NFT12}
              alt=''
              className='object-cover w-full h-full rounded-md'
            />
          </div>
        </div>
        <div className={`w-full ${styles.flexCenter} items-center mt-16`}>
          <button className={`btn-dark`}>Browse NFTs</button>
        </div>
      </div>
    </section>
  )
}

export default Newest
