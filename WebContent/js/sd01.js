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
                 'echarts/chart/pie',
                 'echarts/chart/map',
                 // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('sd')); 
                
                var option = {
                backgroundColor:'#CCC33',
 
    title : {
        text: '2013年全国各省（区、市）湿地面积和鸟的种类',
        textStyle:{color:'#3366FF',
                   fontSize:20,
                   fontStyle:'italic',
                   fontWeight:'bold'
    },
        subtext: '数据来自中国发展门户网',
        sublink:'http://cn.chinagate.cn/environment/2014-03/20/content_31846078.htm',
    },
    tooltip : {
        trigger: 'item',
        formatter:function(params){
        console.log(params)
        var series=option.series;
        var name=params.data.name;
        var seriesIndex=params.data.seriesIndex;
        var res=name;
        for(var i=0,j=seriesIndex.length;i<j;i++){
        var data=series[seriesIndex[i]].data;
        for(var l=0,k=data.length;l<k;l++){
        if (data[l].name==name&&series[seriesIndex[i]].name=='湿地面积') {
        res+='<br/>'+series[seriesIndex[i]].name+':'+data[l].value+'万公顷'}
        else if((data[l].name==name&&series[seriesIndex[i]].name=='鸟的种类')){
          res+='<br/>'+series[seriesIndex[i]].name+':'+data[l].value+'种'
                        
        }

        }

        };
        return res;
            

        },
    },
    legend: {
        x:'right',
        selectedMode:'multiple',

         selected:{
            '鸟的种类' : true,
             
        },
        selectedMode:'single',
        textStyle:{color:'auto'},
        data:[
        {name:'湿地面积',icon:'image://http://www.easyicon.net/api/resizeApi.php?id=38627&size=128', itemWidth:40,
        itemHeight:40,},
        {name:'鸟的种类',icon:'image://http://www.easyicon.net/api/resizeApi.php?id=569923&size=128', itemWidth:40,
        itemHeight:40,}]
    },
    dataRange: {
        orient: 'horizontal',
        min: 0,
        max: 1100,
        text:['高','低'], 
        calculable : true,
        precision:2,
        color: ['#0033CC','#00CCff','#66FFFF','#00CC33','#33FF00',],
        
    },
    toolbox: {
        show : true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
     
    series : [
        {
            name: '湿地面积',
            type: 'map',
            mapType: 'china',
            mapLocation: {
                x: 'center'
            },
            roam:true,
             scaleLimit:{
                min:0.8,
                max:1.5
            },
            mapValuePrecision:2,
           mapValueCalculation:function(params){
           return  params.data.value;

           },

              itemStyle:{
                normal:{
                    borderColor:'Aqua',
                    borderWidth:2,
                    
                }
            },
            
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[
                {name:'西藏', value:652.90},
                {name:'青海', value:814.36},
                {name:'宁夏', value:20.72},
                {name:'海南', value:32.00},
                {name:'甘肃', value:169.39},
                {name:'贵州', value:20.97},
                {name:'新疆', value:394.82},
                {name:'云南', value:56.35},
                {name:'重庆', value:20.72},
                {name:'吉林', value:99.76},
                {name:'山西', value:15.19},
                {name:'天津', value:29.56},
                {name:'江西', value:91.01},
                {name:'广西', value:75.43},
                {name:'陕西', value:30.85},
                {name:'黑龙江', value:514.33},
                {name:'内蒙古', value:601.06},
                {name:'安徽', value:104.18},
                {name:'北京', value:4.81},
                {name:'福建', value:87.10},
                {name:'上海', value:46.46},
                {name:'湖北', value:144.50},
                {name:'湖南', value:101.97},
                {name:'四川', value:174.78},
                {name:'辽宁', value:139.48},
                {name:'河北', value:94.19},
                {name:'河南', value:62.79},
                {name:'浙江', value:111.01},
                {name:'山东', value:173.75},
                {name:'江苏', value:282.28},
                {name:'广东', value:175.34},
                {name:'香港',value:'undefinded'},
                {name:'澳门',value:'undefinded'},
                 {name:'南海诸岛',value:'undefinded'},
                {name:'台湾',value:'undefinded'}
               
            ],
        },
             {
            name: '鸟的种类',
            type: 'map',
            mapType: 'china',
            mapLocation: {
                x: 'center'
            },
              itemStyle:{
                normal:{
                    borderColor:'Aqua',
                    borderWidth:2,
                    
                }
            },
            
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
                data : [
                {name:'西藏', value:161},
                {name:'青海', value:240},
                {name:'宁夏', value:34},
                {name:'海南', value:254},
                {name:'甘肃', value:331},
                {name:'贵州', value:280},
                {name:'新疆', value:378},
                {name:'云南', value:725},
                {name:'重庆', value:271},
                {name:'吉林', value:143},
                {name:'山西', value:97},
                {name:'天津', value:263},
                {name:'江西', value:369},
                {name:'广西', value:460},
                {name:'陕西', value:331},
                {name:'黑龙江', value:119},
                {name:'内蒙古', value:248},
                {name:'安徽', value:313},
                {name:'北京', value:373},
                {name:'福建', value:467},
                {name:'上海', value:269},
                {name:'湖北', value:429},
                {name:'湖南', value:297},
                {name:'四川', value:491},
                {name:'辽宁', value:256},
                {name:'河北', value:299},
                {name:'河南', value:300},
                {name:'浙江', value:406},
                {name:'山东', value:195},
                {name:'江苏', value:398},
                {name:'广东', value:406},
                {name:'香港',value:'undefinded'},
                {name:'澳门',value:'undefinded'},
                {name:'南海诸岛',value:'undefinded'},
                {name:'台湾',value:'undefinded'}
               
                ]
            },

        
        ]
    };
      

                    
                    
                    
                    
                    
                    
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );                    