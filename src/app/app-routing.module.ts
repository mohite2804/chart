

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';
const routes : Routes = [
  { path : 'line-chart', component : LineChartComponent},
  { path : 'pie-chart', component : PieChartComponent},
  { path : 'bar-chart', component : BarChartComponent},
  { path : 'doughnut-chart', component : DoughnutChartComponent},
  { path : 'radar-chart', component : RadarChartComponent},
  { path : 'bubble-chart', component : BubbleChartComponent},
  { path : 'scatter-chart', component : ScatterChartComponent},
  { path : 'polar-area-chart', component : PolarAreaChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }


