  require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });
        
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/line' ,
                 'echarts/chart/bar',
                 'echarts/chart/pie'
                 // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('sd02')); 
                
                var option = {
    title:{
    text:'中国1978年-2008年湿地面积变化统计',
    link:'http://www.cnki.net/KCMS/detail/detail.aspx?QueryID=0&CurRec=1&recid=&filename=KXTB201216004&dbname=CJFD2012&dbcode=CJFQ&pr=&urlid=&yx=&uid=WEEvREcwSlJHSldSdnQ1Y3R3dEdYaElCVGIzbUsvTHh2RnZXTURGZWE3MVMyZk0wUU93OXB1Umhac09hcUt5cnRRPT0=$9A4hF_YAuvQ5obgVAqNKPCYcEjKensW4IQMovwHtwkF4VYPoHbKxJw!!&v=MjYyOTJxWTlGWUlSOGVYMUx1eFlTN0RoMVQzcVRyV00xRnJDVVJMeWZaT1J1RkNyaFZydk9MalhmYkxHNEg5UE4=',
     x:'center',
     subtext:'滨海湿地=潮间带/浅滩+滨海沼泽+河口水域+河口三角洲+岛湖\n'
              +'内陆湿地=河流湿地+湖泊+内陆沼泽\n'
              +'人工湿地=水库/池塘+人工河渠+海水养殖/盐场等+其他人工湿地',
     textStyle:  
{
    fontSize: 30,
    fontWeight: 'bolder',
    fontStyle:'oblique',
    color: '#33CCFF'
}      
    },
    grid:{
    x:180,
    y:100,
    y2:200,
    borderWidth:0,
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
      show:true,
        selectedMode:'single',
        orient:'vertical',
        x:'left',
        y:80,
        data:['潮间带/浅滩','滨海沼泽','河口水域','河口三角洲','岛湖','河流湿地','湖泊','内陆沼泽',
              '水库/池塘','人工河渠','海水养殖/盐场等','其他人工湿地','滨海湿地','内陆湿地','人工湿地']
    },
    toolbox: {
        show : true,
        y:40,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            //magicType : {show: true, type: ['line', 'bar']},
            myTool:{show:true,
                    title:'三大湿地面积变化趋势',
                    icon:'image://http://cdn-img.easyicon.net/png/5645/564531.gif',
                    onclick:function(){
                    myChart.setOption(
option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line',
            lineStyle: {
        color: '#48b',
        width: 2,
        type: 'solid'
    },        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['滨海湿地', '内陆湿地','人工湿地']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            myTool:{show:true,
                    title:'返回上一层',
                    icon:'image://http://pic.qiantucdn.com/58pic/14/73/45/09E58PICTzS_1024.jpg',
                    onclick:function(){
                    myChart.setOption(
                       option = {
    title:{
    text:'中国1978年-2008年湿地面积变化统计',
    link:'http://www.cnki.net/KCMS/detail/detail.aspx?QueryID=0&CurRec=1&recid=&filename=KXTB201216004&dbname=CJFD2012&dbcode=CJFQ&pr=&urlid=&yx=&uid=WEEvREcwSlJHSldSdnQ1Y3R3dEdYaElCVGIzbUsvTHh2RnZXTURGZWE3MVMyZk0wUU93OXB1Umhac09hcUt5cnRRPT0=$9A4hF_YAuvQ5obgVAqNKPCYcEjKensW4IQMovwHtwkF4VYPoHbKxJw!!&v=MjYyOTJxWTlGWUlSOGVYMUx1eFlTN0RoMVQzcVRyV00xRnJDVVJMeWZaT1J1RkNyaFZydk9MalhmYkxHNEg5UE4=',
     x:'center',
     subtext:'滨海湿地=潮间带/浅滩+滨海沼泽+河口水域+河口三角洲+岛湖\n'
              +'内陆湿地=河流湿地+湖泊+内陆沼泽\n'
              +'人工湿地=水库/池塘+人工河渠+海水养殖/盐场等+其他人工湿地',
     textStyle:  
{
    fontSize: 30,
    fontWeight: 'bolder',
    fontStyle:'oblique',
    color: '#33CCFF'
}      
    },
    grid:{
    x:180,
    y:100,
    y2:200,
    borderWidth:0,
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
      show:true,
        selectedMode:'single',
        orient:'vertical',
        x:'left',
        y:80,
        data:['潮间带/浅滩','滨海沼泽','河口水域','河口三角洲','岛湖','河流湿地','湖泊','内陆沼泽',
              '水库/池塘','人工河渠','海水养殖/盐场等','其他人工湿地','滨海湿地','内陆湿地','人工湿地']
    },
    toolbox: {
        show : true,
        y:40,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
           // magicType : {show: true, type: ['line', 'bar']},
            myTool:{show:true,
                    title:'三大湿地面积变化趋势',
                    icon:'image://http://cdn-img.easyicon.net/png/5645/564531.gif',
                    onclick:function(){
                    myChart.setOption(
option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line',
            lineStyle: {
        color: '#48b',
        width: 2,
        type: 'solid'
    },        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['滨海湿地', '内陆湿地','人工湿地']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            myTool:{show:true,
                    title:'返回上一层',
                    icon:'image://http://pic.qiantucdn.com/58pic/14/73/45/09E58PICTzS_1024.jpg',
                    onclick:function(){
                    myChart.setOption(
                       option = {
    title:{
    text:'中国1978年-2008年湿地面积变化统计',
    link:'http://www.cnki.net/KCMS/detail/detail.aspx?QueryID=0&CurRec=1&recid=&filename=KXTB201216004&dbname=CJFD2012&dbcode=CJFQ&pr=&urlid=&yx=&uid=WEEvREcwSlJHSldSdnQ1Y3R3dEdYaElCVGIzbUsvTHh2RnZXTURGZWE3MVMyZk0wUU93OXB1Umhac09hcUt5cnRRPT0=$9A4hF_YAuvQ5obgVAqNKPCYcEjKensW4IQMovwHtwkF4VYPoHbKxJw!!&v=MjYyOTJxWTlGWUlSOGVYMUx1eFlTN0RoMVQzcVRyV00xRnJDVVJMeWZaT1J1RkNyaFZydk9MalhmYkxHNEg5UE4=',
     x:'center',
     subtext:'滨海湿地=潮间带/浅滩+滨海沼泽+河口水域+河口三角洲+岛湖\n'
              +'内陆湿地=河流湿地+湖泊+内陆沼泽\n'
              +'人工湿地=水库/池塘+人工河渠+海水养殖/盐场等+其他人工湿地',
     textStyle:  
{
    fontSize: 30,
    fontWeight: 'bolder',
    fontStyle:'oblique',
    color: '#33CCFF'
}      
    },
    grid:{
    x:180,
    y:100,
    y2:200,
    borderWidth:0,
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
      show:true,
        selectedMode:'single',
        orient:'vertical',
        x:'left',
        y:80,
        data:['潮间带/浅滩','滨海沼泽','河口水域','河口三角洲','岛湖','河流湿地','湖泊','内陆沼泽',
              '水库/池塘','人工河渠','海水养殖/盐场等','其他人工湿地','滨海湿地','内陆湿地','人工湿地']
    },
    toolbox: {
        show : true,
        y:40,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            //magicType : {show: true, type: ['line', 'bar']},
            myTool:{show:true,
                    title:'三大湿地面积变化趋势',
                    icon:'image://http://cdn-img.easyicon.net/png/5645/564531.gif',
                    onclick:function(){
                    myChart.setOption(
option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line',
            lineStyle: {
        color: '#48b',
        width: 2,
        type: 'solid'
    },        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['滨海湿地', '内陆湿地','人工湿地']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            myTool:{show:true,
                    title:'返回上一层',
                    icon:'image://http://pic.qiantucdn.com/58pic/14/73/45/09E58PICTzS_1024.jpg',
                    onclick:function(){
                    myChart.setOption(
                       option = {
    title:{
    text:'中国1978年-2008年湿地面积变化统计',
    link:'http://www.cnki.net/KCMS/detail/detail.aspx?QueryID=0&CurRec=1&recid=&filename=KXTB201216004&dbname=CJFD2012&dbcode=CJFQ&pr=&urlid=&yx=&uid=WEEvREcwSlJHSldSdnQ1Y3R3dEdYaElCVGIzbUsvTHh2RnZXTURGZWE3MVMyZk0wUU93OXB1Umhac09hcUt5cnRRPT0=$9A4hF_YAuvQ5obgVAqNKPCYcEjKensW4IQMovwHtwkF4VYPoHbKxJw!!&v=MjYyOTJxWTlGWUlSOGVYMUx1eFlTN0RoMVQzcVRyV00xRnJDVVJMeWZaT1J1RkNyaFZydk9MalhmYkxHNEg5UE4=',
     x:'center',
     subtext:'滨海湿地=潮间带/浅滩+滨海沼泽+河口水域+河口三角洲+岛湖\n'
              +'内陆湿地=河流湿地+湖泊+内陆沼泽\n'
              +'人工湿地=水库/池塘+人工河渠+海水养殖/盐场等+其他人工湿地',
     textStyle:  
{
    fontSize: 30,
    fontWeight: 'bolder',
    fontStyle:'oblique',
    color: '#33CCFF'
}      
    },
    grid:{
    x:180,
    y:100,
    y2:200,
    borderWidth:0,
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
      show:true,
        selectedMode:'single',
        orient:'vertical',
        x:'left',
        y:80,
        data:['潮间带/浅滩','滨海沼泽','河口水域','河口三角洲','岛湖','河流湿地','湖泊','内陆沼泽',
              '水库/池塘','人工河渠','海水养殖/盐场等','其他人工湿地','滨海湿地','内陆湿地','人工湿地']
    },
    toolbox: {
        show : true,
        y:40,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
           // magicType : {show: true, type: ['line', 'bar']},
            myTool:{show:true,
                    title:'三大湿地面积变化趋势',
                    icon:'image://http://cdn-img.easyicon.net/png/5645/564531.gif',
                    onclick:function(){
                    myChart.setOption(
option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line',
            lineStyle: {
        color: '#48b',
        width: 2,
        type: 'solid'
    },        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['滨海湿地', '内陆湿地','人工湿地']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            myTool:{show:true,
                    title:'返回上一层',
                    icon:'image://http://pic.qiantucdn.com/58pic/14/73/45/09E58PICTzS_1024.jpg',
                    onclick:function(){
                    myChart.setOption(
                       
                        )
                }
            },
     
      
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    grid:{
    
    borderWidth:0,
    },
    yAxis : [
        {    
            type : 'value',
             name:'滨海/人工湿地面积(km^2)',
            nameTextStyle:{
              fontSize:12,

            },
            splitLine:{show:false},

        }
    ],
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisTick:{show:false},
            splitLine:{show:false},
            data : ['1978年','1990年','2000年','2008年']
        }
    ],
    series : [
        {
            name:'滨海湿地',
            type:'line',
            stack:'总面积',
             itemStyle : { 
                normal: {
                label : {show: true, position: 'top'},
                areaStyle: {
                    color:'',
                    type: 'default'}
        }
    },
            data:[13104,11463,9109,7890]
        },
        {
            name:'内陆湿地',
            type:'line',
            stack:'总面积',
             itemStyle : { 
                normal: {
                label : {show: true, position: 'top'},
                areaStyle: {
                      color:'#66FF66',
                    type: 'default'}
        }
    },
            data:[286399,219106,185549,178262]
        },
        {
            name:'人工湿地',
            type:'line',
            stack:'总面积',
            itemStyle : { 
                normal: {
                label : {show: true, position: 'top'},
                areaStyle: {
                    color:'#FF9933',
                    type: 'default'}
        }
    },
            data:[9792,12453,19892,13240]
        },
     
    ]
},true
                    
                        )

                    }
            
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisTick:{show:false},
            splitLine:{show:false},
            data : ['1978年','1990年','2000年','2008年']
        }
    ],
    yAxis : [
        {
            type : 'value',
            scale:true,
            name:'滨海/人工湿地面积(km^2)',
            nameTextStyle:{
              fontSize:12,

            },
            splitLine:{show:false},
             axisLabel : {
                formatter: function(v){
                return v/1;
                },
         }
        },
     {     
        type:'value',
        show:true,
        scale:true,
        position:'right',
        name:'内陆湿地面积( km^2)',
        nameTextStyle:{
              fontSize:12,

            },
        splitLine:{show:false},
        axisLabel : {
                formatter: function(v){
                return v/1;
                },
      }
     }
    ],
     markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
    series : [
        {
            name:'潮间带/浅滩',
            type:'line',
           
            stack1:'滨海湿地',
            data:[3399, 4413, 3401, 2033]
        },
        {
            name:'滨海沼泽',
            type:'line',
           
            stack1:'滨海湿地',
            data:[4363, 2066, 1256, 1510]
        },
        {
            name:'河口水域',
            type:'line',
           
            stack1:'滨海湿地',
            data:[4987, 4470, 4142, 4163]
        },
        {
            name:'河口三角洲',
            type:'line',
           
            stack1:'滨海湿地',
            data:[140,318, 355, 289]
        },
        {
            name:'岛湖',
            type:'line',
           
            stack1:'滨海湿地',
            data:[215, 196, 145, 85]
        },
      {
            name:'河流湿地',
            type:'line',
            stack1:'内陆湿地',
            itemStyle:{
                normal:{
            lineStyle:{
               type:'dotted',
               width:5,
           }
},

            },
           yAxisIndex:1,
            data:[65293, 37357, 35402, 31623]
        },
      {
            name:'湖泊',
            type:'line',
          itemStyle:{
                normal:{
            lineStyle:{
               type:'dashed',
               width:5,
           }
       }
},
            stack1:'内陆湿地',
            yAxisIndex:1,
            data:[82903, 70440, 67831, 64395]
        },
      {
            name:'内陆沼泽',
            type:'line',
            symbol:'star',
            symbolSize:8,
            symbolRotate:-45,
            smooth:true,
            itemStyle:{
                normal:{
            //color:'yellow',
            lineStyle:{
               type:'broken',
               width:5,
           }
       },
           emphasis:{
           color:'yellow',
           },
       
},
            stack1:'内陆湿地',
            yAxisIndex:1,
            data:[138203, 111309, 82314,82244]
        },
      {
            name:'水库/池塘',
            type:'line',
            stack1:'人工湿地',
            data:[5157, 5369, 10707, 12487]
        },
      {
            name:'人工河渠',
            type:'line',
            stack1:'人工湿地',
            data:[616, 104, 244, 369]
        },
       {
            name:'海水养殖/盐场等',
            type:'line',
            stack1:'人工湿地',
            data:[3984, 6960, 8926, 8884]
        },
       {
            name:'其他人工湿地',
            type:'line',
            stack1:'人工湿地',
            data:[35,29, 24, 12]
        },
        
        {
            name:'1978年湿地总面积',
            type:'pie',
            radius : '50',
            center: ['18%', '85%'],
            startAngle:0,
             tooltip : {
            trigger: 'item',
            formatter: "{a} :309296km^2<br/>{b} : {c} km^2({d}%)"
    },
            itemStyle:{
              normal:{
            label:{show:true}
            },
             emphasis : {
                    color: (function (){
                        var zrColor = require('zrender/tool/color');
                        return zrColor.getRadialGradient(
                            650, 200, 80, 650, 200, 120,
                            [[0, 'rgba(255,155,120,1)'],[1, 'rgba(255,0,0,1)']]
                        )
                    })(),
                }
            },
            data:[
                {value:13104, name:'滨海湿地'},
                {value:286399, name:'内陆湿地'},
                {value:9792, name:'人工湿地'},
              
            ]
        },
         {
            name:'1990年湿地总面积',
            type:'pie',
            radius : '50',
            center: ['41%', '85%'],
            startAngle:90,
            tooltip : {
            trigger: 'item',
            formatter: "{a}: 243023km^2<br/>{b} : {c}km^2 ({d}%)"
    },
            itemStyle:{
              normal:{
            label:{show:true}
            },
             emphasis : {
                    color: (function (){
                        var zrColor = require('zrender/tool/color');
                        return zrColor.getRadialGradient(
                            650, 200, 80, 650, 200, 120,
                            [[0, 'rgba(255,155,120,1)'],[1, 'rgba(255,0,0,1)']]
                        )
                    })(),
                }

                      },
            data:[
                {value:11463, name:'滨海湿地'},
                {value:219106, name:'内陆湿地'},
                {value:12453, name:'人工湿地'},
              
            ]
        },
         {
            name:'2000年湿地总面积',
            type:'pie',
            radius : '50',
            center: ['67%', '85%'],
            startAngle:180,
             tooltip : {
            trigger: 'item',
            formatter: "{a} :214548km^2<br/>{b} : {c}km^2 ({d}%)"
    },
            itemStyle:{
              normal:{
            label:{show:true}
            },
             emphasis : {
                    color: (function (){
                        var zrColor = require('zrender/tool/color');
                        return zrColor.getRadialGradient(
                            650, 200, 80, 650, 200, 120,
                            [[0, 'rgba(255,155,120,1)'],[1, 'rgba(255,0,0,1)']]
                        )
                    })(),
                }
                      },
            data:[
                {value:9109, name:'滨海湿地'},
                {value:185547, name:'内陆湿地'},
                {value:19892, name:'人工湿地'},
              
            ]
        },
         {
            name:'2008年湿地总面积',
            type:'pie',
            radius : '50',
            center: ['90%', '85%'],
            startAngle:270,
             tooltip : {
            trigger: 'item',
            formatter: "{a} :207896km^2<br/>{b} : {c} km^2({d}%)"
    },
            itemStyle:{
              normal:{
            label:{show:true}
            },
             emphasis : {
                    color: (function (){
                        var zrColor = require('zrender/tool/color');
                        return zrColor.getRadialGradient(
                            650, 200, 80, 650, 200, 120,
                            [[0, 'rgba(255,155,120,1)'],[1, 'rgba(255,0,0,1)']]
                        )
                    })(),
                }
                      },
            data:[
                {value:7890, name:'滨海湿地'},
                {value:178262, name:'内陆湿地'},
                {value:13240, name:'人工湿地'},
              
            ]
        }
    
    ]
},true
                        )
                }
            },
     
      
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    grid:{
    
    borderWidth:0,
    },
    yAxis : [
        {    
            type : 'value',
             name:'滨海/人工湿地面积(km^2)',
            nameTextStyle:{
              fontSize:12,

            },
            splitLine:{show:false},

        }
    ],
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisTick:{show:false},
            splitLine:{show:false},
            data : ['1978年','1990年','2000年','2008年']
        }
    ],
    series : [
        {
            name:'滨海湿地',
            type:'line',
            stack:'总面积',
             itemStyle : { 
                normal: {
                label : {show: true, position: 'top'},
                areaStyle: {
                    color:'',
                    type: 'default'}
        }
    },
            data:[13104,11463,9109,7890]
        },
        {
            name:'内陆湿地',
            type:'line',
            stack:'总面积',
             itemStyle : { 
                normal: {
                label : {show: true, position: 'top'},
                areaStyle: {
                      color:'#66FF66',
                    type: 'default'}
        }
    },
            data:[286399,219106,185549,178262]
        },
        {
            name:'人工湿地',
            type:'line',
            stack:'总面积',
            itemStyle : { 
                normal: {
                label : {show: true, position: 'top'},
                areaStyle: {
                    color:'#FF9933',
                    type: 'default'}
        }
    },
            data:[9792,12453,19892,13240]
        },
     
    ]
},true
                    
                        )

                    }
            
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisTick:{show:false},
            splitLine:{show:false},
            data : ['1978年','1990年','2000年','2008年']
        }
    ],
    yAxis : [
        {
            type : 'value',
            scale:true,
            name:'滨海/人工湿地面积(km^2)',
            nameTextStyle:{
              fontSize:12,

            },
            splitLine:{show:false},
             axisLabel : {
                formatter: function(v){
                return v/1;
                },
         }
        },
     {     
        type:'value',
        show:true,
        scale:true,
        position:'right',
        name:'内陆湿地面积( km^2)',
        nameTextStyle:{
              fontSize:12,

            },
        splitLine:{show:false},
        axisLabel : {
                formatter: function(v){
                return v/1;
                },
      }
     }
    ],
     markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
    series : [
        {
            name:'潮间带/浅滩',
            type:'line',
           
            stack1:'滨海湿地',
            data:[3399, 4413, 3401, 2033]
        },
        {
            name:'滨海沼泽',
            type:'line',
           
            stack1:'滨海湿地',
            data:[4363, 2066, 1256, 1510]
        },
        {
            name:'河口水域',
            type:'line',
           
            stack1:'滨海湿地',
            data:[4987, 4470, 4142, 4163]
        },
        {
            name:'河口三角洲',
            type:'line',
           
            stack1:'滨海湿地',
            data:[140,318, 355, 289]
        },
        {
            name:'岛湖',
            type:'line',
           
            stack1:'滨海湿地',
            data:[215, 196, 145, 85]
        },
      {
            name:'河流湿地',
            type:'line',
            stack1:'内陆湿地',
            itemStyle:{
                normal:{
            lineStyle:{
               type:'dotted',
               width:5,
           }
},

            },
           yAxisIndex:1,
            data:[65293, 37357, 35402, 31623]
        },
      {
            name:'湖泊',
            type:'line',
          itemStyle:{
                normal:{
            lineStyle:{
               type:'dashed',
               width:5,
           }
       }
},
            stack1:'内陆湿地',
            yAxisIndex:1,
            data:[82903, 70440, 67831, 64395]
        },
      {
            name:'内陆沼泽',
            type:'line',
            symbol:'star',
            symbolSize:8,
            symbolRotate:-45,
            smooth:true,
            itemStyle:{
                normal:{
            //color:'yellow',
            lineStyle:{
               type:'broken',
               width:5,
           }
       },
           emphasis:{
           color:'yellow',
           },
       
},
            stack1:'内陆湿地',
            yAxisIndex:1,
            data:[138203, 111309, 82314,82244]
        },
      {
            name:'水库/池塘',
            type:'line',
            stack1:'人工湿地',
            data:[5157, 5369, 10707, 12487]
        },
      {
            name:'人工河渠',
            type:'line',
            stack1:'人工湿地',
            data:[616, 104, 244, 369]
        },
       {
            name:'海水养殖/盐场等',
            type:'line',
            stack1:'人工湿地',
            data:[3984, 6960, 8926, 8884]
        },
       {
            name:'其他人工湿地',
            type:'line',
            stack1:'人工湿地',
            data:[35,29, 24, 12]
        },
        
        {
            name:'1978年湿地总面积',
            type:'pie',
            radius : '50',
            center: ['18%', '85%'],
            startAngle:0,
             tooltip : {
            trigger: 'item',
            formatter: "{a} :309296km^2<br/>{b} : {c} km^2({d}%)"
    },
            itemStyle:{
              normal:{
            label:{show:true}
            },
             emphasis : {
                    color: (function (){
                        var zrColor = require('zrender/tool/color');
                        return zrColor.getRadialGradient(
                            650, 200, 80, 650, 200, 120,
                            [[0, 'rgba(255,155,120,1)'],[1, 'rgba(255,0,0,1)']]
                        )
                    })(),
                }
            },
            data:[
                {value:13104, name:'滨海湿地'},
                {value:286399, name:'内陆湿地'},
                {value:9792, name:'人工湿地'},
              
            ]
        },
         {
            name:'1990年湿地总面积',
            type:'pie',
            radius : '50',
            center: ['41%', '85%'],
            startAngle:90,
            tooltip : {
            trigger: 'item',
            formatter: "{a}: 243023km^2<br/>{b} : {c}km^2 ({d}%)"
    },
            itemStyle:{
              normal:{
            label:{show:true}
            },
             emphasis : {
                    color: (function (){
                        var zrColor = require('zrender/tool/color');
                        return zrColor.getRadialGradient(
                            650, 200, 80, 650, 200, 120,
                            [[0, 'rgba(255,155,120,1)'],[1, 'rgba(255,0,0,1)']]
                        )
                    })(),
                }

                      },
            data:[
                {value:11463, name:'滨海湿地'},
                {value:219106, name:'内陆湿地'},
                {value:12453, name:'人工湿地'},
              
            ]
        },
         {
            name:'2000年湿地总面积',
            type:'pie',
            radius : '50',
            center: ['67%', '85%'],
            startAngle:180,
             tooltip : {
            trigger: 'item',
            formatter: "{a} :214548km^2<br/>{b} : {c}km^2 ({d}%)"
    },
            itemStyle:{
              normal:{
            label:{show:true}
            },
             emphasis : {
                    color: (function (){
                        var zrColor = require('zrender/tool/color');
                        return zrColor.getRadialGradient(
                            650, 200, 80, 650, 200, 120,
                            [[0, 'rgba(255,155,120,1)'],[1, 'rgba(255,0,0,1)']]
                        )
                    })(),
                }
                      },
            data:[
                {value:9109, name:'滨海湿地'},
                {value:185547, name:'内陆湿地'},
                {value:19892, name:'人工湿地'},
              
            ]
        },
         {
            name:'2008年湿地总面积',
            type:'pie',
            radius : '50',
            center: ['90%', '85%'],
            startAngle:270,
             tooltip : {
            trigger: 'item',
            formatter: "{a} :207896km^2<br/>{b} : {c} km^2({d}%)"
    },
            itemStyle:{
              normal:{
            label:{show:true}
            },
             emphasis : {
                    color: (function (){
                        var zrColor = require('zrender/tool/color');
                        return zrColor.getRadialGradient(
                            650, 200, 80, 650, 200, 120,
                            [[0, 'rgba(255,155,120,1)'],[1, 'rgba(255,0,0,1)']]
                        )
                    })(),
                }
                      },
            data:[
                {value:7890, name:'滨海湿地'},
                {value:178262, name:'内陆湿地'},
                {value:13240, name:'人工湿地'},
              
            ]
        }
    
    ]
},true
                        )
                }
            },
     
      
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    grid:{
    
    borderWidth:0,
    },
    yAxis : [
        {    
            type : 'value',
             name:'滨海/人工湿地面积(km^2)',
            nameTextStyle:{
              fontSize:12,

            },
            splitLine:{show:false},

        }
    ],
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisTick:{show:false},
            splitLine:{show:false},
            data : ['1978年','1990年','2000年','2008年']
        }
    ],
    series : [
        {
            name:'滨海湿地',
            type:'line',
            stack:'总面积',
             itemStyle : { 
                normal: {
                label : {show: true, position: 'top'},
                areaStyle: {
                    color:'',
                    type: 'default'}
        }
    },
            data:[13104,11463,9109,7890]
        },
        {
            name:'内陆湿地',
            type:'line',
            stack:'总面积',
             itemStyle : { 
                normal: {
                label : {show: true, position: 'top'},
                areaStyle: {
                      color:'#66FF66',
                    type: 'default'}
        }
    },
            data:[286399,219106,185549,178262]
        },
        {
            name:'人工湿地',
            type:'line',
            stack:'总面积',
            itemStyle : { 
                normal: {
                label : {show: true, position: 'top'},
                areaStyle: {
                    color:'#FF9933',
                    type: 'default'}
        }
    },
            data:[9792,12453,19892,13240]
        },
     
    ]
},true
                    
                        )

                    }
            
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisTick:{show:false},
            splitLine:{show:false},
            data : ['1978年','1990年','2000年','2008年']
        }
    ],
    yAxis : [
        {
            type : 'value',
            scale:true,
            name:'滨海/人工湿地面积(km^2)',
            nameTextStyle:{
              fontSize:12,

            },
            splitLine:{show:false},
             axisLabel : {
                formatter: function(v){
                return v/1;
                },
         }
        },
     {     
        type:'value',
        show:true,
        scale:true,
        position:'right',
        name:'内陆湿地面积( km^2)',
        nameTextStyle:{
              fontSize:12,

            },
        splitLine:{show:false},
        axisLabel : {
                formatter: function(v){
                return v/1;
                },
      }
     }
    ],
     markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
    series : [
        {
            name:'潮间带/浅滩',
            type:'line',
           
            stack1:'滨海湿地',
            data:[3399, 4413, 3401, 2033]
        },
        {
            name:'滨海沼泽',
            type:'line',
           
            stack1:'滨海湿地',
            data:[4363, 2066, 1256, 1510]
        },
        {
            name:'河口水域',
            type:'line',
           
            stack1:'滨海湿地',
            data:[4987, 4470, 4142, 4163]
        },
        {
            name:'河口三角洲',
            type:'line',
           
            stack1:'滨海湿地',
            data:[140,318, 355, 289]
        },
        {
            name:'岛湖',
            type:'line',
           
            stack1:'滨海湿地',
            data:[215, 196, 145, 85]
        },
      {
            name:'河流湿地',
            type:'line',
            stack1:'内陆湿地',
            itemStyle:{
                normal:{
            lineStyle:{
               type:'dotted',
               width:5,
           }
},

            },
           yAxisIndex:1,
            data:[65293, 37357, 35402, 31623]
        },
      {
            name:'湖泊',
            type:'line',
          itemStyle:{
                normal:{
            lineStyle:{
               type:'dashed',
               width:5,
           }
       }
},
            stack1:'内陆湿地',
            yAxisIndex:1,
            data:[82903, 70440, 67831, 64395]
        },
      {
            name:'内陆沼泽',
            type:'line',
            symbol:'star',
            symbolSize:8,
            symbolRotate:-45,
            smooth:true,
            itemStyle:{
                normal:{
            //color:'yellow',
            lineStyle:{
               type:'broken',
               width:5,
           }
       },
           emphasis:{
           color:'yellow',
           },
       
},
            stack1:'内陆湿地',
            yAxisIndex:1,
            data:[138203, 111309, 82314,82244]
        },
      {
            name:'水库/池塘',
            type:'line',
            stack1:'人工湿地',
            data:[5157, 5369, 10707, 12487]
        },
      {
            name:'人工河渠',
            type:'line',
            stack1:'人工湿地',
            data:[616, 104, 244, 369]
        },
       {
            name:'海水养殖/盐场等',
            type:'line',
            stack1:'人工湿地',
            data:[3984, 6960, 8926, 8884]
        },
       {
            name:'其他人工湿地',
            type:'line',
            stack1:'人工湿地',
            data:[35,29, 24, 12]
        },
        
        {
            name:'1978年湿地总面积',
            type:'pie',
            radius : '50',
            center: ['18%', '85%'],
            startAngle:0,
             tooltip : {
            trigger: 'item',
            formatter: "{a} :309296km^2<br/>{b} : {c} km^2({d}%)"
    },
            itemStyle:{
              normal:{
            label:{show:true}
            },
             emphasis : {
                    color: (function (){
                        var zrColor = require('zrender/tool/color');
                        return zrColor.getRadialGradient(
                            650, 200, 80, 650, 200, 120,
                            [[0, 'rgba(255,155,120,1)'],[1, 'rgba(255,0,0,1)']]
                        )
                    })(),
                }
            },
            data:[
                {value:13104, name:'滨海湿地'},
                {value:286399, name:'内陆湿地'},
                {value:9792, name:'人工湿地'},
              
            ]
        },
         {
            name:'1990年湿地总面积',
            type:'pie',
            radius : '50',
            center: ['41%', '85%'],
            startAngle:90,
            tooltip : {
            trigger: 'item',
            formatter: "{a}: 243023km^2<br/>{b} : {c}km^2 ({d}%)"
    },
            itemStyle:{
              normal:{
            label:{show:true}
            },
             emphasis : {
                    color: (function (){
                        var zrColor = require('zrender/tool/color');
                        return zrColor.getRadialGradient(
                            650, 200, 80, 650, 200, 120,
                            [[0, 'rgba(255,155,120,1)'],[1, 'rgba(255,0,0,1)']]
                        )
                    })(),
                }

                      },
            data:[
                {value:11463, name:'滨海湿地'},
                {value:219106, name:'内陆湿地'},
                {value:12453, name:'人工湿地'},
              
            ]
        },
         {
            name:'2000年湿地总面积',
            type:'pie',
            radius : '50',
            center: ['67%', '85%'],
            startAngle:180,
             tooltip : {
            trigger: 'item',
            formatter: "{a} :214548km^2<br/>{b} : {c}km^2 ({d}%)"
    },
            itemStyle:{
              normal:{
            label:{show:true}
            },
             emphasis : {
                    color: (function (){
                        var zrColor = require('zrender/tool/color');
                        return zrColor.getRadialGradient(
                            650, 200, 80, 650, 200, 120,
                            [[0, 'rgba(255,155,120,1)'],[1, 'rgba(255,0,0,1)']]
                        )
                    })(),
                }
                      },
            data:[
                {value:9109, name:'滨海湿地'},
                {value:185547, name:'内陆湿地'},
                {value:19892, name:'人工湿地'},
              
            ]
        },
         {
            name:'2008年湿地总面积',
            type:'pie',
            radius : '50',
            center: ['90%', '85%'],
            startAngle:270,
             tooltip : {
            trigger: 'item',
            formatter: "{a} :207896km^2<br/>{b} : {c} km^2({d}%)"
    },
            itemStyle:{
              normal:{
            label:{show:true}
            },
             emphasis : {
                    color: (function (){
                        var zrColor = require('zrender/tool/color');
                        return zrColor.getRadialGradient(
                            650, 200, 80, 650, 200, 120,
                            [[0, 'rgba(255,155,120,1)'],[1, 'rgba(255,0,0,1)']]
                        )
                    })(),
                }
                      },
            data:[
                {value:7890, name:'滨海湿地'},
                {value:178262, name:'内陆湿地'},
                {value:13240, name:'人工湿地'},
              
            ]
        }
    
    ]
},true
                        )
                }
            },
     
      
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    grid:{
    
    borderWidth:0,
    },
    yAxis : [
        {    
            type : 'value',
             name:'滨海/人工湿地面积(km^2)',
            nameTextStyle:{
              fontSize:12,

            },
            splitLine:{show:false},

        }
    ],
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisTick:{show:false},
            splitLine:{show:false},
            data : ['1978年','1990年','2000年','2008年']
        }
    ],
    series : [
        {
            name:'滨海湿地',
            type:'line',
            stack:'总面积',
             itemStyle : { 
                normal: {
                label : {show: true, position: 'top'},
                areaStyle: {
                    color:'',
                    type: 'default'}
        }
    },
            data:[13104,11463,9109,7890]
        },
        {
            name:'内陆湿地',
            type:'line',
            stack:'总面积',
             itemStyle : { 
                normal: {
                label : {show: true, position: 'top'},
                areaStyle: {
                      color:'#66FF66',
                    type: 'default'}
        }
    },
            data:[286399,219106,185549,178262]
        },
        {
            name:'人工湿地',
            type:'line',
            stack:'总面积',
            itemStyle : { 
                normal: {
                label : {show: true, position: 'top'},
                areaStyle: {
                    color:'#FF9933',
                    type: 'default'}
        }
    },
            data:[9792,12453,19892,13240]
        },
     
    ]
},true
                    
                        )

                    }
            
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisTick:{show:false},
            splitLine:{show:false},
            data : ['1978年','1990年','2000年','2008年']
        }
    ],
    yAxis : [
        {
            type : 'value',
            scale:true,
            name:'滨海/人工湿地面积(km^2)',
            nameTextStyle:{
              fontSize:12,

            },
            splitLine:{show:false},
             axisLabel : {
                formatter: function(v){
                return v/1;
                },
         }
        },
     {     
        type:'value',
        show:true,
        scale:true,
        position:'right',
        name:'内陆湿地面积( km^2)',
        nameTextStyle:{
              fontSize:12,

            },
        splitLine:{show:false},
        axisLabel : {
                formatter: function(v){
                return v/1;
                },
      }
     }
    ],
     markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
    series : [
        {
            name:'潮间带/浅滩',
            type:'line',
           
            stack1:'滨海湿地',
            data:[3399, 4413, 3401, 2033]
        },
        {
            name:'滨海沼泽',
            type:'line',
           
            stack1:'滨海湿地',
            data:[4363, 2066, 1256, 1510]
        },
        {
            name:'河口水域',
            type:'line',
           
            stack1:'滨海湿地',
            data:[4987, 4470, 4142, 4163]
        },
        {
            name:'河口三角洲',
            type:'line',
           
            stack1:'滨海湿地',
            data:[140,318, 355, 289]
        },
        {
            name:'岛湖',
            type:'line',
           
            stack1:'滨海湿地',
            data:[215, 196, 145, 85]
        },
      {
            name:'河流湿地',
            type:'line',
            stack1:'内陆湿地',
            itemStyle:{
                normal:{
            lineStyle:{
               type:'dotted',
               width:5,
           }
},

            },
           yAxisIndex:1,
            data:[65293, 37357, 35402, 31623]
        },
      {
            name:'湖泊',
            type:'line',
          itemStyle:{
                normal:{
            lineStyle:{
               type:'dashed',
               width:5,
           }
       }
},
            stack1:'内陆湿地',
            yAxisIndex:1,
            data:[82903, 70440, 67831, 64395]
        },
      {
            name:'内陆沼泽',
            type:'line',
            symbol:'star',
            symbolSize:8,
            symbolRotate:-45,
            smooth:true,
            itemStyle:{
                normal:{
            //color:'yellow',
            lineStyle:{
               type:'broken',
               width:5,
           }
       },
           emphasis:{
           color:'yellow',
           },
       
},
            stack1:'内陆湿地',
            yAxisIndex:1,
            data:[138203, 111309, 82314,82244]
        },
      {
            name:'水库/池塘',
            type:'line',
            stack1:'人工湿地',
            data:[5157, 5369, 10707, 12487]
        },
      {
            name:'人工河渠',
            type:'line',
            stack1:'人工湿地',
            data:[616, 104, 244, 369]
        },
       {
            name:'海水养殖/盐场等',
            type:'line',
            stack1:'人工湿地',
            data:[3984, 6960, 8926, 8884]
        },
       {
            name:'其他人工湿地',
            type:'line',
            stack1:'人工湿地',
            data:[35,29, 24, 12]
        },
        
        {
            name:'1978年湿地总面积',
            type:'pie',
            radius : '50',
            center: ['18%', '85%'],
            startAngle:0,
             tooltip : {
            trigger: 'item',
            formatter: "{a} :309296km^2<br/>{b} : {c} km^2({d}%)"
    },
            itemStyle:{
              normal:{
            label:{show:true}
            },
             emphasis : {
                    color: (function (){
                        var zrColor = require('zrender/tool/color');
                        return zrColor.getRadialGradient(
                            650, 200, 80, 650, 200, 120,
                            [[0, 'rgba(255,155,120,1)'],[1, 'rgba(255,0,0,1)']]
                        )
                    })(),
                }
            },
            data:[
                {value:13104, name:'滨海湿地'},
                {value:286399, name:'内陆湿地'},
                {value:9792, name:'人工湿地'},
              
            ]
        },
         {
            name:'1990年湿地总面积',
            type:'pie',
            radius : '50',
            center: ['41%', '85%'],
            startAngle:90,
            tooltip : {
            trigger: 'item',
            formatter: "{a}: 243023km^2<br/>{b} : {c}km^2 ({d}%)"
    },
            itemStyle:{
              normal:{
            label:{show:true}
            },
             emphasis : {
                    color: (function (){
                        var zrColor = require('zrender/tool/color');
                        return zrColor.getRadialGradient(
                            650, 200, 80, 650, 200, 120,
                            [[0, 'rgba(255,155,120,1)'],[1, 'rgba(255,0,0,1)']]
                        )
                    })(),
                }

                      },
            data:[
                {value:11463, name:'滨海湿地'},
                {value:219106, name:'内陆湿地'},
                {value:12453, name:'人工湿地'},
              
            ]
        },
         {
            name:'2000年湿地总面积',
            type:'pie',
            radius : '50',
            center: ['67%', '85%'],
            startAngle:180,
             tooltip : {
            trigger: 'item',
            formatter: "{a} :214548km^2<br/>{b} : {c}km^2 ({d}%)"
    },
            itemStyle:{
              normal:{
            label:{show:true}
            },
             emphasis : {
                    color: (function (){
                        var zrColor = require('zrender/tool/color');
                        return zrColor.getRadialGradient(
                            650, 200, 80, 650, 200, 120,
                            [[0, 'rgba(255,155,120,1)'],[1, 'rgba(255,0,0,1)']]
                        )
                    })(),
                }
                      },
            data:[
                {value:9109, name:'滨海湿地'},
                {value:185547, name:'内陆湿地'},
                {value:19892, name:'人工湿地'},
              
            ]
        },
         {
            name:'2008年湿地总面积',
            type:'pie',
            radius : '50',
            center: ['90%', '85%'],
            startAngle:270,
             tooltip : {
            trigger: 'item',
            formatter: "{a} :207896km^2<br/>{b} : {c} km^2({d}%)"
    },
            itemStyle:{
              normal:{
            label:{show:true}
            },
             emphasis : {
                    color: (function (){
                        var zrColor = require('zrender/tool/color');
                        return zrColor.getRadialGradient(
                            650, 200, 80, 650, 200, 120,
                            [[0, 'rgba(255,155,120,1)'],[1, 'rgba(255,0,0,1)']]
                        )
                    })(),
                }
                      },
            data:[
                {value:7890, name:'滨海湿地'},
                {value:178262, name:'内陆湿地'},
                {value:13240, name:'人工湿地'},
              
            ]
        }
    
    ]
};
                    
                    
                    
                    
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );
