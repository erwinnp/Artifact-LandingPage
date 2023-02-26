import styles from '../style'
import EthereumLogo from '../assets/Ethereum.svg'

const NftCard = ({ img, name, amount }) => {
  return (
    <div
      className={`${styles.flexCenter} items-center flex-col bg-[#F2F2F2] rounded-md`}
    >
      <div className='w-full md:w-[400px] h-[240px] sm:h-[320px]'>
        <img
          src={img}
          alt={name}
          className='w-full h-full object-cover rounded-t-md'
        />
      </div>
      <div
        className={`w-full ${styles.flexCenter} items-center flex-col py-[32px] px-[24px] gap-8`}
      >
        <div className={`w-full ${styles.flexBetween} items-center`}>
          <h1 className='font-main font-bold text-[24px]'>{name}</h1>
          <div className={`${styles.flexCenter} items-center`}>
            <img src={EthereumLogo} alt='EtherumLogo' />
            <h1 className='font-main font-bold text-[24px]'>{amount}</h1>
          </div>
        </div>
        <button className='btn-outline'>Start Collecting</button>
      </div>
    </div>
  )
}

export default NftCard
