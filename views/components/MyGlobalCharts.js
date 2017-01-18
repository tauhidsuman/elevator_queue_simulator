import React from 'react';
import {Bar} from 'react-chartjs-v2';
import _ from 'lodash';

class MyGlobalCharts extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var counts = Object.keys(this.props.stats);

		var charts = this.props.stats.map((stat, index) => {
			if (index !== 0) {

				var data = {
				  labels: [],
				  datasets: []
				};

				var keys = Object.keys(stat.overall_average_wait_times);

				var values = [];

				keys.forEach(function (key) {
					values.push(stat.overall_average_wait_times[key]);
				}.bind(this));

				data.labels = keys;

				data.datasets.push({
					label: 'Average Wait Time for ' + index + ' iterations.',
			      	data: values
				});

				var data2 = {
				  labels: [],
				  datasets: []
				};

				var keys2 = Object.keys(stat.overall_average_delivered_packages_per_hour);

				var values2 = [];

				keys2.forEach(function (key) {
					values2.push(stat.overall_average_delivered_packages_per_hour[key]);
				}.bind(this));

				data2.labels = keys2;

				data2.datasets.push({
					label: 'Average delivered packages per hour ' + index + ' iterations.',
			      	data: values2
				});

		        return (
		          <div>
			          <Bar data={data} key={index.toString() + '1'} />
			          <Bar data={data2} key={index.toString() + '2'} />
			          <h5> Percentage Of Time the Elevator was Ideal: {stat.overall_percentage_of_elevator_was_ideal}% </h5>
		          </div>
		       	);
		    }
	    });

		return (
			<div>
				{charts}
			</div>
		);
	}
}

export default MyGlobalCharts;