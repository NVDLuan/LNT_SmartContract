//import logo from './logo.svg';
import { isPrime, getContractInstance, printFirstPrime } from './static/function';
import Config from './static/config';
import './App.css';
import { Component } from 'react';
import Web3 from 'web3';

export class App extends Component {

  number1 = 0;
  number2 = 0;

  handleClick = (e) => {
    this.conectSmartContract();
  }
  async conectSmartContract() {
    if (typeof web3 !== 'undefined') {
      window.web3 = new Web3(Web3.currentProvider);
    } else {
      console.log('No web3? You should consider trying MetaMask!');
      window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    }
    if (window.ethereum) {
      await window.ethereum.enable();
    }
    let accountsOnEnable = await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log('accountsOnEnable', accountsOnEnable);
    window.account = accountsOnEnable[0];

    let x = document.getElementById("account");
    if (x.style.display === "none") {
      x.style.display = "block";
      let connect = document.getElementById("connect");
      connect.style.display = "block";
      x.innerText = "Account: " + accountsOnEnable[0];
    } else {
      x.style.display = "none";

    }
    console.log(accountsOnEnable[0]);
  }
  hendleChangValue = (e) => {
    console.log(e.target.name);
    if (e.target.name === "number") {
      this.number1 = e.target.value;
      console.log(this.number1);
    }
    else this.number2 = e.target.value;
  }
  hendleSubmitForm = (e) => {
    e.prevenDefault();
    let contract = getContractInstance(Config.Abi, Config.Address);
    isPrime(contract, this.number1).then(data => {
      document.getElementById("msg").innerText = data;
      console.log(data);
    });
  }
  hendleSubmitForm2 = (e) => {
    e.prevenDefault();
    let contract = getContractInstance(Config.Abi, Config.Address);
    printFirstPrime(contract, this.number2).then(data => {
      document.getElementById("msg").innerText = data;
      console.log(data);
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">

          <div>
            <button id="connect" onClick={this.handleClick}>Connect metamask</button>
            <div>
              <p className='account' id='account' ></p>
            </div>
          </div>
          <h3>kiểm tra số nguyên tố </h3>
          <form onSubmit={this.hendleSubmitForm} method="GET" >
            <input type={"number"} id="number1" name="number" onChange={this.hendleChangValue} />
            <input type={"submit"} value="kiểm tra số nguyên tố" />
          </form>
          <h3>hiển thị n số nguyên tố đầu tiên</h3>
          <form action='' onSubmit={this.hendleSubmitForm2} method="">
            <input type={"number"} name="n" id="number2" onChange={this.hendleChangValue} />
            <input type={"submit"} value="in số nguyên tố" />
          </form>
          <h2>message</h2>
          <div>
            <p id="msg"></p>
          </div>
        </header>
        <script src='./utils/process.js' />
      </div>
    );
  }
}

export default App;
