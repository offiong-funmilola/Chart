import React from 'react'
// import {Bar} from 'react-chartjs-2';
// import Chart, {Chart as ChartJS, defaults} from 'react-chartjs-2';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import {invoices} from '../data'
import './chart.css'

function Barchart() {
    // let minDataValue = Math.min(mostNegativeValue, options.suggestedMin);
    // let maxDataValue = Math.max(mostPositiveValue, options.suggestedMax);
  return (
    <div className='wrapper'>
        <div className='bar-wrapper'>
            <Chart type= 'bar'
                data =  {{
                    labels: invoices.map(data => data.year),
                    datasets: [{
                        label: 'internal Invoices',
                        data : invoices.map(data => data.internal),
                        fill: false,
                        backgroundColor: 'rgb(0, 81, 255)',
                        borderSkipped: true
                        },
                        {
                        label: 'external Invoices',
                        data : invoices.map(data =>  data.external),
                        fill: false,
                        backgroundColor: 'rgba(255, 166, 0, 0.966)',
                        borderSkipped: true

                        }
                    ]

                }}
                width={500}
                height={300}
                options = {{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            max: 50,
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    },
                    legend: {
                        labels: {
                           position: 'end',
                           boxWidth: 40,
                           boxHeight: 40,    
                        }
                    }
                }}
                
            />
        </div>
      
    </div>
  )
}

export default Barchart
