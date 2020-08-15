import React, {Component} from 'react';
import Post from '../templates/Post';

class Fretless extends Component {
  center = {width: 50+'%', display: 'block', "margin-left": 'auto', "margin-right": 'auto', "margin-top": 0, "margin-bottom": 0};
  rotate = {transform: 'rotate(270deg)'};
  render() {
    return (
      <Post 
        title="Fretless Bass Conversion" 
        content={(
          <>
          <p>I was inspired to do this project by a variety of factors: I thought it'd be fun, I had just been sent home from college for quarantine, and I've always preferred the feel and expression enabled by the fretless nature of the upright bass. Plus, it's pretty cool and the guitar was cheap. So I looked up a few guides on the internet and got cracking.</p>
          <div style={Object.assign({}, this.rotate)}>
            <img src={require('../images/bass_before.jpg')} style={Object.assign({}, this.center, {})}></img> 
          </div>
          <p>This is my bass guitar, a Washburn Bantam 5-string I picked up from Guitar Center in Boston for under $100. At the time I just wanted something to noodle on and experiment with the 5th string. It's in ok condition, and plays fine, but has a few chips here and there, so I don't mind adding a few of my own.</p>
          <div style={Object.assign({}, this.center)}>
            <img src={require('../images/bass_dramatic_1.jpg')} style={{width: 60+'%'}}></img>
            <img src={require('../images/bass_dramatic_2.jpg')} style={{width: 60+'%'}}></img>
          </div>
          <p>The first step was to peel back the strings and pull out the frets. Pulling back the strings was routine and effortless; however, the frets were a different story. There are tools out there to pull frets, but considering I would only do this once, I figured a pair of side cutters would do the trick. </p>
          </>
        )}
      />
    );
  }
}

export default Fretless;