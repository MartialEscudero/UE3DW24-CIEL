import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }

  getMeteo() {
    return this.http.get('https://prevision-meteo.ch/services/json/lyon')
  }
}
