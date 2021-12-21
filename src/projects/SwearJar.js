import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/database';


class SwearJar extends Component {
  constructor(props) {
    super(props);

    var firebaseConfig = {
      apiKey: "AIzaSyA5WkACdlBDnjJwkIDJIXHt4bUEjkh7Y8o",
      authDomain: "swearjar-a4e1d.firebaseapp.com",
      projectId: "swearjar-a4e1d",
      storageBucket: "swearjar-a4e1d.appspot.com",
      messagingSenderId: "623395402250",
      appId: "1:623395402250:web:9440edf78fd074df2f65f3"
    };

    firebase.initializeApp(firebaseConfig);

    this.state = {
      christianCount: 0,
      summerCount: 0,
    }
  }

  async updateCount(count, callback=()=>{}) {
    let dbRef = firebase.database().ref();
    await dbRef.child(count).get().then(async (snapshot) => {
      const newState = {}
      newState[count] = snapshot.val();
      this.setState(newState, callback);
    });
  }

  updateCounts() {
    this.updateCount('christianCount');
    this.updateCount('summerCount');
  }

  componentDidMount() {
    this.updateCounts();
  }

  buttonUpdate(count, change) {
    this.updateCount(count, () => {
      firebase.database().ref().child(count).set(this.state[count] + change).then(
        () => this.updateCounts()
      );}
    );
  }

  render() {
    return (
      <div className='swearjar'>
        <div>
          <div className='num-display'>
            <h1>Total</h1>
            <h2>${this.state.christianCount + this.state.summerCount}</h2>
          </div>
        </div>

        <div className='counter'>
          <button className='fun-button' onClick={() => this.buttonUpdate('summerCount', -1)}>-</button>
          <div className='num-display'>
            <h4>Summer</h4>
            <h4>${this.state.summerCount}</h4>
          </div>
          <button className='fun-button' onClick={() => this.buttonUpdate('summerCount', 1)}>+</button>
        </div>

        <div className='counter'>
          <button className='fun-button' onClick={() => this.buttonUpdate('christianCount', -1)}>-</button>
          <div className='num-display'>
            <h4>Christian</h4>
            <h4>${this.state.christianCount}</h4>
          </div>
          <button className='fun-button' onClick={() => this.buttonUpdate('christianCount', 1)}>+</button>
        </div>
      </div>
    );
  }
}

export default SwearJar;