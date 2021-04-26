import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import highchartsSankey from 'highcharts/modules/sankey';

highchartsSankey(Highcharts);

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.css']
})
export class HighchartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   title = 'myHighchart';
    highcharts = Highcharts;

    chartOptions = {   
      chart: {
         type: "sankey"
      },
      title: {
         text: 'Highcharts Sankey Diagram'
     },
     accessibility: {
         point: {
             valueDescriptionFormat: '{index}. {point.from} to {point.to}, {point.weight}.'
         }
     }, 
     series: [{
         keys: ['from', 'to', 'weight'],
         data: [
             ['Brazil', 'Portugal', 0.40],
             ['New Zealand', 'Portugal', 0.40],
             ['India', 'Portugal', 0.40],
             //['Portugal', 'Senegal', 1],
             ['Portugal', 'Senegal', 0.40],
             ['Portugal', 'Senegal', 0.40],
             ['Portugal', 'Senegal', 0.40],
             //['Portugal', 'Senegal', 1],
         ],
         name: 'Sankey demo series',
         nodeWidth:100,
         nodePadding:20
     }],
    };

}
