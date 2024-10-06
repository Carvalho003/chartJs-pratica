const elementoGraficoUmidTemp = graficoUmidTemp;

const elementoGraficoMedia = graficoMediaUmidTemp;


const dataMedia = {
    labels: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho'],
    datasets:[
        {
            label:'Temperatura Média',
            backgroundColor:'#3C7352',
            color:'#3C7352',
            borderColor:'#3C7352',
            data:[22,24,27,23,20,18]
        },
        {
            label:'Umidade Média',
            backgroundColor:'#000',
            color:'#000',
            borderColor:'#000',
            data:[90,89,93,87,88,82]
        }
    ]
}

const dataUmidTemp = {
    labels: ['12:00','13:00', '14:00', '15:00', '16:00', '17:00'],
    datasets:[
        {
            label: 'Temperatura',
            data: [30,29,28,25,22,23],
            borderColor: '#3C7352',
            backgroundColor:'#3C7352'
        },
        {
            label: 'Umidade',
            data: [80,82,80,85,60,83],
            borderColor: '#000',
            backgroundColor: '#000'
        }
    ],

}


const configMedia = {
    type:'bar',
    data:dataMedia,
    options:{
        plugins: {
            legend:{
                position:'bottom'
            },
            title:{
                display: true,
                text:'Média de Temperatura e Umidade'
            }
        }   
    }  
}

const configUmidTemp = {
    type: 'line',
    data: dataUmidTemp,
    options:{
        plugins: {
            legend:{
                position:'bottom'
            },
            title:{
                display: true,
                text:'Variação de Temperatura e Umidade'
            }
        }   
    }
}

const instanciaGraficoUmidTemp = new Chart(elementoGraficoUmidTemp, configUmidTemp);

const instanciaGraficoMedia = new Chart(elementoGraficoMedia, configMedia);