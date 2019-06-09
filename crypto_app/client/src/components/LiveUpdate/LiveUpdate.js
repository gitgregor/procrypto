import React, { Component } from 'react';
import Highcharts from 'highcharts';
import {
    HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Legend, LineSeries
} from 'react-jsx-highcharts';
// import ExampleCode from '../utils/ExampleCode';
// import code from './exampleCode';
import { createRandomData, addDataPoint } from '../utils/data-helpers';

class LiveUpdate extends Component {

    constructor(props) {
        super(props);

        // const now = Date.now();
        this.state = {
            data1: [],
            // x: this.props.arr1,
            // data1: [[Date.now() - 40000, 200], [Date.now() - 30000, 3000], [Date.now() - 20000, 400], [Date.now() - 10000, 300]],

            liveUpdate: false
            // data1: createRandomData(now),
            // data2: createRandomData(now),
        };
        // console.log(this.state.data1);
        // console.log(this.props.arr1);

    }

    // unWrapper = () => {
    // console.log(this.state.x);
    // const xx = this.state.x
    // const xxx = (xx.pop())
    // const xxx = [8888].pop()
    // const xxxx = new Number(xxx)
    // let [xxx] = this.state.x
    // console.log('Tu będzie 3x');
    // console.log(xxx);
    // console.log('Tu będzie 4x');
    // console.log(xxxx);
    // }

    componentDidMount() {

        this.handleStartLiveUpdate();
        // this.unWrapper()
    }

    componentWillUnmount() {
        window.clearInterval(this.state.liveUpdate);
    }

    updateLiveData = () => {
        const { data1, data2 } = this.state;

        this.setState({
            // data1: this.props.arr1
            data1: addDataPoint(this.props.arr1),
            // data2: addDataPoint(data2)
        });
        console.log(data1);

    }

    handleStartLiveUpdate = e => {
        e && e.preventDefault();
        this.setState({
            liveUpdate: window.setInterval(this.updateLiveData, 1000)
        });
    }

    handleStopLiveUpdate = e => {
        e.preventDefault();
        window.clearInterval(this.state.liveUpdate);
        this.setState({
            liveUpdate: false
        });
    }

    render() {
        // const { data1, data2, liveUpdate } = this.state;
        const { data1, liveUpdate } = this.state;

        return (
            <div className="app">

                <HighchartsChart>
                    <Chart />

                    <Title>Dynamically updating data</Title>

                    <Legend>
                        <Legend.Title>Legend</Legend.Title>
                    </Legend>

                    <XAxis type="datetime">
                        <XAxis.Title>Time</XAxis.Title>
                    </XAxis>

                    <YAxis>
                        <YAxis.Title>Pressure (m)</YAxis.Title>
                        <LineSeries name="Sensor 1" data={data1} />
                        {/* <LineSeries name="Sensor 2" data={data2} /> */}
                    </YAxis>
                </HighchartsChart>

                <div>
                    {!liveUpdate && (
                        <button className="btn btn-success" onClick={this.handleStartLiveUpdate}>Live update</button>
                    )}
                    {liveUpdate && (
                        <button className="btn btn-danger" onClick={this.handleStopLiveUpdate}>Stop update</button>
                    )}
                </div>
            </div>
        );
    }
}

export default withHighcharts(LiveUpdate, Highcharts);
