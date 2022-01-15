import react from 'react';
import './App.css';
import ApplyCoupon from './components/ApplyCoupon';

class App extends react.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div id='nav'>
          <p>Qkart Coupon dashboard</p>
        </div>
        <div id='dashboard'>
          <div id='left'>
            <ApplyCoupon></ApplyCoupon>

          </div>
          <div id='right'>

          </div>
        </div>
      </>
    )
  }

}

export default App;
