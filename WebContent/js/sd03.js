 require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });
        
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/pie' // 使用柱状图就加载line模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('sd03'),'macarons'); 
                
                var option = {
   title:{
   text:'2013年全国湿地面积分布图',
   subtext:'数据来自中国观鸟记录中心',
   sublink:'http://www.birdreport.cn/',
   x:'center',
    
   },
    tooltip : {
        show: true,
        formatter: "{a} <br/>{b} : {c} 万公顷({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        y:100,
        data:['全国湿地面积','其余面积','自然湿地','人工湿地','近海与海岸湿地',
              '河流','湖泊','沼泽'
              ]
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'人工湿地和自然湿地占比',
            type:'pie',
            center : ['75%', 200],
            radius : 80,
            itemStyle : {
                normal : {
                    label : {
                        position : 'inner',
                        textStyle:{
                          fontSize:1,
                        },
                        formatter : function (params) {                         
                          return (params.percent - 0).toFixed(2) + '%'
                        }
                    },
                    labelLine : {
                        show : false
                    }
                },
                emphasis : {
                    label : {
                        show : true,
                        formatter : "{b}\n{d}%"
                    }
                }
                
            },
            data:[
                {value:4667.47, name:'自然湿地'},
                {value:674.59, name:'人工湿地'},
               
            ]
        },
        {
            
            type:'pie',
            tooltip:{
            show:true,
            formatter:'{b}:<br/>{c}({d}%)'

            },
            center : ['75%', 200],
            radius : [100, 140],
            data:[
              
                
                {value:859.38, name:'湖泊',
                itemStyle:{
                normal:{

                color:'#00CC99',
                },

                },

             },
                {value:2173.29, name:'沼泽',
                itemStyle:{
                normal:{
                color:'#CC9966',

                },

                },
            },
                {
                    value:1055.21,
                    name:'河流',
                    itemStyle : {
                        normal : {
                            color :'#33FF33',
                            label : {
                                textStyle : {
                                    color : '#33FF33',
                                   
                                    baseline : 'middle',
                                   
                                }
                            },
                            
                        }
                    }
                },
             
                {
                    value:579.59,
                    name:'近海与海岸湿地',
                    itemStyle : {
                        normal : {
                            color:'#00CCFF',
                            label : {
                                show : true
                            },
                            labelLine : {
                                show : true
                            }
                        },
                        emphasis : {
                            label : {
                                show :false
                            },
                            labelLine : {
                                show : false,
                                length : 50
                            },
                          }
                        }
                      },
              {value:674.59,name:'人工湿地'}
               
            ]
        },
        {
            name:'全国湿地面积占比',
            type:'pie',
            clockWise:false,
            startAngle: 0,
            center : ['25%', 200],
            radius :120,
            itemStyle :　{
                normal : {
                    label : {
                        show : true,
                    },
                    labelLine : {
                        show : true
                    }
                },
                emphasis: {
                   
                    label : {
                        show : true,
                        position:'inner',
                        formatter : "约 {d}%",
                        textStyle : {
                            color : '#66FF66',
                            fontSize : '10',
                            fontFamily : '微软雅黑',
                            fontWeight : 'bold'
                        }
                    }
                }
            },
            data:[
                {value:5360.26, name:'全国湿地面积'},
                {value:90639.74, name:'其余面积',itemStyle:{normal:{color:'#3399FF'}}},
            ],
           
        }
    ]
};
                    
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );