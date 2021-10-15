import React, { memo } from 'react';

import Loader from '@components/shared/loader-common'

import './Fallback.scss';

function PageFallback () {
  return (
    <main className="page fallback">
      <div className="loading-ani-container">
        <Loader classes="loading-ani__ani" />

        <div className="loading-ani__text">Loading the page..</div>
      </div>
    </main>
  )  
};

export default memo(PageFallback);