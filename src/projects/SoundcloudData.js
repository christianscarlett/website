import React from 'react';

import photo from '../images/soundcloud/page.PNG';

const data = {
  title: 'SoundCloud',
  postLink: 'soundcloud',
  link: null,
  img: photo,
  blurb: 'A finsta for my music.',
  content: (
    <div className='pad-content'>
    <p>
    Link to my profile: <a href='https://soundcloud.com/christian-scarlett-608951192' target="_blank" rel="noopener noreferrer">https://soundcloud.com/christian-scarlett-608951192</a>.
    </p>
    <p>
    Most of my musical expression nowadays is in the form of producing. Once in a while I'll make something I'm a little proud of, so I'll post it here!
    </p>
    <div className='center'>
      <img src={photo}  style={{width:80+'%'}} alt='sndcld' />
    </div>
    <br/>
    </div>
  )


}

export default data;