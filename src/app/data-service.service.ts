import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Data } from './dataformat';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }
}
