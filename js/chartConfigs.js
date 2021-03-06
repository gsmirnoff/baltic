var chartConfigs = {
    solodYear:{//1.3
        csv:'data/solod_2013.csv',
        colorSet:['#e0bcbc', '#d19392', '#aa4643', '#903a38'],
        tips:['y']
    },
    solodNov:{//1.2
        csv:'data/solod_nov.csv',
        colorSet:['#e0bcbc', '#d19392', '#aa4643', '#903a38'],
        tips:['y']
    },
    solodBaltic:{//1.1
        csv:'data/solod_baltic.csv',
        colorSet:['#e0bcbc', '#d19392', '#aa4643', '#903a38'],
        tips:['x', 'y'],
        hideX:true
    },
    syropYear:{//2.1
        csv:'data/syrop_total.csv',
        colorSet:['#4f81bd'],
        tips:['x', 'y'],
        hideX:true
    },
    glassYear:{//4.1.2
        csv:'data/glass_2013.csv',
        colorSet:['#4f81bd'],
        tips:['x', 'y'],
        hideX:true,
        withLineChart:true,
        lineColor:'#8ea5cb'
    },
    glassBaltic:{//4.1.1
        csv:'data/glass_baltic.csv',
        colorSet:['#93cddd'],
        tips:['x', 'y'],
        hideX:true,
        withLineChart:true,
        lineColor:'#8ea5cb'
    },
    glassFactory:{//4.1.3
        csv:'data/glass_factory.csv',
        colorSet:['#89a54e'],
        tips:['x', 'y'],
        withLineChart:true,
        lineColor:'#b5ca92'
    },
    glassNov:{//4.1.4
        csv:'data/glass_nov.csv',
        colorSet:['#89a54e'],
        tips:['x', 'y'],
        withLineChart:true,
        lineColor:'#b5ca92'
    },
    potBaltic:{//4.2.1
        csv:'data/pot_baltic.csv',
        colorSet:['#89a54e'],
        tips:['x', 'y'],
	hideX:true,
        withLineChart:true,
        lineColor:'#b5ca92'
    },
    potYear:{//4.2.2
        csv:'data/pot_2013.csv',
        colorSet:['#4f81bd'],
        tips:['x', 'y'],
        hideX:true,
        withLineChart:true,
        lineColor:'#8ea5cb'
    },
    extractLossYear:{
        image:'img/charts/3.3.jpg',
        header:'Потери экстракта (%) по заводам YTD Компании за 2013 г.'
    },
    extractLossNov:{
        image:'img/charts/3.2.jpg',
        header:'Потери экстракта (%) по заводам Компании за ноябрь 2013 г.'
    },
    extractLossBaltic:{
        image:'img/charts/3.1.jpg',
        header:'Статистика потерь экстракта по стадиям, завод Балтика-Ярославль'
    }
}