import styles from '../style'
import Slack from '../assets/slack.svg'
import Discord from '../assets/discord.svg'
import Telegram from '../assets/telegram.svg'

const Newsletter = () => {
  return (
    <section className='w-full'>
      <div
        className={`${styles.section} max-w-[600px] py-3 sm:py-8 px-4 sm:px-0`}
      >
        <div
          className={`${styles.flexCenter} items-center justify-between flex-col md:flex-row bg-[#DFDFDF] py-8 px-5 md:px-28 gap-4 rounded-md`}
        >
          <h1 className='font-main font-bold text-2xl md:text-[48px] text-center md:text-left md:w-2/3 leading-snug'>
            Join Artifact Community and Get Hot NFTs.
          </h1>
          <div className={`${styles.flexCenter} items-center flex-col gap-4`}>
            <button className='btn-dark'>Join Now</button>
            <div className={`${styles.flexCenter} items-center gap-4`}>
              <img src={Slack} alt='slack' />
              <img src={Discord} alt='discord' />
              <img src={Telegram} alt='telegram' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
