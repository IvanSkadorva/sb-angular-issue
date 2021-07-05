import { NgModule } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { LibComponent } from './lib.component';



@NgModule({
  declarations: [
    LibComponent,
  ],
  imports: [
    HighchartsChartModule
  ],
  exports: [
    LibComponent,
  ],
})
export class LibModule { }
