import { HTTP } from '@ionic-native/http/ngx';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {
  baseUrl = 'https://dragon-ball-api.herokuapp.com/api/character/';
  constructor(private http: HttpClient, private nativeHttp: HTTP) { }

  getCharacters() {
    return this.nativeHttp.get(this.baseUrl, {}, {
      'Content-type': 'application/json'
    });
  }

  getCharacterDetails(name: string) {
    return this.nativeHttp.get(this.baseUrl + name, {}, {
      'Content-type': 'application/json'
    });
  }
}
