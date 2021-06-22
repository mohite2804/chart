import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';

@NgModule({
  declarations: [
    AppComponent,    
    LineChartComponent, 
    PieChartComponent, 
    BarChartComponent, 
    DoughnutChartComponent, 
    RadarChartComponent, 
    BubbleChartComponent, 
    ScatterChartComponent, PolarAreaChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
   
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
