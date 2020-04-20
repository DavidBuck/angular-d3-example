import { Component } from '@angular/core';
import { sensorData } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sensorData: any[];

  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'Sensor';
  showYAxisLabel = true;
  yAxisLabel = 'Temperature (deg)';
  yAxisTicks = [5, 10, 15, 20, 25, 30, 35, 40];
  trimYAxisTicks = false;
  barPadding = 16;

  constructor() {
    Object.assign(this, { sensorData });
  }

  onSelect(data) {
    console.log(`selected: ${data.label}  value: ${data.value}`);
  }
}
