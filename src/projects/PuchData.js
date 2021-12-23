import React from 'react';
import video from '../images/puch/video.mp4';

const data = {
  title: "Electric 1977 Puch Maxi",
  postLink: "fretless", 
  link: null,
  content: (
    <div className='container'>
    <h1>Origins</h1>
    <p>
      When I was sent home from school for quarantine in March, my environment, like many others, changed drastically. No longer would I drive the van between ZBT and campus, walk to Dunkin, or stroll down dorm row. I was back at home now, where blocks of houses stood between my friends, family, and food. Having sold my high school car, I needed a way to get around. I was able to purchase a 1992 Toyota Celica GT from my dad's neighbor for a very good price, making aquantaince in the trasaction. Apparently the Celica wasn't the only thing he was looking to get rid of: a few weeks later, he gave us with three 70s Puch Maxi mopeds he was ready to throw away for free!

      <br/>
      <br/>
      <div className='horizontal container'>
        <img src={require('../images/puch/grimy.jpg')} alt="" style={{width:50+'%'}} />
        <img src={require('../images/puch/me_and_cam.jpg')} alt="" style={{width:50+'%'}} />
      </div>
      <br/>

      This was my moment. Ever since high school I wanted to build an electric motorcycle; now, with a little more money, knowledge, garage space, and time, I couldn't let this opportunity go.
    </p>
    <h1>Plan</h1>
    <p>
      After removing the engine and years of grime from the frame, I searched for parts. In the end I ended up with a 48V 500W Brushed DC motor from Monster Scooter Parts that came with a motor contoroller and trottle. I decided on 500W because I wasn't planning on going that fast, didn't want to register it as a motorcycle (for over 750W), and the price was right. If I could make one change to the design, it would be this motor (more on this later).
      <br/>
      <br/>
      <div className='horizontal container'>
        <img src={require('../images/puch/motor.jpg')} alt="" style={{width: 30+'%'}} />
      </div>
      <br/>
      To power the thing I bought a cheapo 1600Wh battery from eBay. Was it a mistake? Not yet, but anything more reputable would have cost me over $200 for less capacity when I could get this for less than half the price. I wasn't planning on making something I'd ride every day. To be safe, I put a current limiter and a master switch between the battery and controller.
      <br/>
      <br/>
      <div className='horizontal container'>
        <img src={require('../images/puch/battery.jpg')} alt="" />
      </div>
      <br/>
      While I didn't want to daily this bike, I did want to create something road legal and usable. To support this I also got a current and voltage display, new healight and tailight LEDs, horn, and 48V-12V buck converter (the existing system on the bike was a 6V AC system driven from the old 2-stroke's alternator - yeah I wasn't interested in debugging that).
    </p>
    <h1>Execution</h1>
    <p>
      So, here's where it gets jank. To mount the motor to the bike, I designed a bracket that would attach to the moped's frame using the existing holes from where the 2-stroke was bolted in. I did this using tinkercad because it's free and I'm still kind of a noob when it comes to CAD. After many iterations, I was able to make something reinforced enough to sturdily hold the motor to the bike in the right place, while still allowing clearance for the pedals.
      <br/>
      <br/>
      <div className='horizontal container'>
        <img src={require('../images/puch/mount.PNG')} alt="" style={{width: 50+'%'}} />
      </div>
      <br/>
      Then came the sprocket. The motor I got used a nontraditional sprocket mount, so I couldn't just use the Maxi's existing sprocket from the motor (which, tbf, also used a nontraditional sprocket mount). First I looked to CNC a custom sprocket with teeth of the Maxi sprocket and the center of the motor sprocket, but the makerspace's CNC machine was down. I wasn't interested in replacing the shaft of the motor so I ended up using liquid weld to hold the sprocket that came with the motor to the Maxi's sprocket so I could slip the motor's sprocket onto the shaft, and slip the Maxi's chain onto the Maxi's sprocket. This turned out to work (for the most part), honestly to my surpise. This wasn't a long-term solution but at this point the project was getting much smaller in scope given the time I had left in the summer.
      <br/>
      <br/>
      <div className='horizontal container'>
        <img src={require('../images/puch/sprocket1.jpg')} alt="" style={{width: 50+'%'}} />
        <img src={require('../images/puch/sprocket2.jpg')} alt="" style={{width: 50+'%'}} />
      </div>
      <br/>
      At this point, I had enough to test the bike. After soldering some connectors to the motor, battery, and motor controller leads, I could get the bike to move. Much to my delight it did! However, after a few laps around the block, the motor began to smoke. Now I'm not an expert on electric motors but I have a suspicion that the motor is geared improperly. That, or the motor was just built poorly, or a natural consequence of the brushed design. If I were to do it again I would go brushless at 750W, with proper gearing, but at this point it was just too late to pivot, especially after all the time spent designing and testing the motor bracket. The thing was doomed to become a mere toy, but hey, a fun toy at that!
      <br/>
      <br/>
      <div className='horizontal container'>
        <video src={video} style={{width: 100+'%'}} controls ></video>
      </div>
      <br/>
      In the end I didn't implement the accessories. My internship had ramped up, I had other projects, and this one was going nowhere fast. But I did end up making a nice box to guard the battery and electronics. It's still good for a nice evening ride with my brother or my dad around the neighborhood. I topped out at 17 mph (the existing pneumatic speedo still worked, which is cool), and my brother got up to 25 on a slight decline, but even with a helmet I didn't trust it at higher speeds, if not only for my shoe soles (oh yeah, did I mention the brakes were shot?). I still consider this one a success, especially knowing now what I need to do for next time. 
    </p>
    <br/>
    <div className='horizontal container'>
      <img src={require('../images/puch/sexy.jpg')} alt="" style={{width:70+'%'}} />
    </div>
    <br/>
    </div>
  )
}

export default data;