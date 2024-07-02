import { Injectable } from '@angular/core';
import { Artist, Movie } from "./interface.model";
import { Observable, of, Subscription } from "rxjs";

@Injectable( {
  providedIn: 'root'
} )
export class DataService {
  movies: Movie[] = [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      year: 2000,
      director: 'Director 1',
      genre: 'Genre 1',
      artist: [ 1, 2, 3 ],
      plot: 'Plot 1',
      poster: 'Poster URL 1',
      rating: 7.5,
      votes: 1000,
      runtime: '120 min',
      imdbID: 'tt0000001',
      type: 'Movie',
      response: 'Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.'
    },
    {
      id: 2,
      title: 'The Godfather',
      year: 2001,
      director: 'Director 2',
      genre: 'Genre 2',
      artist: [ 2, 3, 4 ],
      plot: 'Plot 2',
      poster: 'Poster URL 2',
      rating: 8.5,
      votes: 2000,
      runtime: '130 min',
      imdbID: 'tt0000002',
      type: 'Movie',
      response: 'Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.'
    },
    {
      id: 3,
      title: 'Dilwale Dulhania Le Jayenge',
      year: 2002,
      director: 'Director 3',
      genre: 'Genre 3',
      artist: [ 3, 4, 5 ],
      plot: 'Plot 3',
      poster: 'Poster URL 3',
      rating: 9.5,
      votes: 3000,
      runtime: '140 min',
      imdbID: 'tt0000003',
      type: 'Movie',
      response: 'Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.'
    },
    {
      id: 4,
      title: 'The Roundup: No Way Out',
      year: 2003,
      director: 'Director 4',
      genre: 'Genre 4',
      artist: [ 4, 5, 6 ],
      plot: 'Plot 4',
      poster: 'Poster URL 4',
      rating: 6.5,
      votes: 4000,
      runtime: '150 min',
      imdbID: 'tt0000004',
      type: 'Movie',
      response: 'Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.'
    },
    {
      id: 5,
      title: 'Movie 5',
      year: 2004,
      director: 'Director 5',
      genre: 'Genre 5',
      artist: [ 5, 6, 7 ],
      plot: 'Plot 5',
      poster: 'Poster URL 5',
      rating: 5.5,
      votes: 5000,
      runtime: '160 min',
      imdbID: 'tt0000005',
      type: 'Movie',
      response: 'Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.'
    }
  ];
  artistList: Artist[] = [
    {
      id: 1,
      name: 'Artist 1',
      birth: '1970-01-01',
      country: 'Country 1',
      description: 'Description 1',
      photo: 'https://via.placeholder.com/150x150',
      movieId: [ 1, 2 ]
    },
    {
      id: 2,
      name: 'Artist 2',
      birth: '1980-01-01',
      country: 'Country 2',
      description: 'Description 2',
      photo: 'https://via.placeholder.com/150x150',
      movieId: [ 2, 3 ]
    },
    {
      id: 3,
      name: 'Artist 3',
      birth: '1990-01-01',
      country: 'Country 3',
      description: 'Description 3',
      photo: 'https://via.placeholder.com/150x150',
      movieId: [ 1, 3 ]
    },
    {
      id: 4,
      name: 'Artist 3',
      birth: '1990-01-01',
      country: 'Country 3',
      description: 'Description 3',
      photo: 'https://via.placeholder.com/150x150',
      movieId: [ 4 ]
    },
    {
      id: 5,
      name: 'Artist 3',
      birth: '1990-01-01',
      country: 'Country 3',
      description: 'Description 3',
      photo: 'https://via.placeholder.com/150x150',
      movieId: [ 5 ]
    }
  ];

  constructor() {
  }

  getMovies(): Observable<Movie[]> {
    return of( this.movies );
  }

  getMovie( id: number ): Movie | undefined {
    return this.movies.find( movie => movie.id == id );
  }

  getArtistsByMovieId( movieId: number ): Artist[] {
    console.log(movieId ?? typeof movieId)
    return this.artistList.filter( artist => artist.movieId.includes( movieId ) );
  }

  // getMovie(id: number) {
  //   return this.movies.find(movie => movie.id === id);
  // }
  getArtists() {
    return this.artistList;
  }

  getArtist( id: number ) {
    return this.artistList.find( artist => artist.id === id );
  }

  getMovieByArtist(id: number) {
    return this.movies.filter(movie => movie.artist.includes(id));
  }
}
