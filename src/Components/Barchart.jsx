import React from 'react'
// import {Bar} from 'react-chartjs-2';
// import Chart, {Chart as ChartJS, defaults} from 'react-chartjs-2';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import {invoices} from '../data'
import './chart.css'

function Barchart() {
  return (
    <div className='wrapper'>
        <div className='bar-wrapper'>
            <Chart type= 'bar'
                data =  {{
                    labels: invoices.map(data => data.year),
                    datasets: [{
                        label: 'internal Invoices',
                        data : invoices.map(data => data.internal),
                        fill: true,
                        backgroundColor: 'rgba(0, 81, 255, 0.8)',
                        borderSkipped: true,
                        },
                        {
                        label: 'external Invoices',
                        data : invoices.map(data =>  data.external),
                        fill: true,
                        backgroundColor: 'rgba(255, 166, 0, 0.966)',
                        }
                    ]
                }}
                
                width= {600}
                height= {600}
               
                options = {{
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                        legend: {
                          position: 'top',
                          align: 'end',
                            display: true,
                          labels: {
                            boxWidth: 20,
                            boxHeight: 20,
                            usePointStyle: true,
                            pointStyleWidth: 20,
                            useBorderRadius: true,
                            pointStyle: 'circle',
                            lineWidth: 10,
                            font: {
                                size: 12,
                            }
                          }
                        },
                        title: {
                          display: true,
                          text:'Monthly invoice distribution',
                          position: 'top',
                          align: 'start',
                          font : {
                            size: 23, 
                          },
                          color: 'rgba(9, 9, 103, 0.7)',
                        },
                        subtitle: {
                            display: true,
                            text: 'Track your invoice flow for any given period',
                            position: 'top',
                            align: 'start',
                            font : {
                                size: 16, 
                              },
                        }
                        
                    },
                    scales: {
                        y: {
                            max: 50,
                            
                            ticks: {
                                beginAtZero: true,
                                
                            }
                        }
                    },
                    // legend: {
                    //     labels: {
                    //        position: 'end',
                    //        boxWidth: 40,
                    //        boxHeight: 40,    
                    //     }
                    // }
                }}
                
            />
        </div>
      
    </div>
  )
}

export default Barchart
