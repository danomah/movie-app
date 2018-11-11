import React, { Component } from 'react';


class Genre extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			genres: []
		}
	}

	componentDidMount() {
		fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=f067647ceca6032bfa993e948a6846cc')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    genres: json,
                })
            })
	}

	render() {

	 var {genres} = this.state;
    console.log(genres);

		return{

		}
	}

}//end class Genre

