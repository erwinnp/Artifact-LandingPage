import React from 'react'
import styles from '../style'

const SocialProof = ({ amount, title }) => {
  return (
    <div className={`${styles.flexCenter} flex-col text-center`}>
      <h1 className='text-main font-bold text-[28px] sm:text-[32px]'>
        {amount}
      </h1>
      <p className='text-roboto font-light text-base sm:text-[18px]'>{title}</p>
    </div>
  )
}

export default SocialProof
