import { Component } from '@angular/core';
import { ICurrentWeather } from '../interface/icurrent-weather.interface';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent {

  current: ICurrentWeather;

}
