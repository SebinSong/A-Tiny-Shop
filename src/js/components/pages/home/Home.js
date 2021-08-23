import React from 'react';

// child components
import Icon from '@components/global/Icon'

import "./Home.scss";

function Home (props) {
  return (
    <main className="page home">
      Hello world! I'm home. haha
      <Icon tag="i" isBold>search</Icon>
    </main>
  )
};

export default Home;