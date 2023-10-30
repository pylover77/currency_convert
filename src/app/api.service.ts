import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environments';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "https://v6.exchangerate-api.com/v6";
  constructor(private http: HttpClient) { }

  getMoedas(): Observable<any> {
    const accessKey = environment.apiKey; 
    return this.http.get(`${this.baseUrl}/${accessKey}/codes`);
  }

  getConversion( moedaOrigem: string, moedaDestino: string, valor:number): Observable<any>{
    const accessKey = environment.apiKey;
    return this.http.get(`${this.baseUrl}/${accessKey}/pair/${moedaOrigem}/${moedaDestino}/${valor}`)
  }

}
