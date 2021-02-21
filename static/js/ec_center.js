var ec_center = echarts.init(document.getElementById('c2'), "dark");

var ec_center_Option = {
	title: {
		text: "加拿大累计趋势",
		textStyle: {
			// color: 'white',
		},
		left: 'left',
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'line',
			lineStyle: {
				color: '#7171C6'
			}
		},
	},
	legend: {
		data: ['累计确诊', '现有确诊', '累计治愈', '累计死亡'],
		left: "right"
	},
	
	grid: {
		left: '4%',
		right: '6%',
		bottom: '4%',
		top: 50,
		containLabel: true
	},
	xAxis: [{
		type: 'category',
		data: ['01.20', '01.21', '01.22']
	}],
	yAxis: [{
		type: 'value',
		axisLabel: {
			show: true,
			color: 'white',
			fontSize: 12,
			formatter: function(value) {
				if (value >= 1000) {
					value = value / 1000 + 'k';
				}
				return value;
			}
		},
		axisLine: {
			show: true
		},
		splitLine: {
			show: true,
			lineStyle: {
				color: "#17273B",
				width: 1,
				type: 'solid',
			}
		}
	}],
	series: [{
		name: "累计确诊",
		type: 'line',
		smooth: true,
		data: [260, 406, 529],
	}, {
		name: "现有确诊",
		type: 'line',
		smooth: true,
		data: [54, 37, 3935]
	}, {
		name: "累计治愈",
		type: 'line',
		smooth: true,
		data: [25, 25, 25]
	}, {
		name: "累计死亡",
		type: 'line',
		smooth: true,
		data: [6, 9, 17]
	}]
};

ec_center.setOption(ec_center_Option);