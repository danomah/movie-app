import React, { Component } from 'react';


class App extends Component {

    constructor(props) {
        super(props);
        //set initial state
        this.state = {
            films: [],
            film_types: [],
            isLoaded: false,
        }
    }

    componentDidMount(){

        //fetch now_playing API data
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=f067647ceca6032bfa993e948a6846cc')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    films: json,
                })
            })
        // fetch genre API data
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=f067647ceca6032bfa993e948a6846cc')
            .then(res => res.json())
            .then(json => {
                this.setState({

                    film_types: json,
                })
            })
       
    }


  render() {

    var {isLoaded, films, film_types} = this.state;
    console.log(films);
    console.log(film_types.genres);



    if(!isLoaded){
        return <div>Loading films ...</div>
    }else{

        return (
        <div className="App container-fluid">
            <h1 className="text-success">Movies Playing at Zone</h1>


            

         {films.results.map(film => (
            <div className="row movie" key={film.popularity}>
                <div className="col-md-2">     
                    <img src={'https://image.tmdb.org/t/p/w185' + film.poster_path} alt={film.title} />
                </div>
                <div className="col=md-10">
                    <h2 className="text-primary">{film.title}</h2> 
                    <p><strong className="text-success">Genre: </strong> <em>(Placeholder: Currently genre_ids >> {film.genre_ids.join(', ')})</em></p>
                    <p><strong className="text-success">Synopsis: </strong>{film.overview.substr(0, 120)} ...</p>
                    <p><strong className="text-success">Rating: </strong>{film.vote_average}</p>
                    

                </div>

            </div>

            ))};

          </div>
        );

    }//end else
  }//end render
}//end class App








export default App;
