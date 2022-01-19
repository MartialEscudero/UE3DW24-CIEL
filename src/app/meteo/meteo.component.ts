import { Component, OnInit } from '@angular/core';
import { MeteoService } from 'src/app/meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {

  meteo:any

  constructor(private meteoService: MeteoService) { }

  ngOnInit(): void {
    this.getTheMeteo();
  }

  getTheMeteo(): void {
    this.meteoService.getMeteo()
    .subscribe(
        data => {
            this.meteo = data;
    },error => {
        console.log(error)
    });
  }
}
