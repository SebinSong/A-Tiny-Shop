import React, { memo } from 'react';

import './Fallback.scss';

function PageFallback () {
  return (
    <main className="page fallback">Loading the page...</main>
  )  
};

export default memo(PageFallback);