import React from 'react';

import photo from '../images/bass/preview.jpg';

const data = {
  title: "Fretless Bass Conversion", 
  postLink: "fretless", 
  link: null,
  img: photo,
  blurb: 'My 5-string bass, gone fretless.',
  content: (
    <div className='pad-content'>
    <p>
      I was inspired to do this project by a variety of factors: I thought it'd be fun, I had just been sent home from college for quarantine, and I've always preferred the feel and expression enabled by the fretless nature of the upright bass. Plus, it's pretty cool and the guitar was cheap. So I looked up a few guides on the internet and got cracking.
    </p>
    <div className='center'>
      <img src={require('../images/bass/bass_before.jpg')} alt="" style={{width: 50+"%"}}></img> 
    </div>
    <p>
      This is my bass guitar, a Washburn Bantam 5-string I picked up from Guitar Center in Boston for under $100. At the time I just wanted something to noodle on and experiment with the 5th string. It's in ok condition, and plays fine, but has a few chips here and there, so I don't mind adding a few of my own.
    </p>
    <div className='center'>
      <img src={require('../images/bass/bass_dramatic_1.jpg')} alt="" style={{width: 50+'%'}}></img>
      <img src={require('../images/bass/bass_dramatic_2.jpg')} alt="" style={{width: 50+'%'}}></img>
    </div>
    <p>
      The first step was to peel back the strings and pull out the frets. Pulling back the strings was routine and effortless; however, the frets were a different story. There are tools out there to pull frets, but considering I would only do this once, I figured a pair of side cutters and nail clippers would do the trick. And while it did get the frets out, it wasn't without battle scars.
    </p>
    <div className='center'>
      <img src={require('../images/bass/frets.jpg')} alt="" style={{width: 50+'%'}} />
      <img src={require('../images/bass/ripped_out.jpg')} alt="" style={{width: 50+'%'}} />
    </div>
    <p>
      After pulling the frets, you have to put something back in to keep the fingerboard intact. I ended up using some wood veneer that slotted right into the space the fret used to be. To fill in some of the cracks left from the de-fretting, I used wood putty. Some guides recommend wood putty to fill the whole fret, but it was so soft I can't imagine it has enough structural confidence. After cutting and gluing each piece, the neck was ready for sanding. I didn't have a proper sanding block on hand, much less multiple for different grits, so I used a matchbox and taped to it whatever grit sandpaper I needed at the moment.
    </p>
    <div className='center'>
      <img src={require('../images/bass/sand_block.jpg')} alt="" style={{width: 50+'%'}} />
      <img src={require('../images/bass/sanded_neck.jpg')} alt="" style={{width: 50+'%'}} />
    </div>
    <p>
      Now it was time for stain. I wanted a darker neck, but not the faded black it was before. I opted for a mahogany stain that ended up being darker than I would have liked, but still looked pretty good after the clear coat.
    </p>
    <div className='center'>
      <img src={require('../images/bass/stained.jpg')} alt="" style={{width: 50+'%'}} />
      <img src={require('../images/bass/dried_stained_cool.jpg')} alt="" style={{width: 50+'%'}} />
    </div>
    <p>
      Looking back on it I'm pretty happy with the result. I'm able to do the slides I wanted and no longer have to worry about it slapping against the tall frets. If I were to change anything, I would have sanded more and used a different stain. But if the thing I'm complaining about is the color, then the bass is in a pretty good spot. Perhaps next I'll put on some flat-wound strings!
    </p>
    <br/>
    </div>
  ),
}

export default data;