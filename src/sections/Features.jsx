import SectionTitle from '../components/SectionTitle'
import styles from '../style'
import NFT4 from '../assets/nft4.jpg'
import NFT5 from '../assets/nft5.jpg'
import NFT6 from '../assets/nft6.jpg'
import NftCard from '../components/NftCard'

const Features = () => {
  const data = [
    { image: NFT4, title: 'Articbrain', amount: '5.23 ETH' },
    { image: NFT5, title: 'Articstrak', amount: '6.12 ETH' },
    { image: NFT6, title: 'Artichair', amount: '4.95 ETH' },
  ]

  return (
    <section className='w-full'>
      <div
        className={`${styles.section} max-w-[600px] py-12 md:pt-[200px] px-4 sm:px-0`}
      >
        <div className='text-center md:text-left'>
          <SectionTitle title='Discover Rare Finds.' />
        </div>
        <div
          className={`${styles.flexBetween} sm:mt-16 mt-8 flex-col md:flex-row gap-6`}
        >
          {data.map((content, index) => (
            <NftCard
              key={index}
              img={content.image}
              name={content.title}
              amount={content.amount}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
