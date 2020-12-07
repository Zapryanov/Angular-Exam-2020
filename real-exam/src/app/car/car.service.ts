import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICar } from '../shared/interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<ICar[]> {
    return this.http.get<ICar[]>(`${apiUrl}/cars`);
  }
}
