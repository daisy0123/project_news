mapOption = {
	backgroundColor: '#1b1b1b',
	color: ['gold', 'aqua', 'lime'],
	title: {
		text: '中国候鸟迁徙路线图',
		subtext: '数据来自中国观鸟记录中心',
		sublink: 'http://www.birdreport.cn/',
		subtextStyle: {
			color: 'yellow'
		},
		x: 'center',
		textStyle: {
			color: '#fff'
		}
	},
	tooltip: {
		trigger: 'item',
		formatter: '{b}'
	},
	legend: {
		orient: 'vertical',
		x: 'left',
		data: ['青海湖', '黑龙江扎龙自然保护区', '内蒙古东部科尔沁湿地'],

		selectedMode: 'multiple',
		selected: {
			'黑龙江扎龙自然保护区': true,
			'内蒙古东部科尔沁湿地': true
		},
		textStyle: {
			color: '#fff'
		}
	},
	toolbox: {
		show: true,
		orient: 'vertical',
		x: 'right',
		y: 'center',
		feature: {
			mark: {
				show: true
			},
			dataView: {
				show: true,
				readOnly: false
			},
			restore: {
				show: true
			},
			saveAsImage: {
				show: true
			}
		}
	},
	dataRange: {
		min: 0,
		max: 800,
		text: ['鸟的\n种类'],

		calculable: true,
		color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
		textStyle: {
			color: '#fff',
			baseline: 'bottom',
			align: 'left'
		}
	},
	series: [{
		name: '全国',
		type: 'map',
		roam: true,
		scaleLimit: {
			min: 0.8,
			max: 1.5
		},
		hoverable: false,
		mapType: 'china',
		itemStyle: {
			normal: {
				borderColor: 'rgba(100,149,237,1)',
				borderWidth: 0.5,
				areaStyle: {
					color: '#1b1b1b'
				}
			}
		},
		data: [],

		geoCoord: {
			'江西鄱阳湖自然保护区': [116, 29],
			'青海湖': [100, 37],
			'四川若尔盖湿地自然保护区': [102.30, 33],
			'云南纳帕海湿地': [99.35, 27.50],
			'西藏玛旁雍错湿地': [81.50, 30.40],
			'贵州威宁草海自然保护区': [104.12, 26.53],
			'黑龙江扎龙自然保护区': [124, 47],
			'吉林莫莫格湿地': [124, 46],
			'山东黄河三角洲': [119, 38],
			'上海崇明东滩湿地': [122, 31],
			'江苏盐城滨海湿地': [120.22, 33.31],
			'广东海丰自然保护区': [115, 23],
			'内蒙古东部科尔沁湿地': [118, 45.40],
			'台湾高美湿地': [120.50, 23.50],
		}
	}, {
		name: '青海湖',
		type: 'map',
		mapType: 'china',
		data: [],
		markLine: {
			smooth: true,
			effect: {
				show: true,
				scaleSize: 1,
				period: 30,
				color: '#fff',
				shadowBlur: 10
			},
			itemStyle: {
				normal: {
					borderWidth: 1,
					lineStyle: {
						type: 'solid',
						shadowBlur: 10
					}
				}
			},
			data: [
				[{
					name: '青海湖'
				}, {
					name: '四川若尔盖湿地自然保护区',
					value: 491
				}],
				[{
					name: '青海湖'
				}, {
					name: '云南纳帕海湿地',
					value: 725
				}],
				[{
					name: '青海湖'
				}, {
					name: '西藏玛旁雍错湿地',
					value: 161
				}],
				[{
					name: '青海湖'
				}, {
					name: '贵州威宁草海自然保护区',
					value: 280
				}],

			]
		},
		markPoint: {
			symbol: 'emptyCircle',
			symbolSize: function(v) {
				return 10 + v / 100
			},
			effect: {
				show: true,
				shadowBlur: 0
			},
			itemStyle: {
				normal: {
					label: {
						show: false
					}
				},
				emphasis: {
					label: {
						position: 'top'
					}
				}
			},
			data: [{
					name: '四川若尔盖湿地自然保护区',
					value: 491
				}, {
					name: '云南纳帕海湿地',
					value: 725
				}, {
					name: '西藏玛旁雍错湿地',
					value: 161
				}, {
					name: '贵州威宁草海自然保护区',
					value: 280
				},

			]
		}
	}, {
		name: '黑龙江扎龙自然保护区',
		type: 'map',
		mapType: 'china',
		data: [],
		markLine: {
			smooth: true,
			effect: {
				show: true,
				scaleSize: 1,
				period: 30,
				color: '#fff',
				shadowBlur: 10
			},
			itemStyle: {
				normal: {
					borderWidth: 1,
					lineStyle: {
						type: 'solid',
						shadowBlur: 10
					}
				}
			},
			data: [
				[{
					name: '黑龙江扎龙自然保护区'
				}, {
					name: '吉林莫莫格湿地',
					value: 143
				}],
				[{
					name: '黑龙江扎龙自然保护区'
				}, {
					name: '山东黄河三角洲',
					value: 195
				}],
				[{
					name: '黑龙江扎龙自然保护区'
				}, {
					name: '上海崇明东滩湿地',
					value: 269
				}],
				[{
					name: '黑龙江扎龙自然保护区'
				}, {
					name: '江苏盐城滨海湿地',
					value: 398
				}],
				[{
					name: '黑龙江扎龙自然保护区'
				}, {
					name: '广东海丰自然保护区',
					value: 406
				}],
				[{
					name: '黑龙江扎龙自然保护区'
				}, {
					name: '江西鄱阳湖自然保护区',
					value: 369
				}],
				[{
					name: '黑龙江扎龙自然保护区'
				}, {
					name: '台湾高美湿地',
					value: null
				}],

			]
		},
		markPoint: {
			symbol: 'emptyCircle',
			symbolSize: function(v) {
				return 10 + v / 100
			},
			effect: {
				show: true,
				shadowBlur: 0
			},
			itemStyle: {
				normal: {
					label: {
						show: false
					}
				},
				emphasis: {
					label: {
						position: 'top'
					}
				}
			},
			data: [{
					name: '吉林莫莫格湿地',
					value: 143
				}, {
					name: '山东黄河三角洲',
					value: 195
				}, {
					name: '上海崇明东滩湿地',
					value: 269
				}, {
					name: '江苏盐城滨海湿地',
					value: 398
				}, {
					name: '广东海丰自然保护区',
					value: 406
				}, {
					name: '江西鄱阳湖自然保护区',
					value: 369
				}, {
					name: '台湾高美湿地'
				},

			]
		}
	}, {
		name: '内蒙古东部科尔沁湿地',
		type: 'map',
		mapType: 'china',
		data: [],
		markLine: {
			smooth: true,
			effect: {
				show: true,
				scaleSize: 1,
				period: 30,
				color: '#fff',
				shadowBlur: 10
			},
			itemStyle: {
				normal: {
					borderWidth: 1,
					lineStyle: {
						type: 'solid',
						shadowBlur: 10
					}
				}
			},
			data: [
				[{
					name: '内蒙古东部科尔沁湿地'
				}, {
					name: '江西鄱阳湖自然保护区',
					value: 369
				}],
				[{
					name: '内蒙古东部科尔沁湿地'
				}, {
					name: '广东海丰自然保护区',
					value: 406
				}],
				[{
					name: '内蒙古东部科尔沁湿地'
				}, {
					name: '四川若尔盖湿地自然保护区',
					value: 491
				}],

			]
		},
		markPoint: {
			symbol: 'emptyCircle',
			symbolSize: function(v) {
				return 10 + v / 100
			},
			effect: {
				show: true,
				shadowBlur: 0
			},
			itemStyle: {
				normal: {
					label: {
						show: false
					}
				},
				emphasis: {
					label: {
						position: 'top'
					}
				}
			},
			data: [{
					name: '江西鄱阳湖自然保护区',
					value: 369
				}, {
					name: '广东海丰自然保护区',
					value: 406
				}, {
					name: '四川若尔盖湿地自然保护区',
					value: 491
				},

			]
		}
	}]
};


                    
                    


require.config({
	paths: {
		echarts: 'http://echarts.baidu.com/build/dist'
	}
});

require(
	[
		'echarts',
		'echarts/chart/map'
	],
	function(ec) {
		mapChart = ec.init(document.getElementById('map_hn'));
		mapChart.setOption(mapOption);
		
	}

);