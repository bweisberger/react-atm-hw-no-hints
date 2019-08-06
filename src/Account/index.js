import React, { Component } from 'react';


class Account extends Component {
  constructor(){
    super();
    this.state = {
      balance: 0,
      balanceClass: ""
    }
  }
  depositClick = (e) =>{
    this.setState({balance: parseInt(this.state.balance + this.refs.inputRef.value)})
  }
  withdrawClick = (e) =>{
    const newBalance = parseInt(this.state.balance - this.refs.inputRef.value);
    if(newBalance >= 0){
      this.setState({balance: parseInt(this.state.balance - this.refs.inputRef.value)})
    } else {
      alert("Insufficient Funds");
    }
  }

  render() {
    if(this.state.balance === 0){
      this.setState({balanceClass: `zero`})
    }
    return (
      <div className={"account " + this.state.balanceClass}>
        <h2>{this.props.name}</h2>
        <div className="balance">{this.state.balance}</div>
        <input type="text" ref='inputRef' placeholder="enter an amount" />
        <input type="button" value="Deposit" onClick={this.depositClick}/>
        <input type="button" value="Withdraw" onClick={this.withdrawClick} />
      </div>
    )
  }
}

export default Account;
