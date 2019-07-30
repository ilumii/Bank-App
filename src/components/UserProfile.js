import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/UserProfile.css'

class UserProfile extends Component {
  render() {
    return (
        <div className="container">
          <h1>User Profile</h1>
          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
          <Link to="/home">Home</Link>
        </div>
    );
  }
}

export default UserProfile;