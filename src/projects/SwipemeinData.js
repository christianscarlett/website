import React from "react";

import photo from "../images/swipe/swipemein_screenshot.PNG";
import profilepage from "../images/swipe/profilepage.png";
import homepage from "../images/swipe/homepage.png";

const data = {
  title: "SwipeMeIn",
  postLink: "swipemein",
  link: "www.swipemein.github.io",
  img: photo,
  blurb: "A platform for meal-sharing between MIT students.",
  content: (
    <div className="pad-content">
      <p>
        Link to site:{" "}
        <a
          href="http://swipemein.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.SwipeMeIn.github.io
        </a>
      </p>
      <h1>Origins</h1>
      <p>
        Near the end of my first semester at MIT, I noticed an interesting
        phenomenon that found its way into nearly every social interaction I
        had: everyone had leftover meal swipes and wanted to give them away.
      </p>
      <p>
        For some context, MIT's meal plans (at the time—they've changed a bit
        over the years) are structured such that each semester you can buy a
        plan that gives you a fixed number of meal “swipes”. A swipe allows you
        entry into a dining hall exactly once, and is so named because you swipe
        your ID card to get into the premises (which then subtracts a swipe from
        your supply). It's common for a person to swipe their card two or three
        times to admit a couple friends who may not have paid for a meal plan or
        forgot their IDs; in other words, they get “swiped in”.
      </p>
      <p>
        What often happens is that people pay for plans that give more swipes
        than they can/want to use in a semester. Since they don't roll over each
        semester and there is no refund, swipes will be wasted if they aren't
        used by the last day of classes. Thus, near finals, many have upwards of
        50 to 100 swipes left over that they want to give away.
      </p>
      <h1>Existing Solutions</h1>
      <p>
        There is an existing swipe donation program run by the university called
        SwipeShare that allows a student to donate up to 6 swipes per semester.
        However, this is incredibly limiting (people end up with far over 6
        extra swipes). Additionally, a student may only request up to 3 meals
        per semester, and the process may require a face-to-face meeting with a
        Dean from Student Support Services to be approved. These are glaring
        issues and frankly I'm surprised the administration thinks this is an
        adequate meal donation program.
      </p>
      <p>
        I was also surprised that nobody had tried to tackle this problem
        before—after asking some older friends of mine and doing some searching,
        I was unable to find anything that attempted to create a meal sharing
        service for MIT students. So, I decided I'd have a crack at it.
      </p>
      <h1>Ideation</h1>
      <p>
        First, the concept for the website was a marketplace where students
        could post their swipes for sale and other students could buy a swipe on
        the site. A swipe would consist of a time, dining hall, and price. After
        a purchase, the swipe giver and the swipe receiver would meet at that
        dining hall at the swipe time and the swipe giver would swipe them in.
      </p>
      <div className="center">
        <img src={homepage} alt="Home Page" style={{ width: 80 + "%" }} />
      </div>
      <p>
        After talking about this with a few friends, I found out one of them had
        tried to make a meal sharing service where MIT students could sell their
        self-cooked leftovers (MIT has many “cook for yourself” dorms). However,
        it was shut down because MIT doesn't take kindly to reselling products
        made with their facilities (dorm kitchens in this case). So, I decided
        to scrap the monetization model and stick simply to “free” swipe sharing
        because that has been common practice for years and I figured the site
        would ruffle fewer feathers that way.
      </p>
      <h1>Progress</h1>
      <p>
        I worked on the site on and off for three years, evolving my development
        strategy as I learned more and gained more experience. Initially I had
        the whole site designed around a frontend built in React and a Firebase
        storage strategy. However, I learned that this was highly insecure and
        started again, spinning up a backend in Node to handle the storage
        calls. In between these changes, the site went through many redesigns as
        my motivation waxed and waned.
      </p>
      <p>
        My senior fall I set out a goal to finally launch the site. It was in a
        pretty good state and I wanted to make sure I attempted a launch before
        I graduated and missed the chance. About halfway through the semester, I
        got an email titled “Dining Swipe Exchange”; intrigued, I looked into
        it. A few other MIT students were matching people to sell and buy swipes
        using Google forms! I didn't know what to think of this at first—it
        potentially threatened the launch of my own pet project I was working on
        for years—but it was also an opportunity to gain info about their
        approach and get a pulse on the demand for a service like this. So, I
        reached out marveling that we both identified the same problem and came
        up with different solutions, and asked if they wanted to work together.
      </p>
      <p>
        Turns out they did! We met up and bounced some ideas off each other.
        They were intrigued that I had already built a site similar to what they
        envisioned and had had some success with their existing method.
      </p>
      <p>
        However, our ideas weren't 1:1. They were really excited about the idea
        of having some kind of money component to the swipe as it adds incentive
        for swipe givers to post their swipes. They also envisioned building a
        mobile app for the marketplace, but I had no mobile app development
        experience at the time and neither did they. We agreed a notification
        component to the site was crucial, so we compromised and decided
        automated emails would fill that role.
      </p>
      <p>
        One of their team members was also a software developer, so I gained the
        invaluable experience of having a second set of eyes on what I had
        already written. They also proved invaluable for ideating and, on our
        soft launch, bug fixing. We moved our login from MIT's OIDC system
        (because it was incredibly slow and inconsistent) to our own login
        service. We chose not to use Touchstone because the documentation was
        obscure and I think we would have had to have some kind of pre-approval
        from IS&amp;T for our app. With their help, we were able to quickly
        finish up the changes we needed to make to the profile page, integrate
        pricing, and create email notifications.
      </p>
      <div className="center">
        <img src={profilepage} alt="Profile Page" style={{ width: 80 + "%" }} />
      </div>
      <p>
        As of posting this we've soft-launched the site to a few users of their
        swipe exchange. I might update this post again in the future with more
        post-launch thoughts.
      </p>
      <br />
    </div>
  ),
};

export default data;
