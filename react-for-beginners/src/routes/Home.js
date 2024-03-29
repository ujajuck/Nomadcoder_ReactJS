import React from 'react';
import { useEffect, useState } from "react";
import Movie from "../elements/Movie";


function Home(){
    const [loading,setLoading]=useState(true);
    const [movies,setMovies]=useState([]);
    const getMoives = async() =>{
        const json = await (
            await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(()=>{
        getMoives();
    },[]);
    return <div>
        {
        loading?
        <h1>Loading...</h1>:
        <div>
            {
                
            movies.map(
                movie => 
                <div>
                    <Movie 
                        key={movie.id}
                        id={movie.id}
                        coverImg={movie.medium_cover_image}
                        title={movie.title}
                        summary={movie.summary}
                        genres={movie.genres}
                    />
                </div>
                
            )
            }
        </div>
        }

    </div>;
}

export default Home;