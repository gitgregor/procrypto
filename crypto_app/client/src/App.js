import React, { Component } from 'react';
import axios from 'axios';



class App extends Component {

  state = {

    _id: 0,
    data: [],
    price_usd: 0,
    last_updated: "157",

    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  };


  // componentDidMount() {
  //   this.getData();
  //   this.interval = setInterval(this.getDataFromDb, 1000);
  // }


  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }


  getData = () => {
    fetch('http://localhost:3001/api/getData'
      // , {
      //   headers: {
      //     'Content-Type': 'application/json',
      // 'Accept': 'application/json'
      // }
      // }
    )
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data }));

  };


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
    console.log(this.state.data);

    const { price_usd, last_updated, data } = this.state;
    return (
      <div>
        {/* <h2>{this.state.data}</h2> */}

        <ul>
          {data.map((dat) => (

            <li key={data._id}>
              last_updated: {dat.last_updated}
              <br />
              USD price:   {dat.price_usd}
            </li>

          ))}
        </ul>

        <button onClick={this.getData}>Get price USD</button>


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