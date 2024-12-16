import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Movie } from '../interface/movie';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent implements OnInit {

  movieList: Movie[] = [];
  moviesFlag: boolean = false;
  movieFlag: boolean = false;
  movie: Movie = { id: '', name: '', genre: '' };

  movieId: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void { }

  getMovies() {
    this.moviesFlag = true;
    this.apiService.getMovies().subscribe({
      next: (result) => {
        this.movieList = result;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  getMovieById(): void {
    this.movieFlag = true;
    this.apiService.getMovieById(this.movieId).subscribe({
      next: (result) => {
        this.movie.id = result.id;
        this.movie.name = result.name;
        this.movie.genre = result.genre;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  cleanMovies() {
    this.moviesFlag = false;
    this.movieList = [];
  }

  cleanMovie() {
    this.movieFlag = false;
    this.movieList = [];
  }
}
