import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle } from '@fortawesome/free-regular-svg-icons'

const TickIcon = () => {
  return (
    <div>
      <FontAwesomeIcon className='tick' icon={faCheckCircle} />
    </div>
  )
}

export default TickIcon
