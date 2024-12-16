import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://127.0.0.1:8000/api/movies";
  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<any> {
    return this.httpClient.get(this.url).pipe(res => res)
  }

  getMovieById(id:string): Observable<any> {
    return this.httpClient.get(`${this.url}/${id}`).pipe(res => res)
  }
}
