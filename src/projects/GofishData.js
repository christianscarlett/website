import React from 'react';

import photo from '../images/gofish/gofish.PNG';
import game from '../images/gofish/game.PNG';

const data = {
  title: 'Go Fish',
  postLink: 'gofish',
  link: 'https://www.christianscarlett.com/go_fish/',
  img: photo,
  blurb: 'Go Fish card game simulator I made in January 2020.',
  content: (
    <div className='pad-content'>
    <p>
    This is just a little game I made to warm up my javascript skills in January of 2020. It's a little rough but can be fun to click through. The rules are as follows:
    </p>
    <ul>
      <li>The goal is to make as many pairs as you can.</li>
      <li>On each turn, if you see pairs in your hand, click on one of the cards in the pair and it will be removed from your hand. You should do this for as many pairs as you can—your score increments with each pair you find.</li>
      <li>You can also click one of the non-pair cards in your hand to guess that the AI has that card. Then, if the AI's hand contains a pair of that card, the pair cards will be removed from both of your hands and your score will increment. You can do this until you guess a card that the AI does not have, at which point you must draw a card from the deck.</li>
      <li>The AI will then find all the pairs in its hand and randomly guess that you have one of the remaining cards in its hand. If it guesses correctly, it will make a pair with a card from your hand and guess again. If it guesses incorrectly, it will draw from the pile and it becomes your turn.</li>
      <li>The game ends when either the player's or the AI's hands are empty.</li>
    </ul>
    <div className='center'>
      <img src={game} style={{width:80+'%'}} />
    </div>
    <br/>
    </div>
  )
}

export default data;