//9bbdc1012ec2c9838c319ff77b2e3a2f

//https://api.themoviedb.org/3/movie/550?api_key=9bbdc1012ec2c9838c319ff77b2e3a2f

//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmJkYzEwMTJlYzJjOTgzOGMzMTlmZjc3YjJlM2EyZiIsInN1YiI6IjYyNmI5NDI3NjlkMjgwMGIwODg1NGI4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.POrAwfjUjsLbG2ECqw6KNd56wbgA0qnbVlSkhWw1S9w





import React, { Component } from 'react'
import {MovieList} from './MovieList'
import SearchBar from './SearchBar'
import axios from "axios"

console.log(process.env.REACT_APP_API_KEY)

export default class App extends Component {
    state={
      movies:[],
      // movies: [
      //   {
      //     id: 1,
      //     name: "The Matrix 3",
      //     rating: "8.1",
      //     overview:
      //       "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
      //     imageURL:
      //       "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
      //   },
      //   {
      //     id: 2,
      //     name: "The Matrix Reloaded",
      //     rating: "6.9",
      //     imageURL:
      //       "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jBegA6V243J6HUnpcOILsRvBnGb.jpg",
      //     overview:
      //       "Six months after the events depicted in The Matrix, Neo has proved to be a good omen for the free humans, as more and more humans are being freed from the matrix and brought to Zion, the one and only stronghold of the Resistance. Neo himself has discovered his superpowers including super speed, ability to see the codes of the things inside the matrix and a certain degree of pre-cognition.",
      //   },
      //   {
      //     id: 3,
      //     name: "Saw 3D",
      //     rating: "7.5",
      //     overview:
      //       "SAW legacy, a group of Jigsaw survivors gathers to seek the support of self-help guru and fellow survivor Bobby Dagen, a man whose own dark secrets unleash a new wave of terror.",
      //     imageURL:
      //       "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qHCZ6LjtmqWDfXXN28TlIC9OppK.jpg",
      //   },
      //   {
      //     id: 4,
      //     name: "Blitz 007",
      //     rating: "11",
      //     overview:
      //       "A tough, renegade cop with a gay sidekick is dispatched to take down a serial killer who has been targeting police officers. AÇIKLAMA AÇIKLAMA",
      //     imageURL:
      //       "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qCPMjT8Ld8tvs1zs7LY2jpKlRIK.jpg",
      //   },
      //   {
      //     id: 5,
      //     name: "Hostage",
      //     rating: "6.3",
      //     imageURL:
      //       "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4hne3v6jN4MlCnhSkxOW7YspJhr.jpg",
      //     overview:
      //       "When a mafia accountant is taken hostage on his beat, a police officer – wracked by guilt from a prior stint as a negotiator – must negotiate the standoff, even as his own family is held captive by the mob.",
      //   },
      // ],
    search:"",} 
    // fetch() js ait builtin bir asenkron fonksiyondur ve network sorgularını calıstırmamızı saglar.Sonuc olarak promise dondurur.
    //  async componentDidMount(){
    //   //  const baseURL = "http://localhost:3002/movies";
    //   //  const response = await fetch(baseURL);
    //   //  console.log(response);
    //   //  const data = await response.json();
    //   //  console.log(data);
    //   //  this.setState({movies:data})

    //   await fetch ("http://localhost:3002/movies").then((response)=>response.json()).then((data)=>this.setState({movies:data})).catch((err)=>console.log(err));

    // }
    // Axios Kutuphanesi ile
    async componentDidMount(){
      const response = await axios.get(
        `https://api.themoviedb.org/3/list/8200648?language=tr-TR&api_key=${process.env.REACT_APP_API_KEY}`
      );
  
      console.log(response.data.items);
      this.setState({ movies: response.data.items });

    }
  // deleteMovie = (movie)=>{
  //   const newMovieList = this.state.movies.filter(m=>m.id!==movie.id);
  //   //Eğer elimizde hiç film kaydi yoksa bu pattern yeni kayitlari ekliyor
  //   // this.setState({
  //   //   movies:newMovieList,

  //   // })
  //   //Var olan  statein durumunu guncelliyoruz
  //   this.setState((state)=>({
  //     movies:newMovieList,
  //   }));
  // }

  // FETCH ILE deleteMovies fonksiyonu
  // deleteMovie = async(movie)=>{
  //   const baseURL = `http://localhost:3002/movies/${movie.id}`
  //   await fetch(baseURL,{method:"DELETE"})
  //   const newMovieList = this.state.movies.filter(m=>m.id!==movie.id);
    
  //   this.setState((state)=>({
  //     movies:newMovieList,
  //   }));
  // }

  //A Axios kutuphanesi ile deleteMovies fonksiyonu
  deleteMovie = async(movie)=>{
    axios.delete(`http://localhost:3002/movies/${movie.id}`);
    
    const newMovieList = this.state.movies.filter(m=>m.id!==movie.id);
    
    this.setState((state)=>({
      movies:newMovieList,
    }));
  }
  searchMovie=(event)=>{
    console.log(event.target.value)
    this.setState({search:event.target.value})
  }
  render() {
    let filteredMovies = this.state.movies.filter((movie)=>{
      return(
        movie.title.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1
      )
    })
    return (
      <div className='container'>
          <div className='row my-3'>
              <div className='col-md-12'>
                  <SearchBar searchMovieProp = {this.searchMovie}/>
              </div>
              <MovieList
               //movies={this.state.movies}
               movies={filteredMovies}
               deleteMovieProp = {this.deleteMovie}
               />

          </div>
      </div>
    )
  }
}
