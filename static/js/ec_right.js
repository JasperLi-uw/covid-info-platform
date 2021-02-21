var ec_right1 = echarts.init(document.getElementById('r1'), "dark");

var ec_right1_Option = {
    title: {
        text: '各省累计确诊状况',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [
        {
            name: '确诊病例',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                {value: 335, name: 'Quebec'},
                {value: 310, name: 'Alberta'},
                {value: 274, name: 'Ontario'},
                {value: 235, name: 'British Columbia'},
                {value: 400, name: 'Manitoba'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};

ec_right1.setOption(ec_right1_Option);

var ec_right2 = echarts.init(document.getElementById('r2'), "dark");

var ec_right2_Option = {
	title: {
		text: "各省累计趋势",
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
		data: ['ALBERTA', 'ONTARIO', 'QUEBEC'],
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
		name: "ALBERTA",
		type: 'line',
		smooth: true,
		data: [54, 37, 3935]
	}, {
		name: "ONTARIO",
		type: 'line',
		smooth: true,
		data: [25, 25, 25]
	}, {
		name: "QUEBEC",
		type: 'line',
		smooth: true,
		data: [6, 9, 17]
	}]
};

ec_right2.setOption(ec_right2_Option);