import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
        <div>
          {this.props.debits?(<h1>Debit Total: {this.props.debits}</h1>):(<div></div>)}
          {this.props.credits?(<h1>Credit Total: {this.props.credits}</h1>):(<div></div>)}
          <h1>Account Balance: {this.props.accountBalance}</h1>
        </div>
    );
  }
}

export default AccountBalance;