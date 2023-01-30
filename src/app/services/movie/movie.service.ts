import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from 'src/app/models/movies-model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieUrl: string = 'https://demo.credy.in/api/v1/maya/movies/';

  constructor(private http: HttpClient) { }

  getMovies(token: string, nextUrl: string = ''): Observable<Movies> {
    nextUrl = nextUrl?.length > 0 ? nextUrl : this.movieUrl;
    let headers = new HttpHeaders();
    headers.set('Authorization', `Token ${token}`);
    return this.http.get<Movies>(nextUrl, { headers: headers });
  }
}
