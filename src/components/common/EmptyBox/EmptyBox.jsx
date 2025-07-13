import React from 'react'
import PropTypes from 'prop-types'

import IllustrationEmptyState from 'assets/illustrations/illustration-empty-state.png'
import './EmptyBox.css'

function EmptyBox({ customClasses = [] }) {
  return (
    <section className={`empty-card ${customClasses.join(' ')}`}>
      <img className='illustration bounce' src={IllustrationEmptyState} alt='No search illustration' />
      <p className='intro'>🎬 Lost in the reels?</p>
      <p className='offer'>
        Search your next favorite movie <br /> and fall in love with cinema again.
      </p>
      <p className='cta'>Start typing above 👆 and let the magic begin ✨</p>
    </section>
  )
}

EmptyBox.propTypes = {
  customClasses: PropTypes.arrayOf(PropTypes.string)
}

export default EmptyBox
