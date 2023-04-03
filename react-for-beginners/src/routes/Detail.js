
import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

function Detail(){
    const id=useParams();
    const getMoives = async() =>{
        const json = await (
            await fetch('https://yts.mx/api/v2/list_movies.json?movie_id=${id}')
        ).json();
        console.log(json)
    }
    useEffect(()=>{
        getMoives();
    },[]);
    return (
        <div>
            Detail
        </div>
    );
}

export default Detail;