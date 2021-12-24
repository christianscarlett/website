import React from 'react'

import photo from '../images/maze/menu.png';
import lvl1 from '../images/maze/level1.png';
import lvl2 from '../images/maze/level2.png';
import lvl3 from '../images/maze/level3.png';

const data = {
  title: 'MAZE RNNR',
  postLink: 'mazernnr',
  link: null,
  img: photo,
  blurb: 'A microcontroller game built for a class final project.',
  content: (
    <div className='pad-content'>
    <p>
    This was my final project for one of my most favorite and challenging classes at MIT. I learned at an advanced level how to build things using hardware and program a microcontroller (an Intel 8051 for this class) at the Assembly level. This class taught me a lot about building a system around a microcontroller close to the metal, and in some cases pushed me out of my comfort zone in the best way.
    </p>
    <div className='center'>
      <iframe className='youtube' src="https://www.youtube.com/embed/Z7p5NUK-GBQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <p>
    I made 3 levels for the game. The video explains it all, but here is a picture of each:
    </p>
    <div className='center'>
      <img src={lvl1} alt="" style={{width: 30+'%'}} />
      <img src={lvl2} alt="" style={{width: 30+'%'}} />
      <img src={lvl3} alt="" style={{width: 30+'%'}} />
    </div>

    <br/>
    </div>
  )
}

export default data;