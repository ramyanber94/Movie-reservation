package com.example.movieApi.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.movieApi.model.Movie;
import com.example.movieApi.repository.MovieRepository;

@Service
public class MovieService {

	@Autowired
		MovieRepository movieRepository;
	
	private Movie createMovie(Movie movie) {
	    return movieRepository.save(movie);
	}
	
	public Movie checkMovies(Movie movie){
		Movie movieValue = movieRepository.findByName(movie.getName());
		if(movieValue != null){
			movieValue.setSeats(movie.getSeats());
			movieRepository.save(movieValue);
			return movieValue;
		}else {
			return createMovie(movie);
		}
	}

	public Movie getMoviesByName(String name){
		Movie movie = movieRepository.findByName(name);
		return movie;
	}

	public List<Movie> getMovies() {
	    return movieRepository.findAll();
	}
	
	public void deleteMovie(int movieId) {
	    movieRepository.deleteById(movieId);
	}
	
}
