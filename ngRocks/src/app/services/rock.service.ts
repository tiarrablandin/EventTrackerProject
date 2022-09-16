import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RockService {
  private baseUrl = 'http://localhost:8082/';
  private url = this.baseUrl + 'api/rocks';

  constructor(private http: HttpClient) { }
}
