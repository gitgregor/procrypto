import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {

  state = {
    data: [],
    id: 0,
    message: null,

    cryptodata: [],
    ids: 0,
    price_usd: 0,
    last_updated: "157",
    counter: 0,

    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  };


  // componentDidMount() {
  //   this.getDataFromDb();
  //   if (!this.state.intervalIsSet) {
  //     let interval = setInterval(this.getDataFromDb, 60000);
  //     this.setState({ intervalIsSet: interval });
  //   }
  // }


  // componentWillUnmount() {
  //   if (this.state.intervalIsSet) {
  //     clearInterval(this.state.intervalIsSet);
  //     this.setState({ intervalIsSet: null });
  //   }
  // }


  // getDataFromDb = () => {
  //   fetch('http://localhost:3001/api/getData')
  //     .then((data) => data.json())
  //     .then((res) => this.setState({ data: res.data }));
  // };



  // our put method that uses our backend api
  // to create new query into our data base
  // putDataToDB = (message) => {
  //   let currentIds = this.state.data.map((data) => data.id);
  //   let idToBeAdded = 0;
  //   while (currentIds.includes(idToBeAdded)) {
  //     ++idToBeAdded;
  //   }

  //   axios.post('http://localhost:3001/api/putData', {
  //     id: idToBeAdded,
  //     message: message,
  //   });
  // };


  // putCRYPTO = (price_usd) => {
  //   // let currentIds = this.state.cryptodata.map((cryptodata) => cryptodata.ids);

  //   // this.getDataFromCrypto()

  //   axios.post('http://localhost:3001/api/putCrypto', {
  //     // ids: this.state.counter,
  //     price_usd: price_usd,
  //   });
  // };



  postCrypto = (btc_usd, LU) => {
    axios.post(
      'http://localhost:3001/api/a',
      {
        price_usd: btc_usd,
        last_updated: LU
      }
    )
  }


  render() {
    const { price_usd, last_updated } = this.state;
    return (
      <div>
        {/* <ul>
          {cryptodata.map((dat) => (<li key={cryptodata.price_usd}>
            id: {dat.id} <br /> cryptodata:   {dat.price_usd}</li>
          ))}
        </ul> */}
        <div >
          <input type="text" onChange={(e) => this.setState({ price_usd: e.target.value })} />
          <button onClick={() => this.postCrypto(price_usd, last_updated)}>
            ADD
          </button>
        </div>
      </div>
    );
  }
}

export default App;