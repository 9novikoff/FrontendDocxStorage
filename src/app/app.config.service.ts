import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private apiUrl: string = "";

  constructor(private http: HttpClient) { }

  loadAppConfig() {
    // return this.http.get('./assets/config.json')
    //   .toPromise()
    //   .then(data => {
    //     this.appConfig = data;
    //   });
    this.apiUrl = "https://localhost:7027/api";
  }

  get apiBaseUrl() {

    if (!this.apiUrl) {
      throw Error('Config file not loaded!');
    }

    return this.apiUrl;
  }
}