import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies-model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: Movies = {} as Movies;
  isLoading: boolean = false;
  constructor(private movieService: MovieService, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoading = true;
    const token = this.authService.getToken();
    if (!!token) {
      this.movieService.getMovies(token).subscribe(result => {
        this.movies = result;
        this.isLoading = false;
      },
        error => {
          console.log(error);
          alert(error?.statusText);
          this.isLoading = false;
        });
    }
  }

  loadMovie(nextUrl: string | undefined) {
    this.isLoading = true;
    if(!nextUrl) {
      return;
    }
    const token = this.authService.getToken();
    if (!!token) {
      this.movieService.getMovies(token, nextUrl).subscribe(result => {
        this.movies = result;
        this.isLoading = false;
      },
        error => {
          console.log(error);
          alert(error?.statusText);
          this.isLoading = false;
        });
    }
  }

}
