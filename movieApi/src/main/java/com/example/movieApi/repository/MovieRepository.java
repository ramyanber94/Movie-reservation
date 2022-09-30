package com.example.movieApi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.movieApi.model.Movie;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {
    Movie findByName(String name);
}
