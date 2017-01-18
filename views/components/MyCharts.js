import React from 'react';
import {Bar} from 'react-chartjs-v2';
import _ from 'lodash';

class MyCharts extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var keys = Object.keys(this.props.stats._materials_average_wait_time);
		var values = [];
		keys.forEach(function (key) {
			values.push(this.props.stats._materials_average_wait_time[key]);
		}.bind(this));

		var keys2 = Object.keys(this.props.stats._materials_delivered_per_hour);
		var values2 = [];
		keys2.forEach(function (key) {
			values2.push(this.props.stats._materials_delivered_per_hour[key]);
		}.bind(this));

		const data = {
		  labels: keys,
		  datasets: [
		    {
		      label: 'Average Wait Time',
		      data: values
		    }
		  ]
		};

		const data2 = {
		  labels: keys2,
		  datasets: [
		    {
		      label: 'Average Delivered Packages Per hour',
		      data: values2
		    }
		  ]
		};

		return (
			<div>
				<Bar data={data} />
				<Bar data={data2} />
				<h5> Percentage Of Time the Elevator was Ideal: {this.props.stats._percentage_elevator_ideal}% </h5>
			</div>
		);
	}
}

export default MyCharts;