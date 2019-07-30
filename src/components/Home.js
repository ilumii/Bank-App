import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import '../styles/Home.css'

class Home extends Component {
  render() {
    return (
        <div className="container">
          <h1>Bank of React</h1>
          <Link to="/userProfile">User Profile</Link>
          <br></br>
          <Link to="debit">Debits</Link>
          <br></br>
          <Link to="credit">Credits</Link>
          <AccountBalance debits={this.props.debits} credits={this.props.credits} accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Home;