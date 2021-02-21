var ec_left1 = echarts.init(document.getElementById('l1'), "dark");

var ec_left1_Option = {
	title: {
		text: "加拿大新增确诊",
		textStyle: {
			color: '#ccc'
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
		data: ['新增确诊',],
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
		name: "新增确诊",
		type: 'line',
		smooth: true,
		data: [260, 406, 529],
	},]
};

ec_left1.setOption(ec_left1_Option);

var ec_left2 = echarts.init(document.getElementById('l2'), "dark");

var ec_left2_Option = {
	title: {
		text: "加拿大新增现存",
		textStyle: {
			color: '#ccc'
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
		data: ['新增现存',],
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
		name: "新增现存",
		type: 'line',
		smooth: true,
		data: [260, 406, 529],
	},]
};

ec_left2.setOption(ec_left2_Option);