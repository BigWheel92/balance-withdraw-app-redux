import React, { Component } from "react";
import "../css/App.css";
import store from "../store"
import withdrawAction from "../actions";
class App extends Component {

  withdrawBtnHandler=(e)=>
  {
    let amount=Number.parseFloat(e.target.dataset.amount);
    store.dispatch(withdrawAction(amount));
  }

  render() {
    const { totalAmount, username } = store.getState();
    return (
      <div className="App">
        <img className="App__userpic" src={"https://image.ibb.co/nC8vGp/girl.png"} alt="photographer" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {'$'+totalAmount}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button onClick={this.withdrawBtnHandler} data-amount="10000">WITHDRAW $10,000</button>
          <button data-amount="5000" onClick={this.withdrawBtnHandler}>WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}

export default App;
