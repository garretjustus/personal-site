import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StrapiService {
  url: string ='';
  key: string = '';

  constructor(private http: HttpClient) { }
  getData = (parameters: any): any => {
    let params: any = {};
    params.key = this.key;
    return this.http.get(this.url, {
      params: params,
    });
  };
}
