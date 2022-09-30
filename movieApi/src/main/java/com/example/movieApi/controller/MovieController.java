package com.example.movieApi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.example.movieApi.model.Movie;
import com.example.movieApi.service.MovieService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class MovieController {
	
	@Autowired
	MovieService movieService;

	
	@RequestMapping(value="/movies", method=RequestMethod.POST)
	public Object checkMovie(@RequestBody Movie movie) {
		Movie res = movieService.checkMovies(movie);
		return res;
	}

	@RequestMapping(value="/getMovie", method=RequestMethod.GET)
	public Object checkMovie(@RequestParam String name) {
		Movie res = movieService.getMoviesByName(name);
		return res;
	}
	
}
