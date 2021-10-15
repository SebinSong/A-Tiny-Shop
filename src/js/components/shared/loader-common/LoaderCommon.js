import React from 'react'

import { toggleClass } from '@view-utils'

import './LoaderCommon.scss'

function LoaderCommon ({
  classes = '',
  isSmall = false
}) {
  const classStr = [
    'loader-common',
    classes,
    isSmall && 'is-small'
  ].filter(Boolean).join(' ')
  
  return (
    <div className={classStr}>
      <span className="loader-common__track">
        <span className="loader-common__obj"></span>
      </span>
    </div>
  )
}

export default LoaderCommon;