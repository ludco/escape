import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MansionService {

  private baseUrl = 'https://hackathon-wild-hackoween.herokuapp.com'
  movies : Movie[];
  
  
  constructor(private http : HttpClient) { }

  getMovies():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/movies`);
  }

  //Function random
  shuffle(array : Movie[]){
    return array.sort(function() { return Math.random() - .5 });
}



}
