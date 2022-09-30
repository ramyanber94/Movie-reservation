import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';// This is where I import map operator

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  baseUrl : string = 'localhost/api/'
  
  getMovies(page: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${environment.apiBaseUrl}&page=${page}`
    );
  }

  getImagesForMovies(id: string) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${environment.apiBaseUrl}`
    );
  }

  reserveMovie(request: any){
    this.http.post('/api/movies', request).subscribe(data => {
      console.log(data)
    })
  }

  getMovieByName(name: string){
    return this.http.get(`/api/getMovie/?name=${name}`);
  }
}
